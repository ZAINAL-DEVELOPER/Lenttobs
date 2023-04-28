const chalk = require('chalk')
const fs = require('fs')
global.tampilanmenu = `
╭─────ꕥ *GRUB* ꕥ─────╮
├
├・grublink
├・listadmin
├・closetime 
├・opentime
├・ephemeral
├・setgcpp
├・setgcpp2 panjang
├・setname
├・setdesc
├・group
├・id
├・resetgroublink
├・editinfo
├・add
├・kick
├・hidetag
├・tagall
├・antilinkgc
├・antilinktg
├・antilinktt
├・antilinkytch
├・antilinkytvid
├・antilinkfb
├・antilinkig
├・antilinktwit
├・antilinkremove
├・antilinkdeletekick
├・antivirus
├・antitoxic
├・antiwame
├・nsfw
├・welcome
├・promote
├・demote
├・react
├・vote
├・devote
├・upvote
├・checkvote
├・delvote
├・colongpp
├
╰──────────────────╯

╭──ꕥ *ANON&MENFES* ꕥ──╮
├
├・anonymous
├・mulai
├・next
├・keluar
├・menfes
├・balas
├・leave
├
╰──────────────────╯

╭────ꕥ *AI* ꕥ─────╮
├
├・openai
├・openai2
├・simi
├・voiceopenai
├・voicesimi
├・dukun
├・chichi
├・dokter
├・tanya
├・dalle
├・dalle2
├・dalleanime
├・aidraw
├
╰──────────────────╯

╭───ꕥ *CREATOR AI* ꕥ───╮
├
├・jadianime
├・jadianime2
├・jadianime3 <Maintance>
├・jadianime4
├・jadizombie
├・toart
├・warnain
├・diffusion
├・diffusion2
├・remini
├・remini2
├・imgtohoror1
├・imgtohoror2
├・imgtohoror3
├・yasuo
├・blurfilter
├・renaissance
├
╰──────────────────╯

╭───ꕥ *WALLPAPER* ꕥ──╮
├
├・aesthetic
├・blackpink
├・bike
├・boneka
├・car
├・chinese
├・cosplay
├・coffee
├・couplepicture
├・doggo
├・gamer
├・hacking
├・hijab
├・japanese
├・indo
├・kayes
├・korean
├・kpop
├・lizard
├・malay
├・kpop
├・meow
├・notnot
├・ppcouple2
├・profilepicture
├・pubg
├・randomboy
├・randomgirl
├・rose
├・ryujin
├・teknologi
├・thai
├・ulzzangboy
├・ulzzanggirl
├・wallml
├・wallpapercyber
├・wallpaperanimex
├・wallpaperislami
├・wallpapermeme
├・wallpapergamer
├・wallphone
├・woof
├・bts
├・exo
├・elf
├・loli
├・neko
├・waifu
├・shota
├・husbu
├・sagiri
├・shinobi
├・husbu
├・shinobu
├・mehumin
├・wallanime 
├
╰──────────────────╯

╭─────ꕥ *MAKER* ꕥ─────╮
├
├・attp < text >
├・attp2 < text >
├・darahmaker < text >
├・3dmaker < text >
├・tembokmaker < text >
├・kertasterbakar < text >
├・ultahmaker < text >
├・cardidulfitri < text >
├・kueultahmaker < text >
├・amongusmaker < text >
├・dotamaker < text >
├・fpsmaker < text >
├・mlmaker < text >
├・mlmaker2 < text >
├・hengkermaker < text >
├・neonlovemaker < text >
├・ledmaker < text >
├・firaunmaker < text >
├・3draimbowmaker < text >
├・summermaker < text >
├・summer2maker < text >
├・thunder2maker < text >
├・lightglowmaker < text >
├・batmanmaker < text >
├・bussinesmaker < text >
├・ohnomaker < text >
├・tololsert < text >
├・bucinsert < text >
├・jadianime < text >
├・nulis < text >
├・candy < text >
├・blackpinkneon < text >
├・deepsea < text >
├・scifi < text >
├・fiction < text >
├・berry < text >
├・papercut <text>
├・transformer <text>
├・neondevil <text>
├・3davengers <text>
├・3dstone <text>
├・3dstone2 <text>
├・summertime <text>
├・thunder <text>
├・window <text>
├・graffiti <text>
├・graffitibike <text>
├・pornhub <text>
├・glitch <text>
├・blackpinkart <text>
├・glitch2 <text>
├・glitch3 <text>
├・3dspace <text>
├・lion <text>
├・3dneon <text>
├・greenneon <text>
├・bokeh <text>
├・holographic <text>
├・bear <text>
├・wolf <text>
├・joker <text>
├・dropwater <text>
├・dropwater2 <text>
├・thewall <text>
├・neonlight <text>
├・natural <text>
├・carbon <text>
├・pencil <text>
├・blackpink2 <text>
├・neon <text>
├・neonlight2 <text>
├・toxic <text>
├・strawberry <text>
├・discovery <text>
├・1917 <text>
├・lion2 <text>
├・papercut < text >
├・transformer < text >
├・neondevil < text >
├・3davengers < text >
├・3dstone < text >
├・3dstone2 < text >
├・summertime < text >
├・thunder < text >
├・graffiti < text >
├・graffitibike < text >
├・pornhub < text >
├・glitch < text >
├・blackpinkart < text >
├・glitch2 < text >
├・glitch3 < text >
├・3dspace < text >
├・lion < text >
├・3dneon < text >
├・greenneon < text >
├・bokeh < text >
├・holographic < text >
├・bear < text >
├・wolf < text >
├・joker < text >
├・dropwater < text >
├・dropwater2 < text >
├・thewall < text >
├・neonlight < text >
├・natural < text >
├・carbon < text >
├・pencil < text >
├・blackpink2 < text >
├・neon < text >
├・neonlight2 < text >
├・toxic < text >
├・strawberry < text >
├・discovery < text >
├・1917 < text >
├・sci_fi < text >
├・ancient < text >
├・fabric < text >
├・hoorror < text >
├・whitebear < text >
├・juice < text >
├・batman2 < text >
├・multicolor < text >
├・wonderful < text >
├・sketch < text >
├・marvel < text >
├・foggy < text >
├・writing < text >
├・halloweenfire < text >
├・halloween < text >
├・watercolor < text >
├・classic < text >
├・art
├・ktpmaker
├・pornhub
├・glitch
├・avanger
├・space
├・ninjalogo
├・wolflogo
├・stel3d
├・wallgravity 
├
╰──────────────────╯

╭───ꕥ *WP ANIME* ꕥ───╮
├
├・animawall [query]
├・animawall2 [query]
├・animbite
├・animblush
├・animbonk
├・animbully
├・animcringe
├・animcry
├・animcuddle
├・animdance
├・animeawoo
├・animecuddle
├・animecry
├・animeglomp
├・animehandhold
├・animehappy
├・animehighfive
├・animekiss
├・animelick
├・animemegumin
├・animeneko
├・animenom
├・animepat
├・animepoke
├・animeslap
├・animesmile
├・animesmug
├・animeslap
├・animesmug
├・animewave
├・animewlp
├・animewink
├・animeyeet
├・avatar
├・awoo
├・bully
├・couplepp
├・cringe
├・cry
├・dance
├・feed
├・foxgirl
├・gecg
├・gura
├・handhold
├・happy
├・highfive
├・hug
├・husbu
├・kiss
├・lick
├・loli-waifu
├・neko
├・neko2
├・nom
├・pat
├・randomanime
├・randomart
├・randomawloli
├・randombite
├・randombts
├・randombully
├・shinobu
├・shota
├・slap
├・smile
├・smug
├・tickle
├・waifu
├・waifu2
├・wave
├
╰──────────────────╯

╭───ꕥ *CERPEN* ꕥ───╮
├
├・ceritahoror
├・cerpen-sejarah
├・cerpen-sedih
├・cerpen-sastra
├・cerpen-romantis
├・cerpen-rohani
├・cerpen-rindu
├・cerpen-remaja
├・cerpen-ramadhan
├・cerpen-petualangan
├・cerpen-persahabatan
├・cerpen-perpisahan
├・cerpen-perjuangan
├・cerpen-penyesalan
├・cerpen-pengorbanan
├・cerpen-pengalaman
├・cerpen-pendidikan
├・cerpen-penantian
├・cerpen-patahhati
├・cerpen-olahraga
├・cerpen-nasionalisme
├・cerpen-nasihat
├・cerpen-motifasi
├・cerpen-misteri
├・cerpen-mengharukan
├・cerpen-malaysia
├・cerpen-liburan
├・cerpen-kristen
├・cerpen-korea
├・cerpen-kisahnyata
├・cerpen-keluarga
├・cerpen-kehidupan
├・cerpen-jepang 
├・cerpen-inspirstif
├・cerpen-gokil
├・cerpen-galau
├・cerpen-cintasejati
├・cerpen-cintasegitiga
├・cerpen-cintasedih
├・cerpen-cintaromantis
├・cerpen-cintapertama
├・cerpen-cintaislami
├・cerpen-cinta
├・cerpen-budaya
├・cerpen-bahasajawa
├・cerpen-bahasasunda
├・cerpen-bahasainggris
├・cerpen-bahasadaerah
├・cerpen-anak
├
╰──────────────────╯

╭───ꕥ *FUN&GAME* ꕥ───╮
├
├・artinama
├・tebak caklontong
├・tebak lagu
├・tebak gambar
├・tebak kata
├・tebakanime
├・tebakanime
├・tebakkabupaten
├・tebakkimia
├・tebakkalimat
├・tebakbendera
├・tebaklirik
├・cekmati
├・suitwithbot
├・puisi
├・namarandom
├・quotesimage
├・quotesanimebijak
├・truth
├・dare
├・tictactoe
├・delttt
├・tebak [lagu]
├・math [mode]
├・suitpvp [tag]
├・akinator
├・tebaklagu
├・say [text]
├・define [text]
├・how [text]
├・when [text]
├・where [text]
├・is [text]
├・what [text]
├・can [text]
├・rate [text]
├・coolcheck [tag]
├・stupidcheck [tag]
├・waifucheck [tag]
├・evilcheck [tag]
├・dogcheck [tag]
├・hotcheck [tag]
├・smartcheck [tag]
├・uncleancheck [tag]
├・greatcheck [tag]
├・beautifulcheck [tag]
├・awesomecheck [tag]
├・prettycheck [tag]
├・lesbiancheck [tag]
├・gaycheck [tag]
├・cutecheck [tag]
├・uglycheck [tag]
├・hornycheck [tag]
├・charactercheck [tag]
├・cerhantu
├・lovelycheck [tag]
├・couple
├・soulmate
├・hot
├・sexy
├・kind
├・idiot
├・handsome
├・beautiful
├・cute
├・pretty
├・lesbian
├・noob
├・bastard
├・foolish
├・nerd
├・asshole
├・gay
├・smart
├・stubble
├・dog
├・horny
├・cunt
├・wibu
├・noobra
├・nibba
├・nibbi
├・comrade
├・mumu
├・rascal
├・scumbag
├・nuts
├・fagot
├・scoundrel
├・ditch
├・dope
├・gucci
├・lit
├・dumbass
├・crackhead
├・mf
├・motherfucker
├・sucker
├・fuckboy
├・playboy
├・fuckgirl
├・playgirl
├・quotes
├
╰──────────────────╯

╭───ꕥ *INFO* ꕥ───╮
├
├・jalantikus
├・infogempa
├・weather
├・myapikey
├・cekapikey
├・infokota
├・hexcode
├・cekresi
├・drakorongoing
├・lk21
├・wattpad
├・wattpadsearch
├・pixiv
├・pixivdl
├
╰──────────────────╯

╭───ꕥ *ISLAMIC* ꕥ───╮
├
├・alquran
├・alquranaudio
├・kisahnabi
├・jadwalsholat
├・asmaulhusna
├
╰──────────────────╯

╭───ꕥ *SHORTLINK* ꕥ───╮
├
├・shortlink1
├・shortlink2
├・shortlink3
├・shortlink4
├・ouolink    
├
╰──────────────────╯

╭───ꕥ *PRIMBON* ꕥ───╮
├
├・nomorhoki
├・artimimpi
├・ramalanjodoh
├・ramalanjodohbali
├・ramalancinta
├・ramalannasib
├・suamiistri
├・kecocokannama
├・kecocokanpasangan
├・artinama2
├・jadianpernikahan
├・sifatusaha
├・pekerjaan
├・rejeki
├・penyakit
├・tarot
├・fengshui 
├・haribaik
├・harikeren
├・harisial
├・harinaga
├・arahrejeki
├・peruntungan
├・wetonjawa
├・sifat
├・keberuntungan
├・memancing
├・masasubur
├・zodiak
├・shio
├
╰──────────────────╯

╭───ꕥ *TEXTVOICE* ꕥ───╮
├
├・ttsinglish
├・ttsind
├・ttsjpn    
├
╰──────────────────╯

╭───ꕥ *OWNER* ꕥ───╮
├
├・sewa 
├・listsewa
├・listpremium
├・ceksewa
├・setpppanjang 
├・self
├・addvn
├・delvn
├・listvn
├・public
├・join [link]
├・leavegc
├・setbio
├・addprem
├・delprem
├・bctext [Rawan Banned]
├・bcimage [Rawan Banned]
├・bcvideo [RawanBanned]
├・setbotpp [image]
├・setthumb [reply img]
├・setexif
├・hijack
├・block [tag/number]
├・unblock [tag/number]
├
╰──────────────────╯

╭──ꕥ *DOWNLOAD* ꕥ──╮
├
├・xnxxsearch
├・xnxxdl
├・pixiv
├・pixivsearch
├・jooxplay
├・fotocp (New)
├・tiktok [url]
├・tiktokaudio [url]
├・instagram [url]
├・spotify [url]
├・mediafire [url]
├・ytmp3 [url|quality]
├・ytmp4 [url|quality]
├・play [query]
├・gitclone [repo link]
├・song [query]
├・yts [query]
├・lyrics [query]
├・gimage [query]
├・google [query]
├・anime [query]
├・pinterest [query]
├・image [query]
├・wallpaper [query]
├・searchno [number]
├・horoscope [query]
├・imdb [movie name]
├・weather [loc name]
├・genshin [char name]
├・wikimedia [query]
├・ytsearch [query]
├
╰──────────────────╯

╭─ꕥ *OTHER&VCNGER* ꕥ──╮
├
├・ringtone [query]
├・tourl[reply image/video]
├・toqr [reply text]
├・toimage [reply stick]
├・sticker [reply img|gif]
├・take [reply img|gif|stik]
├・smeme [reply img]
├・emoji [emoji]
├・tovideo [reply img]
├・togif [reply stick]
├・tovn [reply aud]
├・tomp3 [reply vn]
├・toaudio [reply vid]
├・ebinary [reply txt]
├・dbinary [reply txt]
├・tinyurl [link]
├・styletext [text]
├・volume [reply aud]
├・bass [reply aud]
├・blown [reply aud]
├・deep [reply aud]
├・earrape [reply aud]
├・fast [reply aud]
├・fat [reply aud]
├・nightcore [reply aud]
├・reverse [reply aud]
├・robot [reply aud]
├・slow [reply aud]
├・smooth [reply aud]
├・squirrel [reply aud]
├・afk
├・id
├・toqr [link]
├・repeat
├・readmore [text]
├・toviewonce
├・fliptext [text]]
├・chatinfo
├・alive
├・ping
├・owner
├・menu
├・delete
├・quoted
├・listpc
├・listgc
├・donate
├・chord
├・ssweb
├・myip
├・request
├・report [bug]
├・removebg [reply img]
├
╰──────────────────╯

╭───ꕥ *ASUPAN* ꕥ───╮
├
├・tiktokgirl	
├・tiktoknukhty
├・tiktokpanrika
├・tiktokkayes
├・tiktoknotnot
├・tiktokghea
├・tiktoksantuy
├・tiktokbocil
├
╰──────────────────╯

╭───ꕥ *ASUPAN* ꕥ───╮
├
├・facebookemoji
├・iphoneemoji
├・samsungemoji
├・joyemoji
├・skypeemoji
├・twitteremoji
├・whatsappemoji
├・microsoftemoji
├・googleemoji
├・pediaemoji
├・microsoftemoji
├
╰──────────────────╯

╭───ꕥ *ASUPAN* ꕥ───╮
├
├・facebookemoji
├・iphoneemoji
├・samsungemoji
├・joyemoji
├・skypeemoji
├・twitteremoji
├・whatsappemoji
├・microsoftemoji
├・googleemoji
├・pediaemoji
├・microsoftemoji
├
╰──────────────────╯

╭───ꕥ *MEME* ꕥ───╮
├
├・darkjoke
├・memeindo
├・randommeme
├
╰────────────────╯

╭───ꕥ *STORE* ꕥ───╮
├
├・liststore
├・deletemessage 
├・updatelist
├・addlist
├・cekstatus
├・setstatus
├・bayar
├
╰────────────────╯

╭───ꕥ *GOOGLE* ꕥ───╮
├
├・google < Query >
├・gimage < Query >
├・googleimage < Query >
├・googleimage2 < Query >
├
╰────────────────╯

╭───ꕥ *STALKING* ꕥ───╮
├
├・stalknickaov
├・stalknickchess
├・stalkbigo
├・stalkcocofun
├・stalkig
├・stalkgithub
├・stalktwitter
├・stalktiktok
├
╰────────────────╯

╭───ꕥ *CODE* ꕥ───╮
├
├・binary < Query >
├・encodebinary < Query>
├・ebinary < Query >
├・dbinary < Query >
├・codemorse < Query ><
├
╰────────────────╯

╭─ꕥ *ENTERTAINERS* ꕥ─╮
├
├・taugaksih
├・faktaunik
├・motivasi
├・katabijak
├
╰────────────────╯

╭─ꕥ *WEBSITE* ꕥ─╮
├
├・webultah
├・webdeface
├・websad
├・websad1
├
╰──────────────╯

╭──ꕥ *FILTER* ꕥ──╮
├
├・pkifilter < reply img >
├・circlefilter < reply img >
├・brightfilter < replyimg >
├・blurfilter < replyimg >
├・cardfilter < replyimg >
├・grayscale < replyimg >
├・gayfilter < replyimg >
├・contrasfilter < replyimg >
├・xprofilter < replyimg >
├・willowfilter < replyimg >
├・waldenfilter < replyimg >
├・valenciafilter < replyimg >
├・toasterfilter < replyimg >
├・stinsonfilter < replyimg >
├・slumberfilter < replyimg >
├・reyesfilter < replyimg >
├・perpetuafilter < replyimg >
├・vilefilter < replyimg >
├・moonfilter < replyimg >
├・mayfairfilter < replyimg >
├・kelvinfilter < replyimg >
├・inkwellfilter < replyimg >
├・hudsonfilter < replyimg >
├・brannanfilter < replyimg >
├・deepfryfilter < replyimg >
├・facepalmfilter < replyimg >
├・1977filter < replyimg >
├・adenfilter < replyimg >
├・broklinfilter < replyimg >
├・earlybirdfilter < replyimg >
├・ginghamfilter < replyimg >
├・larkfilter < replyimg >
├・lofifilter < replyimg >
├・mavenfilter < replyimg >
├・risefilter < replyimg >
├
╰──────────────╯

╭──ꕥ *NSFW+LOLI* ꕥ───╮
├
├・nsfwechi
├・nsfwechi2
├・nsfwcum
├・nsfwclasic
├・nsfwbj1
├・nsfwbj2
├・nsfwbj3
├・nsfwbj4
├・nsfwsusugede
├・nsfwavatar
├・nsfwthigh
├・nsfwfetis
├・nsfwahageo
├・nsfwanal
├・nsfwbooty
├・nsfwarmpits
├・bokeps (prem)
├・gifhentai
├・gifblowjob
├・hentaivideo
├・hneko
├・nwaifu
├・animespank
├・trap
├・gasm
├・ahegao
├・ass
├・bdsm
├・blowjob
├・cuckold
├・cum
├・milf
├・eba
├・ero
├・femdom
├・foot
├・gangbang
├・glasses
├・hentai
├・jahy
├・manga
├・masturbation
├・neko-hentai
├・neko-hentai2
├・nsfwloli
├・orgy
├・panties
├・pussy
├・tentacles
├・thights
├・yuri
├・zettai
├・eroholo
├・eroyuri
├・erokemo
├・femdom2   
├
╰──────────────────╯

╭──ꕥ *DATABASE* ꕥ───╮
├
├・addvn
├・delvn
├・listvn
├・addvid
├・delvid
├・listvid
├・addimg
├・delimg
├・listimg
├
╰────────────────╯

╭─ꕥ *MAKER+SERTI* ꕥ──╮
├
├・makequotes1
├・makequotes2
├・botcommand
├・changemymind
├・ytcomment
├・tweetcomment
├・trumpcomment
├・qc < reply text ~ text>
├・qc2 < img color text >
├・badboyserti
├・badgirlserti
├・bucinserti
├・fuckboyserti
├・fuckgirlserti
├・goodboyserti
├・goodgirlserti
├・pacarserti
├・maidoserti
├・lt3putriserti
├・lt3putraserti
├・piagamserti
├
╰────────────────╯

╭──ꕥ *DATABASE* ꕥ───╮
├
├・addvn
├・delvn
├・listvn
├・addvid
├・delvid
├・listvid
├・addimg
├・delimg
├・listimg
├
╰────────────────╯

╭──ꕥ *EDUKASI* ꕥ───╮
├
├・branly
├・roboguru
├・kbbi
├・wikipedia 
├
╰────────────────╯

╭──ꕥ *WIBU* ꕥ───╮
├
├・character
├・manga
├・animelist
├・otakudesu
├・otakudesu
├・storynime
├
╰────────────────╯`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})