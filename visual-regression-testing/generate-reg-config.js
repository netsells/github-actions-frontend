const fs = require('fs');
const { resolve } = require('path');

const {
    WORKING_DIRECTORY,
} = {
    ...process.env,
};

const [rootPath] = process.argv.slice(2);

let content = fs.readFileSync(resolve(rootPath, WORKING_DIRECTORY, 'regconfig.json'));

content = JSON.parse(content);

delete content.plugins['reg-notify-github-plugin'];

console.log(JSON.stringify(content, null, 4));

fs.writeFileSync(resolve(rootPath, WORKING_DIRECTORY, 'regconfig-push.json'), JSON.stringify(content, null, 4));
