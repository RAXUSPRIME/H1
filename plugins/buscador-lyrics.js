import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `${mg}๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ฝ๐๐ ๐ฟ๐ ๐๐๐ผ ๐พ๐ผ๐๐พ๐๐๐ ๐๐ผ๐๐ผ ๐๐ฝ๐๐๐๐๐ ๐๐ผ ๐๐๐๐๐ผ\n๐๐๐๐๐๐๐\n*${usedPrefix + command} Runaway*\n\n๐๐๐๐๐ ๐๐ผ๐๐ ๐๐ ๐ผ ๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐พ๐\n๐๐๐ผ๐๐๐๐\n*${usedPrefix + command} Billie Eilish bored*`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
โญืโโืโืโโืโโืโืโโืโโืโืโโืโ
โโออกโฃ๐๐๐๐๐_๐๐๐_๐๐โออกโฃ
โโโืโืโโืโโืโืโโืโโืโืโโืโ
โ๐๐๐๐๐๐ | ๐๐๐๐๐ 
โ๐ *${result.title}*
โโโืโืโโืโโืโืโโืโโืโืโโืโ
โ๐ผ๐๐๐๐(๐ผ) | ๐ผ๐๐๐๐๐
โ๐ *${result.author}*
โโโืโืโโืโโืโืโโืโโืโืโโืโ
โ${result.lyrics}
โโโืโืโโืโโืโืโโืโโืโืโโืโ
โ๐๐๐๐ผ๐พ๐ | ๐๐๐
โ๐งก *${result.link}*
โฐโืโโืโืโโืโโืโืโโืโโืโืโโืโ
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['๐ซ๐ฌ๐บ๐ช๐จ๐น๐ฎ๐จ๐บ ๐ท๐ณ๐จ๐ ', `/play ${text}`],
['๐ฅโ๐๐ด๐ฌ๐ต๐ผ ๐ซ๐ฌ ๐ฉ๐ผ๐บ๐ช๐จ๐ซ๐ถ๐น๐ฌ๐บ๐ฅโ๐', '/menรบbuscadores'],
['๐ฅ๏ธโโชอก๊ฆฝ๐ด๐ฌ๐ต๐ผ๐๏ธโโชอก๊ฆฝ๏ธ', '/menu']
], m)
}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.exp = 55
export default handler
