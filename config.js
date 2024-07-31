require("./all/module")
global.owner = "94742274855" 
global.namabot = "BOT DELTA CRASH" 
global.namaCreator = "" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '1.0' 
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/adeb031ef6d70df7a1b8a.jpg' 
global.isLink = ' ' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "BOT" 
global.author = "ReyzHosting" 
global.jumlah = "5" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})