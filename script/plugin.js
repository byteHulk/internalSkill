const { spawn } = require('child_process');
 async function executeCommand(command, args, options = { shell: true }){
    return new Promise((resolve, reject)=> {
        let result = "";

        const childProc = spawn(command, args, { ...options });

        childProc.stdout.on("data", (data) => {
            data = data.toString();
            result = result.concat(data);
        });

        childProc.on("error", reject);

        childProc.on("close", (code) => {
            if (code !== 0 || result.indexOf("ERROR") > -1) {
                const error = new Error(`Command "${command} ${args.toString()}" failed with exit code "${code}".`);
                if (result) {
                    error.result = result; // leetcode-cli may print useful content by exit with error code
                }
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}
// clone process.env and add http proxy
function createEnvOption(){
    const proxy = getHttpAgent();
    console.log(proxy,'proxy')
    if (proxy) {
        const env = Object.create(process.env);
        env.http_proxy = proxy;
        return env;
    }
    return process.env;
}
executeCommand('ls')