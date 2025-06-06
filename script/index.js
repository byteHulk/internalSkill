const request = require("request");
const _ = require("underscore");
const path = require("path");
const fs = require("fs");
const util = require("util");
const { spawnSync } = require("node:child_process");

const GET_PROBLEMS = Symbol("GET_PROBLEMS");
const FILL_TEMPLATE = Symbol("FILL_TEMPLATE");
const CREATE_FILE = Symbol("CREATE_FILE");
const GET_PROBLEMS_TITLE = Symbol("GET_PROBLEMS_TITLE");

_.templateSettings = {
  evaluate: /\{\{(.+?)\}\}/g,
  interpolate: /\$\{(.+?)\}/g,
};

//主干逻辑

//1.check cache or login 2.get problem 3.create file
const sessionPath = path.join(
  process.env.HOME || process.env.USERPROFILE,
  ".lc/leetcode"
);
class LeetCodeCli {
  constructor() {
    this.config = {
      sys: {
        app: "leetcode.cn",
        categories: ["algorithms", "database", "shell", "concurrency"],
        langs: [
          "bash",
          "c",
          "cpp",
          "csharp",
          "golang",
          "java",
          "javascript",
          "kotlin",
          "mysql",
          "php",
          "python",
          "python3",
          "ruby",
          "rust",
          "scala",
          "swift",
          "typescript",
        ],
        urls: {
          base: "https://leetcode-cn.com",
          graphql: "https://leetcode.cn/graphql",
          // graphql: "https://leetcode-cn.com/graphql",
          login: "https://leetcode-cn.com/accounts/login/",
          github_login:
            "https://leetcode-cn.com/accounts/github/login/?next=%2F",
          facebook_login:
            "https://leetcode.com/accounts/facebook/login/?next=%2F",
          linkedin_login:
            "https://leetcode-cn.com/accounts/linkedin_oauth2/login/?next=%2F",
          leetcode_redirect: "https://leetcode-cn.com/",
          github_tf_redirect: "https://github.com/sessions/two-factor",
          github_login_request: "https://github.com/login",
          github_session_request: "https://github.com/session",
          github_tf_session_request: "https://github.com/sessions/two-factor",
          linkedin_login_request: "https://www.linkedin.com/login",
          linkedin_session_request:
            "https://www.linkedin.com/checkpoint/lg/login-submit",
          problems: "https://leetcode-cn.com/api/problems/$category/",
          problem: "https://leetcode-cn.com/problems/$slug/description/",
          test: "https://leetcode-cn.com/problems/$slug/interpret_solution/",
          session: "https://leetcode-cn.com/session/",
          submit: "https://leetcode-cn.com/problems/$slug/submit/",
          submissions: "https://leetcode-cn.com/api/submissions/$slug",
          submission: "https://leetcode-cn.com/submissions/detail/$id/",
          verify: "https://leetcode-cn.com/submissions/detail/$id/check/",
          favorites: "https://leetcode-cn.com/list/api/questions",
          favorite_delete:
            "https://leetcode-cn.com/list/api/questions/$hash/$id",
          plugin:
            "https://raw.githubusercontent.com/leetcode-tools/leetcode-cli/master/lib/plugins/$name.js",
          problem_detail: "https://leetcode-cn.com/graphql",
        },
      },
      autologin: {
        enable: false,
        retry: 2,
      },
      code: {
        editor: "vim",
        lang: "cpp",
      },
      file: {
        show: "${fid}.${slug}",
        submission: "${fid}.${slug}.${sid}.${ac}",
      },
      color: {
        enable: true,
        theme: "default",
      },
      icon: {
        theme: "",
      },
      network: {
        concurrency: 10,
        delay: 1,
      },
      plugins: {},
    };
    this.sessionPath = path.join(
      process.env.HOME || process.env.USERPROFILE,
      ".mylc"
    );
  }

  async generateProblem(id) {
    //1.read cache or getdata
    const problem = await this[GET_PROBLEMS](id);
    const title = await this[GET_PROBLEMS_TITLE](id);

    //2.fill template
    const data = await this[FILL_TEMPLATE](problem);
    // console.log(problem,'\n result')

    //3.create dir and file
    // file.mkdir(argv.outdir);
    return this[CREATE_FILE](problem, data, title, id);
    // fs.writeFileSync('../src/leetcode', data)
    // filename = genFileName(problem, argv);
    // file.write(filename, code);
    // console.log(data,'data')

    // return cb(null, problem);
    // })
  }

