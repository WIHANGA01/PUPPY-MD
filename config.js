const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mIt0WBCZ#URBceh0H31fWcM5XOH6LxIH9ScmkOXeclN6NQRJSQTc",
ALIVE_IMG : process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/514d5563-2106-4b8b-a6ce-48a005b194f6",
ALIVE_MSG : process.env.ALIVE_MSG || "*PUPPY-MD ALIVE NOW*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
