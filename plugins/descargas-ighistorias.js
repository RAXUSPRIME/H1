/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `${mg}๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ฝ๐๐ ๐ฟ๐ ๐๐๐๐ผ๐๐๐ ๐ฟ๐ ๐๐๐๐๐ผ๐๐๐ผ๐ ๐๐ผ๐๐ผ ๐ฟ๐๐๐พ๐ผ๐๐๐ผ๐ ๐๐ผ๐ ๐๐๐๐๐๐๐๐ผ๐\n๐๐๐๐๐๐๐\n*${usedPrefix + command} hades*\n\n๐๐๐๐๐ ๐๐๐๐๐ผ๐๐๐ผ๐ ๐๐๐๐๐๐ผ๐๐ ๐๐ ๐ฟ๐๐๐๐๐๐ผ๐ฟ ๐๐๐๐๐๐๐\n๐๐๐ผ๐๐๐๐\n*${usedPrefix + command} Hades-bot`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
  
let info = `๐ *Infรณrmate sobre las Novedades y recuerda tener la รบltima versiรณn.*\n\n๐ *Find out about what's new and remember to have the latest version.*
  `.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', null, null, [
['โค๏ธโโชอก๐๏ธ๐๐๐๐ ๐ซ๐ฌ ๐๐๐๐๐๐๐๐๐โค๏ธโโชอก๐', '/menรบdescargas'],
['๐ฅ๏ธโโชอก๊ฆฝ๐ด๐ฌ๐ต๐ผ๐๏ธโโชอก๊ฆฝ', '/menu'],
['โโ๐ฉโ๐ป๐น๐ฌ๐ฎ๐ฐ๐บ๐ป๐น๐จ๐น๐ป๐ฌโโ๐ฉ', '/register']
], m,)  
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.exp = 87
export default handler