  async [GET_PROBLEMS](id) {
    const data = h.getProblemsJson();
    const config = this.config;

    const ele = data.find((e) => e.id == id) || data.find((e) => e.fid == id);
    if (!ele) throw new Error("failed to load locked problem!");

    let problem = { ...ele };
    const slug = ele?.slug;
    const opts = h.makeOpts(config.sys.urls.graphql);
    opts.headers.Origin = config.sys.urls.base;
    opts.headers.Referer = config.sys.urls.problem.replace("$slug", slug);

    opts.json = true;
    // "query getQuestionDetail($titleSlug: String!) {",
    opts.body = {
      query: [
        "query questionEditorData($titleSlug: String!) {",
        "  question(titleSlug: $titleSlug) {",
        "    content",
        "    stats",
        "    likes",
        "    dislikes",
        "    codeDefinition",
        "    sampleTestCase",
        "    enableRunCode",
        "    metaData",
        "    translatedContent",
        "  }",
        "}",
      ].join("\n"),
      variables: { titleSlug: slug },
      operationName: "questionEditorData",
    };
    const [err, result] = await h.to(h.syncRequest(opts));
    if (err) throw new Error(JSON.stringify(err) + "is error");
    const { response, body } = result;
    // console.log(result)
    const q = body.data.question;

    problem.totalAC = JSON.parse(q.stats).totalAccepted;
    problem.totalSubmit = JSON.parse(q.stats).totalSubmission;
    problem.likes = q.likes;
    problem.dislikes = q.dislikes;

    problem.desc = q.translatedContent ? q.translatedContent : q.content;

    problem.templates = JSON.parse(q.codeDefinition);
    problem.testcase = q.sampleTestCase;
    problem.testable = q.enableRunCode;
    problem.templateMeta = JSON.parse(q.metaData);
    // @si-yao: seems below property is never used.
    // problem.discuss =  q.discussCategoryId;

    return problem;
  }

  async [FILL_TEMPLATE](problem) {
    const data = _.extend({}, problem);
    const template = data.templates.find((x) => x.value === "javascript");

    if (!template) throw new Error("template is error");
    const opts = {
      lang: "javascript",
      code: template.defaultCode,
      tpl: "codeonly",
    };

    // unify format before rendering
    data.app = "leetcode.cn";
    if (!data.fid) data.fid = data.id;
    if (!data.lang) data.lang = opts.lang;
    data.code = (opts.code || data.code || "").replace(/\r\n/g, "\n");
    data.comment = { start: "/*", line: " *", end: " */", singleLine: "//" };
    // data.percent = data.percent.toFixed(2)
    data.testcase = util.inspect(data.testcase || "");
    const tplfile = path.join(__dirname, ".", "lib", "codeonly.tpl");
    let result = _.template(h.getFile(tplfile).replace(/\r\n/g, "\n"))(data);

    if (process.platform === "win32") {
      result = result.replace(/\n/g, "\r\n");
    } else {
      result = result.replace(/\r\n/g, "\n");
    }
    return result;
  }

  async [CREATE_FILE](problem, data, title, id) {
    const basePath = path.join(__dirname, "../src/leetcode/");
    const dirPath = `${basePath}[${id}]${problem.name}`;
    const timeDirPath = h.getNewestPath(dirPath);
    const filePath = `${timeDirPath}/[${id}]${problem.name}[1]-v.js`;
    const mdPath = `${timeDirPath}/index.md`;
    const mdTemplate = `## ${id} ${problem.trans || problem.name}

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：


\`\`\`js
\`\`\`

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    `;

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    if (!fs.existsSync(timeDirPath)) {
      fs.mkdirSync(timeDirPath);
    } else {
      console.error("dir is exist");
      return;
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, data);
      console.log("create file success");
      if (filePath) {
        const result = spawnSync("code", [filePath, "--reuse-window"]);

        if (result.error) {
          console.error(`执行错误: ${result.error}`);
        } 
        // else {
        //   console.log(`stdout: ${result.stdout.toString()}`);
        //   console.error(`stderr: ${result.stderr.toString()}`);
        // }
      }
    } else {
      console.log("file is exist");
      return;
    }

