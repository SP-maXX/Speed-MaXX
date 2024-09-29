const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/10pBNvp/Speed-Maxx.jpg' },
    { key: 'ALIVE_MSG', value: '╭───────────────────────▢\n│─Hellow Boss, I am Online Now! ${pushname} 🕵️‍♂️\n│─`*ʙᴏᴛ*` : Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ\n│─`ᴠᴇʀsɪᴏɴ` : 1.0.0\n│─`ᴏᴡɴᴇʀ` : Ｓᴀɴᴛʜᴜsʜ.Ｓ\n│─`ɴᴜᴍʙᴇʀ` : 94772726437\n│─`ʙᴀsᴇᴅ ᴏɴ` : Ｇɪᴛʜᴜʙ\n│─`ᴡᴏʀᴋ ᴛʏᴘᴇ` : Ｐᴜʙʟɪᴄ\n│─`ᴘʀᴇғɪx` : [ . ]\n╰───────────────────────▢' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'AUTO_AI', value: 'true' },
    
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
