const chalk = require('chalk')
const fs = require('fs')
global.buypremium = `harga

3 hari : 1k
1 minggu: 3k
1 Bulan : 5k
1 tahun : 15k

Payment 

GOPAY : -
DANA : 085904284057
OVO : -
PULSA XL : 085904284057
PULSA AXIS : 6283838057050

Benefit?
unli Limit
bebas akses Feature prem
`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})