    if (!fs.existsSync(mdPath)) {
      fs.writeFileSync(mdPath, mdTemplate);
      console.log("create md success");
    } else {
      console.log("file is exist");
      return;
    }
  }

  async [GET_PROBLEMS_TITLE](id) {
    const config = this.config;

    const opts = h.makeOpts(config.sys.urls.graphql);
    opts.headers.Origin = config.sys.urls.base;
    opts.headers.Referer = "https://leetcode-cn.com/api/problems/algorithms/";

    opts.json = true;
    opts.body = {
      query: [
        "query getQuestionTranslation($lang: String) {",
        "  translations: allAppliedQuestionTranslations(lang: $lang) {",
        "    title",
        "    questionId",
        "    __typename",
        "    }",
        "}",
      ].join("\n"),
      variables: {},
      operationName: "getQuestionTranslation",
    };
    const [err, result] = await h.to(h.syncRequest(opts));
    if (err) throw new Error(JSON.stringify(err) + "is error");
    const { response, body } = result;
    if (body?.data?.translations) {
      let problems = h.getProblemsJson();
      h.setProblemsJson(
        problems.map((ele) => ({
          ...ele,
          trans:
            body?.data?.translations.find((e) => e.questionId == ele.id)
              ?.title || "",
        }))
      );
      console.log("translation success");
      // let ele = body?.data?.translations.find(e => e.questionId == id)
      // if(ele){
      //   return ele.title
      // }else{
      //   console.log('not find translation')
      //   return
      // }
    }

    // console.log(body.data.translations)
  }

  getProblems() {
    const category = "all";
    const config = this.config;
    // log.debug("running leetcode.getCategoryProblems: " + category)
    const opts = h.makeOpts(
      config.sys.urls.problems.replace("$category", category)
    );

    // spin.text = "Downloading category " + category
    request(opts, function (e, resp, body) {
      // e = plugin.checkError(e, resp, 200)
      // if (e) return cb(e)

      const json = JSON.parse(body);
      // console.log(json)
      // leetcode permits anonymous access to the problem list
      // while we require login first to make a better experience.
      // if (json.user_name.length === 0) {
      //   log.debug("no user info in list response, maybe session expired...")
      //   return cb(session.errors.EXPIRED)
      // }

      const problems = json.stat_status_pairs
        .filter((p) => !p.stat.question__hide)
        .map(function (p) {
          return {
            state: p.status || "None",
            id: p.stat.question_id,
            fid: p.stat.frontend_question_id,
            name: p.stat.question__title,
            slug: p.stat.question__title_slug,
            link: config.sys.urls.problem.replace(
              "$slug",
              p.stat.question__title_slug
            ),
            locked: p.paid_only,
            percent: (p.stat.total_acs * 100) / p.stat.total_submitted,
            level: h.levelToName(p.difficulty.level),
            starred: p.is_favor,
            category: json.category_slug,
          };
        });
      console.log(JSON.stringify(problems));
      // return cb(null, problems)
    });
  }

  login(user, cb) {
    const config = this.config;
    request(config.sys.urls.login, function (e, resp, body) {
      // e = plugin.checkError(e, resp, 200);
      // if (e) return cb(e);

      user.loginCSRF = h.getSetCookieValue(resp, "csrftoken");
      console.log(user.loginCSRF);

      const opts = {
        url: config.sys.urls.login,
        headers: {
          Origin: config.sys.urls.base,
          Referer: config.sys.urls.login,
          Cookie: "csrftoken=" + user.loginCSRF + ";",
        },
        form: {
          csrfmiddlewaretoken: user.loginCSRF,
          login: user.login,
          password: user.pass,
        },
      };
      request.post(opts, function (e, resp, body) {
        // if (e) return cb(e);
        // if (resp.statusCode !== 302) return cb('invalid password?');

        user.sessionCSRF = h.getSetCookieValue(resp, "csrftoken");
        user.sessionId = h.getSetCookieValue(resp, "LEETCODE_SESSION");
        console.log(user);
        // session.saveUser(user);
        // return cb(null, user);
      });
    });
  }

  saveSession = () => {};

  getSession = () => {};

  getUserInfo = function (cb) {
    const config = this.config;
    // log.debug('running leetcode.getUserInfo');
    const opts = plugin.makeOpts(config.sys.urls.graphql);
    opts.headers.Origin = config.sys.urls.base;
    opts.headers.Referer = config.sys.urls.base;
    opts.json = true;
    opts.body = {
      query: [
        "{",
        "  user {",
        "    username",
        "    isCurrentUserPremium",
        "  }",
        "}",
      ].join("\n"),
      variables: {},
    };

    const spin = h.spin("Retrieving user profile");
    request.post(opts, function (e, resp, body) {
      // spin.stop();
      // e = plugin.checkError(e, resp, 200);
      // if (e) return cb(e);

      const user = body.data.user;
      // return cb(null, user);
    });
  };
}

