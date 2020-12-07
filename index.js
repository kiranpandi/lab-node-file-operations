const os = require('os');
const fs = require('fs');
const crypto = require('crypto');
const data = require('./data');

let userData = os.userInfo();
let user = data("ProGrad",2020,"B.E");
const password = crypto.createHmac('sha256', 'secret').update('Prograd').digest('hex');

fs.writeFileSync('message.txt', 'Prograd Details\n')
fs.appendFileSync('message.txt', '\t\tUserId ->' + userData.uid + '\n')
fs.appendFileSync('message.txt', '\t\tName -> '+ user.name + '\n')
fs.appendFileSync('message.txt', '\t\tYear ->' + user.Year + '\n')
fs.appendFileSync('message.txt', '\t\tQualification ->' + user.Qualification + '\n')
fs.appendFileSync('message.txt', '\t\tUsername ->'  + userData.username + '\n')
fs.appendFileSync('message.txt', '\t\tPassword ->'  + password + '\n')