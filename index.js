const ejs = require('ejs');
const fs = require('fs-extra');

const members = fs.readJSONSync('data/members.json');
const lectures = fs.readJSONSync('data/lectures.json');

const output = ejs.renderFile('templates/layout.ejs', { members, lectures }, (err, output) => {
  if (err) {
    throw err;
  }

  fs.writeFileSync('temp.html', output);
});