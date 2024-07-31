require("./global")

const mess = {
   wait: "*`[ Loading ]` - Wait for more processing . . .*",
   success: "*`[ Success ]` - It worked Sis*`",
   on: "*`[ On Feature ]` - Activated*", 
   off: "*`[ Off Feature ]` - It's Off*",
   query: {
       text: "*`[ QUERY ]` - Where's the text bro?*",
       link: "*`[ NEED ]` - Where's the link?*",
   },
   error: {
       fitur: "*`[ Error ]` - Sorry Sis, Error Feature, Please Chat with the Bot Developer So It Can Be Fixed Immediately.*",
   },
   only: {
       group: "*`[ GROUP ]` - Sorry Sis. This feature can only be used in groups*",
       private: "*`[ PRIVATE ]` - Sorry Sis. This feature can only be used in private chat*",
       owner: "*`[ OWNER ]` - Sorry Sis. This feature can only be used by bot owners*",
       admin: "*`[ ADMIN ]` - Sorry Sis. This feature can only be used by bot owners*",
       badmin: "*`[ BOT ADMIN ]` - Sorry Sis It's like you can't use this feature because the bot is not a group admin*",
       premium: "*`[ PREMIUM ]` - Sorry, you are not yet a premium user. To become a premium user, please purchase it from the owner by typing .owner*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})