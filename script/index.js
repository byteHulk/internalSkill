const request = require("request")
const _ = require("underscore")
const path = require("path")
const fs = require("fs")
const util = require('util');

const GET_PROBLEMS = Symbol("GET_PROBLEMSgetProblems")
const FILL_TEMPLATE = Symbol("FILL_TEMPLATE")
const CREATE_FILE = Symbol("CREATE_FILE")

_.templateSettings = {
  evaluate:    /\{\{(.+?)\}\}/g,
  interpolate: /\$\{(.+?)\}/g
};

//主干逻辑

//1.check cache or login 2.get problem 3.create file
const sessionPath = path.join(
  process.env.HOME || process.env.USERPROFILE,
  ".mylc"
)
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
          graphql: "https://leetcode-cn.com/graphql",
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
    }
    this.sessionPath = path.join(
      process.env.HOME || process.env.USERPROFILE,
      ".mylc"
    )
  }

  async generProblem(id) {
    //1.read cache or getdata
    const problem = await this[GET_PROBLEMS](id)

    //2.fill template
    const data = await this[FILL_TEMPLATE](problem)
    // console.log(problem,'\n result')

    //3.create dir and file
    // file.mkdir(argv.outdir);
    this[CREATE_FILE](problem,data)
    // fs.writeFileSync('../src/leetcode', data)
    // filename = genFileName(problem, argv);
    // file.write(filename, code);
    // console.log(data,'data')

    // return cb(null, problem);
    // })
  }

  async [GET_PROBLEMS](id) {
    const data = h.getProblemsJson()
    const config = this.config
    
    const ele = data.find((e) => e.id === id)
    if (!ele) throw new Error("failed to load locked problem!")
    
    let problem = {...ele}
    const slug = ele?.slug
    const opts = h.makeOpts(config.sys.urls.graphql)
    opts.headers.Origin = config.sys.urls.base
    opts.headers.Referer = config.sys.urls.problem.replace("$slug", slug)

    opts.json = true
    opts.body = {
      query: [
        "query getQuestionDetail($titleSlug: String!) {",
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
      operationName: "getQuestionDetail",
    }

    const [err, result] = await h.to(h.syncRequest(opts))
    if (err) throw new Error("is error")
    const { response, body } = result
    const q = body.data.question

    problem.totalAC = JSON.parse(q.stats).totalAccepted
    problem.totalSubmit = JSON.parse(q.stats).totalSubmission
    problem.likes = q.likes
    problem.dislikes = q.dislikes

    problem.desc = q.translatedContent ? q.translatedContent : q.content

    problem.templates = JSON.parse(q.codeDefinition)
    problem.testcase = q.sampleTestCase
    problem.testable = q.enableRunCode
    problem.templateMeta = JSON.parse(q.metaData)
    // @si-yao: seems below property is never used.
    // problem.discuss =  q.discussCategoryId;

    return problem
  }

  async [FILL_TEMPLATE](problem) {
    const data = _.extend({}, problem)
    const template = data.templates.find((x) => x.value === "javascript")

    if (!template) throw new Error("template is error")
    const opts = {
      lang: "javascript",
      code: template.defaultCode,
      tpl: "codeonly",
    }

    // unify format before rendering
    data.app = "leetcode.cn"
    if (!data.fid) data.fid = data.id
    if (!data.lang) data.lang = opts.lang
    data.code = (opts.code || data.code || "").replace(/\r\n/g, "\n")
    data.comment = {start: '/*', line: ' *', end: ' */', singleLine: '//'}
    // data.percent = data.percent.toFixed(2)
    data.testcase = util.inspect(data.testcase || "")
    const tplfile = path.join(__dirname, ".", "lib", "codeonly.tpl")
    let result = _.template(h.getFile(tplfile).replace(/\r\n/g, "\n"))(data)
  
    if (process.platform === "win32") {
      result = result.replace(/\n/g, "\r\n")
    } else {
      result = result.replace(/\r\n/g, "\n")
    }
    return result
  }

  async [CREATE_FILE](problem,data) {
    const basePath = '../src/leetcode/'
    const dirPath = `${basePath}[${problem.id}]${problem.name}`
    const filePath = `${dirPath}/[${problem.id}]${problem.name}[1].js`
    if(!fs.existsSync(dirPath)){
      fs.mkdirSync(dirPath)
    }else{
      console.log('dir is exist')
    }

    if(!fs.existsSync(filePath)){
      fs.writeFileSync(filePath, data)
    }else{
      console.log('file is exist')
    }
  }

  getProblems() {
    const category = "all"
    const config = this.config
    // log.debug("running leetcode.getCategoryProblems: " + category)
    const opts = h.makeOpts(
      config.sys.urls.problems.replace("$category", category)
    )

    // spin.text = "Downloading category " + category
    request(opts, function (e, resp, body) {
      // e = plugin.checkError(e, resp, 200)
      // if (e) return cb(e)

      const json = JSON.parse(body)
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
          }
        })
      console.log(JSON.stringify(problems))
      // return cb(null, problems)
    })
  }

  login(user, cb) {
    const config = this.config
    request(config.sys.urls.login, function (e, resp, body) {
      // e = plugin.checkError(e, resp, 200);
      // if (e) return cb(e);

      user.loginCSRF = h.getSetCookieValue(resp, "csrftoken")
      console.log(user.loginCSRF)

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
      }
      request.post(opts, function (e, resp, body) {
        // if (e) return cb(e);
        // if (resp.statusCode !== 302) return cb('invalid password?');

        user.sessionCSRF = h.getSetCookieValue(resp, "csrftoken")
        user.sessionId = h.getSetCookieValue(resp, "LEETCODE_SESSION")
        console.log(user)
        // session.saveUser(user);
        // return cb(null, user);
      })
    })
  }

  saveSession = () => {}

  getSession = () => {}

  getUserInfo = function (cb) {
    const config = this.config
    // log.debug('running leetcode.getUserInfo');
    const opts = plugin.makeOpts(config.sys.urls.graphql)
    opts.headers.Origin = config.sys.urls.base
    opts.headers.Referer = config.sys.urls.base
    opts.json = true
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
    }

    const spin = h.spin("Retrieving user profile")
    request.post(opts, function (e, resp, body) {
      // spin.stop();
      // e = plugin.checkError(e, resp, 200);
      // if (e) return cb(e);

      const user = body.data.user
      // return cb(null, user);
    })
  }
}

