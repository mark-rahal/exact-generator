const copyDir = require('copy-dir');
const prompts = require('prompts');
const path = require('path');

exports.generate = async () => {
  const confirm = await prompts({
    type: 'confirm',
    name: 'createProject',
    message: 'Project will be created in current directory. Are you sure?'
  });
  if (confirm.createProject) {
    copyDir.sync(path.join(__dirname + '/../template'), process.cwd());
  }
}