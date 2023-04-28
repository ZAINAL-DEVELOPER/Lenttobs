const chalk = require('chalk')
const fs = require('fs')
global.donate = `
GOPAY :
DANA : 085904284057
OVO :
PULSA XL : 085904284057
PULSA AXIS : 6283838057050`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})