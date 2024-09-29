const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "I2VXyY6D#frWSU3SOkbqJ5BIRDLDCWJsfpvzytLd7xxUmMRefmCs",
MONGODB: process.env.MONGODB || "mongodb://mongo:NgEkrWjymgxUMhUOuYARMrXYQILIALLx@junction.proxy.rlwy.net:30809",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/10pBNvp/Speed-Maxx.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "╭───────────────────────▢\n│─ Hellow Boss, I am Online Now! 🌚👋\n│─ *`ʙᴏᴛ`* : Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ\n│─ *`ᴠᴇʀsɪᴏɴ`* : 1.0.0\n│─ *`ᴏᴡɴᴇʀ`* : Ｓᴀɴᴛʜᴜsʜ.Ｓ\n│─ *`ɴᴜᴍʙᴇʀ`* : 94772726437\n│─ *`ʙᴀsᴇᴅ ᴏɴ`* : Ｇɪᴛʜᴜʙ\n│─ *`ᴡᴏʀᴋ ᴛʏᴘᴇ`* : Ｐᴜʙʟɪᴄ\n│─ *`ᴘʀᴇғɪx`* : [ . ]\n╰───────────────────────▢",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
MODE: process.env.MODE ||"public",
};