const h = {
  to(promise) {
    return promise
      .then((data) => {
        return [null, data]
      })
      .catch((err) => [err])
  },
  syncRequest: (opts, method = "GET") => {
    return new Promise((res, rej) => {
      request(opts, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          console.log("success!!")
          res({ response, body })
        } else {
          rej(error)
        }
      })
    })
  },
  getSetCookieValue: function (resp, key) {
    const cookies = resp.headers["set-cookie"]
    if (!cookies) return null

    for (let i = 0; i < cookies.length; ++i) {
      const sections = cookies[i].split(";")
      for (let j = 0; j < sections.length; ++j) {
        const kv = sections[j].trim().split("=")
        if (kv[0] === key) return kv[1]
      }
    }
    return null
  },
  levelToName: function (level) {
    switch (level) {
      case 1:
        return "Easy"
      case 2:
        return "Medium"
      case 3:
        return "Hard"
      default:
        return " "
    }
  },
  makeOpts: (url) => {
    const opts = {}
    opts.url = url
    opts.headers = {}
    opts.headers.Cookie =
      "LEETCODE_SESSION=" +
      `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMjUzMTYwNyIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiNGZmOTY4ZGIwYzRhNmQwMGI0OGY2ZWJhNGVjZmVhZWQ3NDhlMmQ0N2RkN2Q0YmM4MWMyZmE3NjdmMjFjODc5MyIsImlkIjoyNTMxNjA3LCJlbWFpbCI6ImVsdG9ubWlrZWd1c2ZkNzVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJsZWV0Y29kZTEyMDUiLCJ1c2VyX3NsdWciOiJsZWV0Y29kZTEyMDUiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS1jbi5jb20vYWxpeXVuLWxjLXVwbG9hZC91c2Vycy9sZWV0Y29kZTEyMDUvYXZhdGFyXzE2MTg2NjQyNjQucG5nIiwicGhvbmVfdmVyaWZpZWQiOnRydWUsIl90aW1lc3RhbXAiOjE2MTkxMzc1OTguMDY3ODgzLCJfc2Vzc2lvbl9leHBpcnkiOjEzODI0MDB9.O_LFZnOjzdE6RbiI0Tsdk9b6V66QT-G951PmB2Lngz4` +
      ";csrftoken=" +
      `MHACagMm8GwJWwZM4wu5SPUfkykydjEWukDAbOPDEi3VQBX0xYkoRMbwa84NnOZ7` +
      ";"
    opts.headers[
      "X-CSRFToken"
    ] = `MHACagMm8GwJWwZM4wu5SPUfkykydjEWukDAbOPDEi3VQBX0xYkoRMbwa84NnOZ7`
    opts.headers["X-Requested-With"] = "XMLHttpRequest"
    //   opts.headers.Cookie = 'LEETCODE_SESSION=' + user.sessionId +
    //   ';csrftoken=' + user.sessionCSRF + ';';
    // opts.headers['X-CSRFToken'] = user.sessionCSRF;
    // opts.headers['X-Requested-With'] = 'XMLHttpRequest';
    // if (session.isLogin())
    // signOpts(opts, session.getUser());
    return opts
  },
  getFile: (fullpath) => {
    return fs.existsSync(fullpath) ? fs.readFileSync(fullpath).toString() : null
  },
  getProblemsJson: () => {
    return JSON.parse(
      fs.readFileSync(sessionPath + "/cache/problems.json", "utf-8")
    )
  },
}
const o = new LeetCodeCli()
// let res = o.login({login:'18533635893',pass:'h86658273'})
// let res = o.login({ login: "leetcode1205", pass: "gaimimabisi" })
let res = o.generProblem(2)
// console.log(res)
// exports.Point = Point
