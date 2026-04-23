import moment from 'moment-timezone'

let handler = async (m, { conn, text }) => {

  let tz = 'Asia/Jakarta'
  let now = moment().tz(tz)
  let hour = now.hour()
  let targetDate = now.clone()

  if (hour >= 17) {
    targetDate.add(1, 'days')
  }

  if (targetDate.day() === 6) {
    targetDate.add(2, 'days')
  } else if (targetDate.day() === 0) {
    targetDate.add(1, 'days')
  }

  let targetDayArr = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  let targetMonthArr = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

  let dayName = targetDayArr[targetDate.day()]
  let dateStr = `${dayName}, ${targetDate.date()} ${targetMonthArr[targetDate.month()]} ${targetDate.year()}`

  const schedules = {
    1: {
      waktu: "08.00—16.05",
      tempat: ["Ruang"],
      mapel: ["📗 Bahasa Jepang"],
      seragam: ["Osis lengkap", "Hitam", "Putih"],
      piket: [
        "1. Tamiya Ryouko",
        "*PJ : *"]
    },
    2: {
      waktu: "07.00—15.25",
      tempat: ["Ruang", "Lapangan"],
      mapel: ["📗 Bahasa Jepang", "🏃 PJOK"],
      seragam: ["Identitas", "Bebas", "Olga"],
      piket: [
        "1. Tamiya Ryouko",
        "*PJ : *"]
    },
    3: {
      waktu: "07.00—16.10",
      tempat: ["Ruang", "Lapangan"],
      mapel: ["🏃 PJOK", "📘 Bahasa Inggris"],
      seragam: ["Batik", "Bebas", "Olga"],
      piket: [
        "1. Tamiya Ryouko",
        "*PJ : *"]
    },
    4: {
      waktu: "07.00—16.10",
      tempat: ["Ruang", "Lab Komputer"],
      mapel: ["🧮 Matematika", "💻 Informatika"],
      seragam: ["Osis lengkap", "Hitam", "Putih"],
      piket: [
        "1. Tamiya Ryouko",
        "*PJ : *"
      ]
    },
    5: {
      waktu: "08.00—13.30",
      tempat: ["Ruang"],
      mapel: ["📗 Bahasa Jepang"],
      seragam: ["Pramuka", "Bebas"],
      piket: [
        "1. Aki Tomoya",
        "2. Katou Megumi",
        "*PJ : *"]
    }
  }

  let currentSchedule = schedules[targetDate.day()] || schedules[1]

  let tambahan = ''
  if (text) {
    let splitText = text.split('|').map(v => v.trim()).filter(v => v)
    if (splitText.length > 0) {
      tambahan = `\n\n🫧 *TAMBAHAN*  🫧\n` + splitText.map(v => `- ${v}`).join('\n')
    }
  }

  let caption = `❗ *REMINDER* ❗

📆 ${dateStr}
⏰ ${currentSchedule.waktu}
${currentSchedule.tempat.map(v => `📍 ${v}`).join('\n')}

📚 *JADWAL PELAJARAN* 📚
${currentSchedule.mapel.map(v => `${v}`).join('\n')}

✉️ *KELENGKAPAN* ✉️
${currentSchedule.seragam.map(v => {
    if (v.toLowerCase().includes("sepatu") || v.toLowerCase().includes("hitam") || v.toLowerCase().includes("putih") || v.toLowerCase().includes("bebas")) {
      if (v.toLowerCase().includes("putih")) return `🧦 ${v}`
      return `👟 ${v}`
    }
    if (v.toLowerCase().includes("olga")) {
      return `👕 ${v}`
    }
    return `👔 ${v}`
  }).join('\n')}

🧹 *JADWAL PIKET* 🧹
${currentSchedule.piket.join('\n')}${tambahan}`

  conn.reply(m.chat, caption, m)
}
handler.help = ['jadwal']
handler.tags = ['info']
handler.command = /^(jadwal)$/i

handler.register = true
handler.disable = false

export default handler
