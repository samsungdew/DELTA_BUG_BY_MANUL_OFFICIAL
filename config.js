require("./all/module")
global.owner = "94742274855" 
global.namabot = "MANU DELTA CRASH" 
global.namaCreator = "" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '1.0' 
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/46396834abb7655f89f5d.jpg' 
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