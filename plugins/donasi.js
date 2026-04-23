// Bot ini dipakai untuk konsumsi pribadi dengan temanku, jadi kita gk butuh plugin ini.

let handler = async (m) => {
  // let gambar = '/qris.png'
  //let saweria = global.psaweria
  // let qris = global.qris
  let numberowner = global.nomorown
  let anu = `Hai 👋
Kalian bisa membeli paket premium melalui:
┌〔 Premium • Emoney 〕
├ QRIS : ${qris}
└────
List Premium:
10k = Premium 20 Hari
20k = Premium 40 Hari
25k = Premium 60 Hari
50k = Premium 180 Hari

Terimakasih :D

Contact Owner:
wa.me/${numberowner} (Owner)
`
  // let qris_img = Buffer.from(await (await fetch(gambar)).arrayBuffer())
  await conn.sendFile(m.chat, '', anu, m)
}

handler.help = ['premium']
handler.tags = ['main']
handler.command = /^(premium)$/i

export default handler
