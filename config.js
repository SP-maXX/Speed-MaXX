const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/10pBNvp/Speed-Maxx.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "╭───────────────────────▢

│─ Hellow Boss, I am Online Now! 🌚👋
│─ *`ʙᴏᴛ`* : Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ

│─ *`ᴠᴇʀsɪᴏɴ`* : 1.0.0

│─ *`ᴏᴡɴᴇʀ`* : Ｓᴀɴᴛʜᴜsʜ.Ｓ

│─ *`ɴᴜᴍʙᴇʀ`* : 94772726437

│─ *`ʙᴀsᴇᴅ ᴏɴ`* : Ｇɪᴛʜᴜʙ

│─ *`ᴡᴏʀᴋ ᴛʏᴘᴇ`* : Ｐᴜʙʟɪᴄ

│─ *`ᴘʀᴇғɪx`* : [ . ]

╰───────────────────────▢",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