const h = {
  to(promise) {
    return promise
      .then((data) => {
        return [null, data];
      })
      .catch((err) => [err]);
  },
  syncRequest: (opts, method = "GET") => {
    return new Promise((res, rej) => {
      request(opts, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          // console.log("success!!")
          res({ response, body });
        } else {
          rej(error || body);
        }
      });
    });
  },
  getNewestPath: (dir) => {
    let i = 1;
    let timePath = null;

    while (i > 0) {
      timePath = `${dir}/time${i}`;
      if (!fs.existsSync(timePath)) {
        i = -1;
        break;
      }
      i++;
    }
    return timePath;
  },
  getSetCookieValue: function (resp, key) {
    const cookies = resp.headers["set-cookie"];
    if (!cookies) return null;

    for (let i = 0; i < cookies.length; ++i) {
      const sections = cookies[i].split(";");
      for (let j = 0; j < sections.length; ++j) {
        const kv = sections[j].trim().split("=");
        if (kv[0] === key) return kv[1];
      }
    }
    return null;
  },
  levelToName: function (level) {
    switch (level) {
      case 1:
        return "Easy";
      case 2:
        return "Medium";
      case 3:
        return "Hard";
      default:
        return " ";
    }
  },
  makeOpts: (url) => {
    const opts = {};
    opts.url = url;
    opts.headers = {};
    opts.headers.Cookie =
      "LEETCODE_SESSION=" +
      `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiNTIwMTM5IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiYXV0aGVudGljYXRpb24uYXV0aF9iYWNrZW5kcy5QaG9uZUF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjEzYWMxZmViNjQwNjAwMmM5NWQ4ODBkZDlmZmU3OGJlZTQzMTM0ZGRjNDE5MTVjNGU1MjgzOWJhNDdjYjliNzkiLCJpZCI6NTIwMTM5LCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiaHVsazIzIiwidXNlcl9zbHVnIjoiaHVsazIzIiwiYXZhdGFyIjoiaHR0cHM6Ly9hc3NldHMubGVldGNvZGUtY24uY29tL2FsaXl1bi1sYy11cGxvYWQvZGVmYXVsdF9hdmF0YXIucG5nIiwicGhvbmVfdmVyaWZpZWQiOnRydWUsIl90aW1lc3RhbXAiOjE2MTkzMTU2NjUuMzU0MTQyNCwiX3Nlc3Npb25fZXhwaXJ5IjoxMzgyNDAwfQ.FpDTvhmb6OyB_D8iWIg_s2C8NHNptxt3JUrnI0l5evY` +
      ";csrftoken=" +
      `0meVp6Ag2Ki3w6DgwiWm6UwV0ZoEXHnzdflkCYzZ8i0aUruY3dasKb4pePwSVzmB` +
      ";";
    opts.headers[
      "X-CSRFToken"
    ] = `0meVp6Ag2Ki3w6DgwiWm6UwV0ZoEXHnzdflkCYzZ8i0aUruY3dasKb4pePwSVzmB`;
    opts.headers["X-Requested-With"] = "XMLHttpRequest";
    //   opts.headers.Cookie = 'LEETCODE_SESSION=' + user.sessionId +
    //   ';csrftoken=' + user.sessionCSRF + ';';
    // opts.headers['X-CSRFToken'] = user.sessionCSRF;
    // opts.headers['X-Requested-With'] = 'XMLHttpRequest';
    // if (session.isLogin())
    // signOpts(opts, session.getUser());
    return opts;
  },
  getFile: (fullpath) => {
    return fs.existsSync(fullpath)
      ? fs.readFileSync(fullpath).toString()
      : null;
  },
  getProblemsJson: () => {
    return JSON.parse(
      fs.readFileSync(sessionPath + "/cache/problems.json", "utf-8")
    );
  },
  setProblemsJson: (data) => {
    return fs.writeFileSync(
      sessionPath + "/cache/problems.json",
      JSON.stringify(data)
    );
  },
};
const n = process.argv?.[2];
if (!n) {
  console.error("n is undefined!!");
  return;
}
const cli = new LeetCodeCli();
// let res = o.login({ login: "leetcode1205", pass: "gaimimabisi" })
cli.generateProblem(n);

// let res = o?.[GET_PROBLEMS](77)
// let res = o?.[GET_PROBLEMS_TITLE]()
// console.log(res)
// exports.Point = Point
