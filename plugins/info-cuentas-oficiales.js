let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
๐ ๐ฝ๐๐๐๐๐๐๐๐ฟ๐(๐ผ) ๐ผ ๐๐ผ๐ ๐พ๐๐๐๐๐ผ๐ ๐๐๐๐พ๐๐ผ๐๐๐
๐๐๐๐๐๐พ๐๐ผ๐ ๐ผ๐พ๐พ๐๐๐๐๐
โโโโโโโโโโโโโโโโโ
โ *GITHUB*
*${md}*
โโโโโโโโโโโโโโโโโ
โ *INSTAGRAM - ASISTENCIA*
*${ig}*
โโโโโโโโโโโโโโโโโ
โ *YOUTUBE*
*${yt}*
โโโโโโโโโโโโโโโโโ
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://youtu.be/dfc4akKNn6A', '๐ฒ๐๐ด๐ฐ๐ณ๐พ๐', null, null, [
['โงอขโแคขโจ๐ฎ๐น๐ผ๐ท๐ถ๐บ ๐ถ๐ญ๐ฐ๐ช๐ฐ๐จ๐ณ๐ฌ๐บ ๐ซ๐ฌ๐ณ ๐ฉ๐ถ๐ปโงอขโแคข๐ค', '.grupos'],
['๐ทโ๐ฉโ๐ป๐ด๐ฐ ๐ช๐น๐ฌ๐จ๐ซ๐ถ๐น๐ทโ๐ค', '#owner'],
['๐ฅ๏ธโโชอก๊ฆฝ๐ด๐ฌ๐ต๐ผ๐๏ธโโชอก๊ฆฝ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
