let handler = async (m) => {
  // const sentMsg = await conn.sendContactArray(m.chat, [
  //   [`${nomorown}`, `${await conn.getName(nomorown + '@s.whatsapp.net')}`, `kikuk `, `he`, `abdf@gmail.com`, `🇮🇩 Indonesia`, `📍 https://`, `daa`],
  //   [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `cukurukuk`, `ha`, `abdf@gmail.com`, `🇮🇩 Indonesia`, `📍 https://github.com`, `Haa`]
  // ], fkontak)
  await m.reply(`Halo-halo! @${m.sender.split(`@`)[0]} Itu ownerku yah, jangan dispam kalau gamau diblok.`)
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler