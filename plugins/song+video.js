const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a url or title...*")
const _search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `
▢───────────────────────────▢
Ӂ ─── Ｓᴘᴇᴇᴅ ＭᴀＸＸ sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 🔊
▢───────────────────────────▢
» `ᴛɪᴛʟᴇ` : ${data.title}
» `ᴀʙᴏᴜᴛ` : ${data.description.}
» `ᴅᴜʀᴀᴛɪᴏɴ` : ${data.timestamp}
» `ᴀɢᴏ` : ${data.ago}
» `ᴠɪᴇᴡꜱ` : ${data.views}

`ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄`
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document messege
await conn.sendMassege(from,{audio: {url:downloadUrl},mimtype:"audio/mpeg"},{quoted:mek})
await conn.sendMassege(from,{document: {url:downloadUrl},mimtype:"audio/mp3",fileName:data.title + ".mp3",caption:"`ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄`"},{quoted:mek})

    



}catch(e){
console.log(e)
reply('${e}')
}
})

//========================================video-dl=========================================================

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a url or title...*")
const _search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `
▢───────────────────────────▢
Ӂ ─── Ｓᴘᴇᴇᴅ ＭᴀＸＸ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 📽️
▢───────────────────────────▢
» `ᴛɪᴛʟᴇ` : ${data.title}
» `ᴀʙᴏᴜᴛ` : ${data.description.}
» `ᴅᴜʀᴀᴛɪᴏɴ` : ${data.timestamp}
» `ᴀɢᴏ` : ${data.ago}
» `ᴠɪᴇᴡꜱ` : ${data.views}

`ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄`
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document messege
await conn.sendMassege(from,{video: {url:downloadUrl},mimtype:"video/mp4"},{quoted:mek})
await conn.sendMassege(from,{document: {url:downloadUrl},mimtype:"video/mp4",fileName:data.title + ".mp4",caption:"`ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ©Ｓᴘᴇᴇᴅ ＭᴀＸＸ- ＭＤ₂ₒ₂₄`"},{quoted:mek})




}catch(e){
  console.log(e)
  reply('${e}')
})
