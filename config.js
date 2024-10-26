const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3dUChbAJ#PSSpXkkX2ZcTc1Jl5W_NfK7-5IpbakerqTpe-odvvsU",
ALIVE_IMG : process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/514d5563-2106-4b8b-a6ce-48a005b194f6",
ALIVE_MSG : process.env.ALIVE_MSG || "*PUPPY-MD ALIVE NOW*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
