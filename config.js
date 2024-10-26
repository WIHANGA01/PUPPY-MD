const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "9j9kHDIY#F6_jbWeYYuV1jEhLksVjfdi0fFyCJN3YrmWnxS5_Pe0",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/99312f6ecbfa4d9bfd3b4.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*PUPPY-MD ALIVE NOW*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
