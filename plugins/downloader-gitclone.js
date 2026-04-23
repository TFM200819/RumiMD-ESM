
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i

let handler = async (m, { conn, args, usedPrefix, command }) => {
	    if (!args[0]) throw `*Contoh:*\n${usedPrefix}${command} TFM200819/Rumi-MD\n\n*Atau menggunakan link:*\n${usedPrefix}${command} https://github.com/TFM200819/Rumi-MD`

	    let usr, rep
	    let input = args[0]

	    if (regex.test(input)) {
		            let match = input.match(regex)
		            usr = match[1]
		            rep = match[2]
		        } else {
				        let splitInput = input.split('/')
				        usr = splitInput[0]
				        rep = splitInput[1]
				    }

	    if (!usr || !rep) throw `Format salah!`

	    rep = rep.replace(/\.git$/, '')

	    let url = `https://api.github.com/repos/${encodeURIComponent(usr)}/${encodeURIComponent(rep)}/zipball`
	    let name = `${encodeURIComponent(rep)}.zip`

	    m.reply(`D o w n l o a d i n g ...`)

	    try {
		            await conn.sendFile(m.chat, url, name, null, m)
		        } catch (e) {
				        m.reply(`Gagal mendownload. Pastikan link atau username repo valid dan repo tidak di privat.`)
				    }
}

handler.help = ['gitclone <username>/<repo>']
handler.tags = ['downloader']
handler.command = /gitclone/i
handler.register = true
handler.limit = false

export default handler
