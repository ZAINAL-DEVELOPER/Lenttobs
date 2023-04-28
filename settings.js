const fs = require('fs')
const chalk = require('chalk')
//==============================\
global.sapi = 'WA MD'
global.owner = ['17042814779']
global.ownernomer = "17042814779"
//===============================\\
global.wms = '17042814779'
global.packname = 'NazunaBotz-MD'
global.ownerlen = "Nazuna"
global.ownername = "WA MD"
global.footer = 'NazunaBotz-MD'
global.ytname = "YT: Pak Zainal Dev's"
global.socialm = "TT: H4G0Z0X"
global.location = "Indonesia, Bali, Denpasar"
global.premium = ['17042814779'] 
global.nomorcs = '17042814779'
global.botname = 'NazunaBotz-MD' 
global.linkz = "Link Gc"
global.websitex = ""
global.themeemoji = "😿"
global.packname = "Sticker By"
global.author = "Made by Lenttobs"
global.wm = "LENTTOBS WHATSAAP MD"
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.mess = {
    premime: 'Premium Special Features If You Want to Register Type Rent',
    bot: 'This feature could be used by bot only',
    linkm: 'Where is the link?',
}
global.thum = fs.readFileSync("./gambar/maslent.jpg")
global.log0 = fs.readFileSync("./gambar/maslent.jpg")
global.err4r = fs.readFileSync("./gambar/maslent.jpg")
global.thumb = fs.readFileSync("./gambar/maslent.jpg")
global.limitawal = { //limit ges
    premium: "UNLIMITED",
    free: 50
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
