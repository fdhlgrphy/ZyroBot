
/*
"Wahai orang-orang yang beriman, mengapakah kamu
mengatakann sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu
mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3)

𝙆𝘼𝙇𝙊 𝙈𝘼𝙐 𝙍𝙀𝙐𝙋𝙇𝙊𝘼𝘿 𝙄𝙕𝙄𝙉 𝘿𝙐𝙇𝙐, 𝙅𝘼𝙉 𝙇𝙐𝙋𝘼 𝙏𝘼𝙂

*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { covid } = require("./lib/covid.js");
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { owner, 
        botname, 
        ownername, 
        cikopi,
        hardiapi,
        cikoapi,
        prefix,
        Instagram,
        github,
        yutub,
        wmaing,
        tqq } = JSON.parse(fs.readFileSync('./setting.json'))
//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const cikomode = JSON.parse(fs.readFileSync('./database/cikomode.json'))
module.exports = fdhl = async (fdhl, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		global.prefix
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()         	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = fdhl.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283862323152@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await fdhl.chats.all()
		const groupMetadata = isGroup ? await fdhl.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? fdhl.user.jid : fdhl.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? fdhl.user.name : conts.notify || conts.vname || conts.name || '-'        
        
        const copid = await covid()
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isAntiLink = isGroup ? _antilink.includes(from) : false
	    const isNsfw = isGroup ? nsfww.includes(from) : false
	    const isCikmod = isGroup ? cikomode.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		//INI TIME TOD
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
        const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
        const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
        const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Wait... in process!',
			success: 'Done Jangan Lupa Subscribe Fadhil Graphy',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi!',
				Iv: 'Linknya Error Kak!'
			},
			only: {
				admin: 'Kusus Admin Kak!',
				group: 'Khusus Group Kak!'
			}
		}
		faketeks = wmaing
            const isUrl = (ini) => {
                return ini_url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
            }
            const reply = (teks) => {
                fdhl.sendMessage(from, teks, text, { quoted: mek })
            }
            const sendMess = (hehe, teks) => {
                fdhl.sendMessage(hehe, teks, text)
            }
            const costum = (pesan, tipe, target, target2) => {
                fdhl.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
            }
            const nigambar = fs.readFileSync ('./Arin/fdhlgrphy.jpg')
            const mentions = (teks, memberr, id) => {
                (id == null || id == undefined || id == false) ? fdhl.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }): fdhl.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
            }
            async function faketoko(teks, url_image, title, code, price) {
                var punya_wa = "0@s.whatsapp.net"
                var ini_buffer = await getBuffer(url_image)
                const ini_cstoko = {
                    contextInfo: {
                        participant: punya_wa,
                        remoteJid: 'status@broadcast',
                        quotedMessage: {
                            productMessage: {
                                product: {
                                    currencyCode: code,
                                    title: title,
                                    priceAmount1000: price,
                                    productImageCount: 1,
                                    productImage: {
                                        jpegThumbnail: ini_buffer
                                    }
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        }
                    }
                }
                await fdhl.sendMessage(from, teks, text, ini_cstoko)
            }        
//━━━━━━━━━━━━━━━[ BUTTON BENTAR BANG ]━━━━━━━━━━━━━━━━━//

        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            fdhl.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await fdhl.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            fdhl.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
                contexInfo: adyt
            })
        }
        //sendButLoc(id/from, "string", "string", image, but, mek)
         function _0x49e8(){const _0x2abf1f=['128458zaqRph','15LuvETp','32FoIOpf','By\x20:\x20Prassz','307917pLgBPR','Zerobot~Prassz','127514DLEruK','2301110zFGGkR','11iUrhyl','5IBSTLg','sendMessage','2099160NwtLDQ','672988HpVyoZ','1059558OLmAKI'];_0x49e8=function(){return _0x2abf1f;};return _0x49e8();}(function(_0x4b5fea,_0xcd96a7){const _0xd54c3c=_0x9a06,_0x555513=_0x4b5fea();while(!![]){try{const _0x4e06eb=parseInt(_0xd54c3c(0x12b))/0x1+parseInt(_0xd54c3c(0x123))/0x2*(parseInt(_0xd54c3c(0x12c))/0x3)+-parseInt(_0xd54c3c(0x129))/0x4*(parseInt(_0xd54c3c(0x126))/0x5)+-parseInt(_0xd54c3c(0x12a))/0x6+-parseInt(_0xd54c3c(0x128))/0x7+parseInt(_0xd54c3c(0x12d))/0x8*(parseInt(_0xd54c3c(0x12f))/0x9)+-parseInt(_0xd54c3c(0x124))/0xa*(-parseInt(_0xd54c3c(0x125))/0xb);if(_0x4e06eb===_0xcd96a7)break;else _0x555513['push'](_0x555513['shift']());}catch(_0x5da84c){_0x555513['push'](_0x555513['shift']());}}}(_0x49e8,0x2960e));function _0x9a06(_0x41e8cb,_0x44ab09){const _0x49e8d9=_0x49e8();return _0x9a06=function(_0x9a063c,_0x40f3e3){_0x9a063c=_0x9a063c-0x123;let _0x55b451=_0x49e8d9[_0x9a063c];return _0x55b451;},_0x9a06(_0x41e8cb,_0x44ab09);}const sendButLoc=async(_0x151338,_0x56cd7c,_0x33ce1f,_0xbff411,_0x1ecc85,_0x40a38d)=>{const _0xf018e3=_0x9a06;return buttonMessagesL={'contentText':_0x56cd7c,'footerText':_0x33ce1f,'buttons':_0x1ecc85,'headerType':0x6,'locationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'name':_0xf018e3(0x130),'address':_0xf018e3(0x12e),'jpegThumbnail':_0xbff411}},fdhl[_0xf018e3(0x127)](_0x151338,buttonMessagesL,buttonsMessage,{'quoted':_0x40a38d});};



const sendFile = async (medya, namefile, capti, tag, vn) => {
  baper = await getBuffer(medya)
  mimi = ''
  if (namefile.includes('m4a')){
  fdhl.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
  }
  if (namefile.includes('mp4')){
  fdhl.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
  }
  if (namefile.includes('gif')){
  fdhl.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
  } 
  if (namefile.includes('png')){
  fdhl.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
  }
  
  if (namefile.includes('webp')){
  fdhl.sendMessage(from, baper, sticker, {quoted: tag})
  } else {
  kobe = namefile.split(`.`)[1]
  fdhl.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
  }
}
//━━━━━━━━━━━━━━━[ FAKE RPLY ]━━━━━━━━━━━━━━━━━//
        const fakestatus = (teks) => {
            fdhl.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./Arin/fdhl.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        fdhl.chatRead(from, "read")
        const fakegroup = (teks) => {
            fdhl.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./Arin/fdhl.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: `${botname} ${command}\nTime ${wita}`, 
                            orderTitle: `${botname} ${command}\nTime ${wita}`,
                            thumbnail: nigambar,
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        fdhl.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    fdhl.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
fdhl.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
fdhl.groupRemove(from, [sender])
}     
if (budy.includes(`Assalamualaikum`)) {
reply(`Waalaikumsalam kak ${pushname}`)
}
if (budy.includes(`Hi ciko`)) {

reply(`Hallo Kak *${pushname}😁*\nAda Yang Bisa Ciko Bantu?\nKetik #menu Kak Untuk Mulai Menggunakan CikoBot`)
}

/*if (budy.includes(`*`)) {
await fdhl.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${cikoapi}&text=${budy}`)
                        reply(simi.result)}*/
                        
//» » » » » » » [ 🇱 🇴 🇷 🇩  🇮 🇸  🇵 🇪 🇧 🇷 🇮  ] « « « « « « «\\ 

const time2 = moment().tz("Asia/Makassar").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
//» » » » » » » [ 🇱 🇴 🇷 🇩  🇮 🇸  🇵 🇪 🇧 🇷 🇮  ] « « « « « « «\\

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCIKO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCIKO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅〔 MENU MAKER 〕┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅//

switch (command) {

//┅┅┅┅〔 KALO ADA BUG LAPORKAN!! 〕┅┅┅┅/
			case 'blackpink2': 
                    if (args.length < 1) return reply(`Teks Nya Mana Kak *${pushname}?*😒\nContoh ${prefix}${command} Ciko Bot`)
					mak = body.slice(11)
					reply(mess.wait)
					anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/textpro/black-pink?apikey=hardianto&text=${mak}`)
					buffer1 = await getBuffer(anu.result)
					fdhl.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
					break 
			case 'neon': 
                    if (args.length < 1) return reply(`Teks Nya Mana Kak *${pushname}?*😒\nContoh ${prefix}${command} Ciko Bot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${cikopi}`)
					buffer1 = await getBuffer(anu.result.url)
					fdhl.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
					break 
			case 'naruto': 
                    if (args.length < 1) return reply(`Teks Nya Mana Kak *${pushname}?*😒\nContoh ${prefix}${command} Ciko Bot`)
					mak = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/photooxy/naruto?apikey=hardianto&text=${mak}`)
					buffer1 = await getBuffer(anu.result)
					fdhl.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
					break 
	       case 'nulis':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
           ini_txt = args.join(" ")
           getBuffer(`http://hadi-api.herokuapp.com/api/canvas/nulis?text=${ini_txt}`).then((gambar) => {
           fdhl.sendMessage(from, gambar, image, { quoted: mek })
              })
           break
	       case 'nulis2':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
           ini_txt = args.join(" ")
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/canvas/nulis2?text=${ini_txt}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break
	       case 'nuliskiri':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
           ini_txt = args.join(" ")
	       peb = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${ini_txt}&apikey=${hardiapi}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break
	       case 'narutobanner':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
           ini_txt = args.join(" ")
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${ini_txt}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break	       
	       case 'fireteks':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
           ini_txt = args.join(" ")
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${ini_txt}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break	       
	       case 'goldteks':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
           ini_txt = args.join(" ")
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/metalic-gold?teks=${ini_txt}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break
	       case 'skyteks':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
           ini_txt = args.join(" ")
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/shadow-sky?teks=${ini_txt}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break
	       case 'cupteks':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
           ini_txt = args.join(" ")
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/teks-cup?teks=${ini_txt}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break
	       case 'loveteks':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
           ini_txt = args.join(" ")
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/romantic-messages?teks=${body.slice(10)}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break
	       case 'burnpaper':
           if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/burn-paper?teks=${body.slice(11)}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break
	       case 'loveteks2':
	      if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/love-messages?teks=${body.slice(11)}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break
	       case 'loveteks3':
	       if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/romantic-double?teks=${body.slice(11)}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break	       
	       case 'coffecup':
	       if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/coffee-cup?teks=${body.slice(10)}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break	       	       
	       case 'woodhearth':
	       if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/wood-hearth?teks=${body.slice(12)}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break	       	       	       
	       case 'grafititext':
	      if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
	       peb = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/grafiti-text-cover?teks=${body.slice(13)}`)
	       fdhl.sendMessage(from, peb, image, {quoted: mek})
	       break
	            case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
                    ini_txt = args.join(" ")
                    reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${cikoapi}&text=${ini_txt}`).then((gambar) => {
                        fdhl.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break       	       	       	       
	            case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} Teks1 Teks2 \nMinimal 6Huruf`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${cikoapi}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        fdhl.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} CikoBot`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${cikoapi}&text=${ini_txt}`).then((gambar) => {
                        fdhl.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} Teks1 Teks2 \nMinimal 6Huruf`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${cikoapi}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        fdhl.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break     	       	       	       	       	       
//»»»»»»»»»»»»»»»»»»»»»»|| INI NSRW BANG ||«««««««««««««««««««««««//

           case 'nsfw':
	        if (!isGroup) return reply(mess.only.group)
	        if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses mengaktifkan fitur nsfw')
						fdhl.sendMessage(from, `Bebas Nyari Hentai 🗿`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}											
					break
					
//»»»»»»»»»»»»»»»»»»»»»»|| INI CIKO MODE ||«««««««««««««««««««««««//	
// MAU NYOLONG? BAGI WM GW TOD!! GAK BAGI SIAP DI BULY

     case 'cikomodex' :
         if (!isGroup) return reply(mess.only.group)
         if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
         but = [
         { buttonId: '#cikomodexon', buttonText: { displayText: 'ON' }, type: 1 },
         { buttonId: '#cikomodexoff', buttonText: { displayText: 'OFF' }, type: 1 }
         ]
         sendButton(from, "*SILAHKAN PILIH UNTUK CIKO MODE X*", faketeks, but, {quoted: mek})
         break
     case 'cikomodexon' :
         if (!isGroup) return reply(mess.only.group)
         if (!isOwner) return reply('*FITUR HANYA TERSEDIA UNTUK OWNER*')
         if (isCikmod) return reply('*CIKO MODE X AKTIF!!*')
         cikomode.push(from)
         fs.writeFileSync('./database/cikomode.json', JSON.stringify(cikomode))
         reply(`\`\`\`SUKSES MENGAKTIFKAN CIKO MODE X DI GROUP\`\`\` *${groupMetadata.subject}*`)
         break
     case 'cikomodexoff' :
         if (!isGroup) return reply(mess.only.group)
         if (!isOwner) return reply('*FITUR HANYA TERSEDIA UNTUK OWNER*')
         if (!isCikmod) return reply('*CIKO MODE X SUDAH AKTIF SEBELUMNYA!*')
         cikomode.splice(from, 1)
         fs.writeFileSync('./database/cikomode.json', JSON.stringify(cikomode))
         reply(`\`\`\`SUKSES MENONAKTIFKAN CIKO MODE X DI GROUP\`\`\` *${groupMetadata.subject}*`)
         break

//»»»»»»»»»»»»»»»»»»»»»»|| INI WM GW TOD : FEBZ ||«««««««««««««««««««««««//								
					
                case 'ytplay':
                case 'play':
                    if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
                    await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${cikoapi}&query=${args.join(" ")}`)
                        .then(async(result) => {
                            await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${cikoapi}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
                                .then(async(result) => {
                                    result = result.result
                                    caption = `*❖ Title*   : *${result.title}*\n`
                                    caption += `*❖ Size*     : *${result.size}*`
                                    ini_buffer = await getBuffer(result.thumbnail)
                                    await fdhl.sendMessage(from, ini_buffer, image, { quoted: mek, caption: caption })
                                    get_audio = await getBuffer(result.link)
                                    await fdhl.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: mek })
                                })
                        })
                    break					
					
//»»»»»»»»»»»»»»»»»»»»»»|| menu + fake reply ||«««««««««««««««««««««««//

            
                   case 'menu':
                   case 'help':
                   inimenu = `Hy Kak ${pushname} ${ucapanWaktu}
   ≡ *${botname} menu*    
  🎟${prefix}groupmenu
  🎟${prefix}stickermenu
  🎟${prefix}funmenu
  🎟${prefix}randommenu	                 
  🎟${prefix}makermenu
  🎟${prefix}ownermenu
  🎟${prefix}animemenu️
  🎟${prefix}hentaimenu️`	                                  
	                  	                                                                                                     but = [
                   { buttonId: '#allmenu', buttonText: { displayText: 'ALLMENU🗂️' }, type: 1 },
                   { buttonId: '#sewabot', buttonText: { displayText: 'SEWABOT🏷️' }, type: 1 }
                   ]
                  sendButton(from, inimenu, faketeks, but, {quoted: mek})
                  break

//»»»»»»»»»»»»»»»»»»»»»»|| group menu ||«««««««««««««««««««««««//

                    case 'groupmenu':                            
                    gcmenu = `${ucapanWaktu} kak ${pushname}

 ❑Group Menu
	◈ ${prefix}antilink
	◈ ${prefix}welcome
	◈ ${prefix}antivirtex
	◈ ${prefix}group
	◈ ${prefix}linkgrup
	◈ ${prefix}promote
	◈ ${prefix}demote
	◈ ${prefix}add
	◈ ${prefix}kick
	◈ ${prefix}tagall	
	◈ ${prefix}setpp
	◈ ${prefix}setdesc
	◈ ${prefix}setname
	◈ ${prefix}hidetag
	◈ ${prefix}hentaimenu
	
${wmaing}`
	await fdhl.sendMessage(from, gcmenu, text, {quoted: ftrol})
	               break

//»»»»»»»»»»»»»»»»»»»»»»|| group menu ||«««««««««««««««««««««««//

                   case 'groupmenu':                            
                    gcmenu = `${ucapanWaktu} kak ${pushname}

 ❑Group Menu
	◈ ${prefix}antilink
	◈ ${prefix}welcome
	◈ ${prefix}antivirtex
	◈ ${prefix}group
	◈ ${prefix}linkgrup
	◈ ${prefix}promote
	◈ ${prefix}demote
	◈ ${prefix}add
	◈ ${prefix}kick
	◈ ${prefix}tagall	
	◈ ${prefix}setpp
	◈ ${prefix}setdesc
	◈ ${prefix}setname
	◈ ${prefix}hidetag
	◈ ${prefix}hentaimenu
	
${wmaing}`
	await fdhl.sendMessage(from, gcmenu, text, {quoted: ftrol})
	               break
	               
 //»»»»»»»»»»»»»»»»»»»»»»|| sticker menu ||«««««««««««««««««««««««//                                  
 
                                   case 'stickermenu':                            
                    smenu = `${ucapanWaktu} kak ${pushname}

 ❑Sticker Menu
	◈ ${prefix}attp
	◈ ${prefix}sticker
	◈ ${prefix}tomp3
	◈ ${prefix}tovideo
	
${wmaing}`
	await fdhl.sendMessage(from, smenu, text, {quoted: ftrol})
	               break
	               
//»»»»»»»»»»»»»»»»»»»»»»|| fun menu ||«««««««««««««««««««««««//	               

	               case 'funmenu':                            
                    fmenu = `${ucapanWaktu} kak ${pushname}

 ❑Fun Menu
    ◈ ${prefix}truth
	◈ ${prefix}dare
    ◈ ${prefix}rate
	◈ ${prefix}apakah
	◈ ${prefix}kapankah
	◈ ${prefix}bisakah
	◈ ${prefix}darkjokes	
	
${wmaing}`
	await fdhl.sendMessage(from, fmenu, text, {quoted: ftrol})
	               break
	               
//»»»»»»»»»»»»»»»»»»»»»»|| random menu ||«««««««««««««««««««««««//
                    
                     case 'randommenu':                            
                    rmenu = `${ucapanWaktu} kak ${pushname}

  ❑Mager Menu
	◈ ${prefix}nulis
	◈ ${prefix}nulis2
	◈ ${prefix}nuliskiri
	◈ ${prefix}nuliskanan
			
 ❑Stalk Menu
    ◈ ${prefix}github
    ◈ ${prefix}Instagram
    
  ❑Primbon Menu
	◈ ${prefix}artinama

  ❑Muslim Menu	
    ◈ ${prefix}kisahnabi
	◈ ${prefix}niatsholat
	◈ ${prefix}jadwalsholat
	◈ ${prefix}quotesmuslim
    	
${wmaing}`
	await fdhl.sendMessage(from, rmenu, text, {quoted: ftrol})
	               break

//»»»»»»»»»»»»»»»»»»»»»»|| maker menu ||«««««««««««««««««««««««//

                    case 'mskermenu':                            
                    mmenu = `${ucapanWaktu} kak ${pushname}

 ❑Maker Menu
  ◈ ${prefix}neon
  ◈ ${prefix}bannerlol
  ◈ ${prefix}narutobanner
  ◈ ${prefix}fireteks
  ◈ ${prefix}goldteks
  ◈ ${prefix}skyteks
  ◈ ${prefix}cupteks
  ◈ ${prefix}loveteks
  ◈ ${prefix}loveteks2
  ◈ ${prefix}loveteks3
  ◈ ${prefix}burnpaper
  ◈ ${prefix}coffecup
  ◈ ${prefix}woodhearth
  ◈ ${prefix}grafititext
  ◈ ${prefix}blackpink  
  ◈ ${prefix}neon  
  ◈ ${prefix}greenneon  
  ◈ ${prefix}advanceglow  
  ◈ ${prefix}futureneon  
  ◈ ${prefix}sandsummer  
  ◈ ${prefix}sandengraved  
  ◈ ${prefix}neonlight  
  ◈ ${prefix}holographic  
  ◈ ${prefix}text1917  
  ◈ ${prefix}minion  
  ◈ ${prefix}deluxesilver  
  ◈ ${prefix}newyearcard  
  ◈ ${prefix}bloodfrosted  
  ◈ ${prefix}halloween  
  ◈ ${prefix}jokerlogo  
  ◈ ${prefix}fireworksparkle  
  ◈ ${prefix}natureleaves  
  ◈ ${prefix}bokeh  
  ◈ ${prefix}toxic  
  ◈ ${prefix}strawberry  
  ◈ ${prefix}box3d  
  ◈ ${prefix}roadwarning  
  ◈ ${prefix}breakwall  
  ◈ ${prefix}icecold  
  ◈ ${prefix}luxury  
  ◈ ${prefix}cloud  
  ◈ ${prefix}summersand  
  ◈ ${prefix}horrorblood  
  ◈ ${prefix}thunder  
  ◈ ${prefix}shadow  
  ◈ ${prefix}cup  
  ◈ ${prefix}cup1  
  ◈ ${prefix}romance  
  ◈ ${prefix}smoke  
  ◈ ${prefix}burnpaper  
  ◈ ${prefix}lovemessage  
  ◈ ${prefix}undergrass  
  ◈ ${prefix}love  
  ◈ ${prefix}coffe  
  ◈ ${prefix}woodheart  
  ◈ ${prefix}woodenboard  
  ◈ ${prefix}summer3d  
  ◈ ${prefix}wolfmetmen
  ◈ ${prefix}underwater  
  ◈ ${prefix}golderrose  
  ◈ ${prefix}summernature  
  ◈ ${prefix}letterleaves  
  ◈ ${prefix}fallleaves  
  ◈ ${prefix}flamming  
  ◈ ${prefix}harrypotter  
  ◈ ${prefix}carvedwood  
  ◈ ${prefix}pornhub  
  ◈ ${prefix}glitch  
  ◈ ${prefix}avenger  
  ◈ ${prefix}space  
  ◈ ${prefix}ninjalogo  
  ◈ ${prefix}marvelstudio  
  ◈ ${prefix}lionlogo  
  ◈ ${prefix}wolflogo  
  ◈ ${prefix}steel3d  
  ◈ ${prefix}wallgravity 
	
${wmaing}`
	await fdhl.sendMessage(from, mmenu, text, {quoted: ftrol})
	                break	
	                
//»»»»»»»»»»»»»»»»»»»»»»|| ownermenu ||«««««««««««««««««««««««//	                               

                    case 'ownermenu':                            
                    omenu = `${ucapanWaktu} kak ${pushname}

 ❑Owner Menu
	◈ ${prefix}owner
	◈ ${prefix}sewabot
	◈ ${prefix}bc
	◈ ${prefix}cikomodex ( BETA )
	◈ ${prefix}nsfw 0/1
	◈ ${prefix}antilink
	◈ ${prefix}antivirtex
	
${wmaing}`
	await fdhl.sendMessage(from, omenu, text, {quoted: ftrol})
	               break

//»»»»»»»»»»»»»»»»»»»»»»|| anime menu ||«««««««««««««««««««««««//

                    case 'animemenu':                            
                    amenu = `${ucapanWaktu} kak ${pushname}

  ❑Anime Menu
	◈ ${prefix}loli
	◈ ${prefix}loli2
	◈ ${prefix}neko
	◈ ${prefix}waifu
	◈ ${prefix}husbu
	◈ ${prefix}sagiri
	◈ ${prefix}elaina
	◈ ${prefix}kanna
	◈ ${prefix}animeart
	◈ ${prefix}shinobu
	◈ ${prefix}wpanime
	◈ ${prefix}wpanime2
	◈ ${prefix}hanime
	◈ ${prefix}waifusearch
	◈ ${prefix}wpanime3
	
${wmaing}`
	await fdhl.sendMessage(from, amenu, text, {quoted: ftrol})
	               break
	                                                   
                    case 'allmenu':
                    var punya_wa = "0@s.whatsapp.net"
                    var ini_text = "𝗖𝗜𝗞𝗢𝗕𝗢𝗧 𝗠𝗘𝗡𝗨\n‣ Info ciko : status online\n‣ Rating : ★★★★☆"
                    var ini_buffer = fs.readFileSync ('./Arin/fdhlgrphy.jpg')
                    const ini_csreply = {
                        contextInfo: {
                            stanzaId: 'B826873620DD5947E683E3ABE663F263',
                            participant: punya_wa,
                            remoteJid: 'status@broadcast',
                            quotedMessage: {
                                imageMessage: {
                                    caption: ini_text,
                                    jpegThumbnail: ini_buffer
                                }
                            }
                        }
                    }            
menu2 = `Hi kak @${pushname}👋${ucapanWaktu}
┌━━━━━━━━━━━━━━━━━━━━┈
│ ≡ *WAKTU INDONESIA*
*│⏰Wib :* ${jam}
*│⏰Wita :* ${wita}
*│⏰Wit :* ${wit}
│ ≡ *INFO ${botname}*
*│⚙️️Pefix :* ${prefix}
*│💌Instagram :* ${Instagram}
*│📸YouTube :* ${yutub}
*│🗃️Github :* ${github}
│≡ *INFO COVID🦠*
*│💔Terinfeksi :* ${copid[0].kasus}
*│☠️Kematian :* ${copid[0].kematian}
*│💚Sembuh :* ${copid[0].sembuh}
└━━━━━━━━━━━━━━━━━━━━┈ 
 ❑Group Menu
	◈ ${prefix}antilink
	◈ ${prefix}welcome
	◈ ${prefix}antivirtex
	◈ ${prefix}group
	◈ ${prefix}linkgrup
	◈ ${prefix}promote
	◈ ${prefix}demote
	◈ ${prefix}add
	◈ ${prefix}kick
	◈ ${prefix}tagall	
	◈ ${prefix}setpp
	◈ ${prefix}setdesc
	◈ ${prefix}setname
	◈ ${prefix}hidetag
	◈ ${prefix}hentaimenu
	
 ❑Sticker Menu
	◈ ${prefix}attp
	◈ ${prefix}sticker
	◈ ${prefix}tomp3
	◈ ${prefix}tovideo
	
 ❑Fun Menu
    ◈ ${prefix}truth
	◈ ${prefix}dare
    ◈ ${prefix}rate
	◈ ${prefix}apakah
	◈ ${prefix}kapankah
	◈ ${prefix}bisakah
	◈ ${prefix}darkjokes	
	
  ❑Mager Menu
	◈ ${prefix}nulis
	◈ ${prefix}nulis2
	◈ ${prefix}nuliskiri
	◈ ${prefix}nuliskanan
			
 ❑Stalk Menu
    ◈ ${prefix}github
    ◈ ${prefix}Instagram
    
 ❑Owner Menu
	◈ ${prefix}owner
	◈ ${prefix}sewabot
	◈ ${prefix}bc
	◈ ${prefix}report
	◈ ${prefix}nsfw 0/1
	◈ ${prefix}antilink
	◈ ${prefix}antivirtex

  ❑Anime Menu
	◈ ${prefix}loli
	◈ ${prefix}loli2
	◈ ${prefix}neko
	◈ ${prefix}waifu
	◈ ${prefix}husbu
	◈ ${prefix}sagiri
	◈ ${prefix}elaina
	◈ ${prefix}kanna
	◈ ${prefix}animeart
	◈ ${prefix}shinobu
	◈ ${prefix}wpanime
	◈ ${prefix}wpanime2
	◈ ${prefix}hanime
	◈ ${prefix}waifusearch
	◈ ${prefix}wpanime3
	
  ❑Primbon Menu
	◈ ${prefix}artinama

  ❑Muslim Menu	
    ◈ ${prefix}kisahnabi
	◈ ${prefix}niatsholat
	◈ ${prefix}jadwalsholat
	◈ ${prefix}quotesmuslim
	
 ❑Maker Menu
	◈ ${prefix}neon
	◈ ${prefix}bannerlol
	◈ ${prefix}narutobanner
	◈ ${prefix}fireteks
	◈ ${prefix}goldteks
	◈ ${prefix}skyteks
	◈ ${prefix}cupteks
	◈ ${prefix}loveteks
	◈ ${prefix}loveteks2
	◈ ${prefix}loveteks3
	◈ ${prefix}burnpaper
	◈ ${prefix}coffecup
	◈ ${prefix}woodhearth
	◈ ${prefix}grafititext
	◈ ${prefix}blackpink  
	◈ ${prefix}neon  
	◈ ${prefix}greenneon  
 	◈ ${prefix}advanceglow  
   	◈ ${prefix}futureneon  
   	◈ ${prefix}sandsummer  
 	◈ ${prefix}sandengraved  
 	◈ ${prefix}neonlight  
 	◈ ${prefix}holographic  
 	◈ ${prefix}text1917  
	◈ ${prefix}minion  
	◈ ${prefix}deluxesilver  
	◈ ${prefix}newyearcard  
	◈ ${prefix}bloodfrosted  
	◈ ${prefix}halloween  
 	◈ ${prefix}jokerlogo  
	◈ ${prefix}fireworksparkle  
  	◈ ${prefix}natureleaves  
	◈ ${prefix}bokeh  
 	◈ ${prefix}toxic  
	◈ ${prefix}strawberry  
	◈ ${prefix}box3d  
   	◈ ${prefix}roadwarning  
   	◈ ${prefix}breakwall  
  	◈ ${prefix}icecold  
  	◈ ${prefix}luxury  
 	◈ ${prefix}cloud  
	◈ ${prefix}summersand  
  	◈ ${prefix}horrorblood  
 	◈ ${prefix}thunder  
 	◈ ${prefix}shadow  
  	◈ ${prefix}cup  
   	◈ ${prefix}cup1  
  	◈ ${prefix}romance  
	◈ ${prefix}smoke  
 	◈ ${prefix}burnpaper  
	◈ ${prefix}lovemessage  
	◈ ${prefix}undergrass  
	◈ ${prefix}love  
	◈ ${prefix}coffe  
	◈ ${prefix}woodheart  
  	◈ ${prefix}woodenboard  
	◈ ${prefix}summer3d  
    ◈ ${prefix}wolfmetmen
    ◈ ${prefix}underwater  
	◈ ${prefix}golderrose  
   	◈ ${prefix}summernature  
 	◈ ${prefix}letterleaves  
   	◈ ${prefix}fallleaves  
  	◈ ${prefix}flamming  
 	◈ ${prefix}harrypotter  
   	◈ ${prefix}carvedwood  
  	◈ ${prefix}pornhub  
  	◈ ${prefix}glitch  
	◈ ${prefix}avenger  
 	◈ ${prefix}space  
	◈ ${prefix}ninjalogo  
  	◈ ${prefix}marvelstudio  
	◈ ${prefix}lionlogo  
  	◈ ${prefix}wolflogo  
  	◈ ${prefix}steel3d  
	◈ ${prefix}wallgravity 

    ≡ *Credits by*
▢ @LordPebrikun
▢ @FadhilGraphy`            
		await fdhl.sendMessage(from, menu2, text, ini_csreply)
		break

case 'hentaimenu':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
inibuf = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tP28zi7qOBD1FWIJn8moQETUnSvT3AL0Qg&usqp=CAU`)
const text1 =`≡ *GEGE LU NGAB GK TAKUT DOSA!!*

Ibnu Katsir rahimahullah berkata,

هذا أمر من الله تعالى لعباده المؤمنين أن يغضوا من أبصارهم عما حرم عليهم، فلا ينظروا إلا إلى ما أباح لهم النظر إليه ، وأن يغضوا أبصارهم عن المحارم
Artinya :
“Ini adalah perintah dari Allah Ta’ala kepada hamba-hambaNya yang beriman untuk menjaga (menahan) pandangan mereka dari hal-hal yang diharamkan atas mereka. Maka janganlah memandang kecuali memandang kepada hal-hal yang diperbolehkan untuk dipandang. Dan tahanlah pandanganmu dari hal-hal yang diharamkan.”

DOSA TANGGUNG SENDIRI!!
	
  ❑Hentai Menu
	◈ ${prefix}neko
	◈ ${prefix}neko2
	◈ ${prefix}neko3
	◈ ${prefix}hentai
	◈ ${prefix}hentai2	
	◈ ${prefix}anal
	◈ ${prefix}yuri
	◈ ${prefix}trap
	◈ ${prefix}solo
	◈ ${prefix}erochan`
     fdhl.sendMessage(from, inibuf, image, { caption: text1, quoted: mek })
     break
case 'sewabot':
      txtj = `*Hallo Kak ${pushname}*
*Untuk Menyewa Bot Silahkan Lihat*
*List🔖Harga Berikut🛒📌*

*[ DAFTAR HARGA SEWA BOT🛒 ]*
*🔖️SEMINGGU : 5k*
*🔖️SEBULAN : 10k*
*🔖️PERMANEN : 15k*
*🔖️PERMANEN+VIP : 20k*

*Jika Tertarik Silahkan Hubungi Owner*
*Dengan Ketik ${prefix}owner*
*Atau Anda Bisa Langsung Hubungi*
*Owner Kami Dengan Klik Tautan Berikut*
https://wa.me/qr/7BT35T32O3YBO1`
reply(txtj)
break

case 'menu2':
 listMsg = {
 buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
 footerText: 'PEBZKUN',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${ownername} - ${botname}`,
 rows: [
                          {
                              "title": "menu",
                              "rowId": ""
                           },
                           {
                              "title": "Speed",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "rowId": ""
                           },
                           {
                              "title": "Creator",
                              "rowId": ""
                           },
                           {
                              "title": "Jadibot",
                              "rowId": ""
                           },
                           {
                              "title": "Runtime",
                              "rowId": ""
                           },
                           {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "MakerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "rowId": "d"
                           },
                           {
                              "title": "UpswMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
fdhl.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
break

//»»»»»»»»»»»»»»»»»»»»»»|| MUSLIM MENU ||«««««««««««««««««««««««//

case 'kisahnabi':
      if (args.length < 1) return reply(`Apa Yang Mau Di Cari Kak ${pushname}\nContoh ${prefix}${command} muhammad`)
      teks = q
      anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/muslim/kisahnabi?nabi=${teks}&apikey=hardianto`, {method: 'get'})
 	  reply(`*Kisah Nabi ${teks}*\n\n`+anu.result.kisah)
				break
case 'quotesmuslim':
      anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/random/quotes/muslim?apikey=hardianto`, {method: 'get'})
 	  reply(`*Author ${ownername}*\n\n`+anu.result.text_id)
				break
case 'jadwalsholat':
      if (args.length < 1) return reply('Daerah/Kota nya?')
      anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${body.slice(14)}?apikey=${cikoapi}`, {method: 'get'})
      teks = q
      peb = `*[ JADWAL SHOLAT ]*
      
*Wilayah : ${anu.result.wilayah}*
*Tanggal : ${anu.result.tanggal}*
*Sahur : ${anu.result.sahur}*
*Imsak : ${anu.result.imsak}*
*Subuh : ${anu.result.subuh}*
*Dzuhur : ${anu.result.dzuhur}*
*Ashar : ${anu.result.ashar}*
*Maghrib : ${anu.result.maghrib}*
*isya : ${anu.result.isya}*
`
reply(`Jadwal Sholat Daerah *${teks}*\n\n`+peb)
				break
case 'niatsholat':
       if (args.length < 1) return reply('Contoh #niatsholat subuh')
       anu = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${body.slice(12)}?apikey=${cikoapi}`, {method: 'get'})
       teks = q								
	   peb = `*[ NIAT SHALAT ]*

*${anu.result.name}*
*Arab :* \n*${anu.result.ar}*
*Latin* : *${anu.result.latin}*
*Artinya* : *${anu.result.id}*
`
reply(`*Niat Sholat ${teks}*\n\n`+peb)
break
										
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅〔 FUN MENU〕┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅//		
	        	
            case 'truth':
            case 'trut':
                  if (!isGroup) return reply(mess.only.group)
                  const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://www.linkpicture.com/q/images_72.png`)
		fdhl.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: mek })
	        	break
		case 'dare':
		if (!isGroup) return reply(mess.only.group)
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = await getBuffer(`https://www.linkpicture.com/q/images_72.png`)
		fdhl.sendMessage(from, tod, image, { quoted: mek, caption: '*DARE*\n\n'+ der })
        		break
            case 'darkjokes':
                    if (!isGroup) return reply(mess.only.group)
					let data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					fdhl.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: mek})
					break
					//menu gabut gc
//-- ganteng cek
case 'gantengcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}gantengcek pebkun`)
if (!isGroup) return reply(mess.only.group)
  random = `${Math.floor(Math.random() * 100)}`
  gan = q
  cek = `Target : *${gan}*
Persentase : ${random}%`
fdhl.sendMessage(from, cek, text, {quoted: mek})
break

//--- cantik cek
case 'cantikcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}cantikcek pebkun`)
if (!isGroup) return reply(mess.only.group)
  random = `${Math.floor(Math.random() * 100)}`
  can = q
  cek = `Target : *${can}*
Persentase : ${random}%`
fdhl.sendMessage(from, cek, text, {quoted: mek})
break

//--- apakah
case 'apakah':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}apakah pebkun jelek`)
apa = q
naon = ["Iya","Tidak","Mungkin"]
random = naon[Math.floor(Math.random() * (naon.length))]
apakah = `Apakah *${apa}*
Jawaban : ${random}`
reply(apakah)
break

//--- rate
case 'rate':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}rate pebkun jelek`)
rate = q
random = `${Math.floor(Math.random() * 100)}`
rating = `Rate ${rate}
Persentase : ${random}%`
reply(rating)
break

//--- bisakah
case 'bisakah':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}bisakah pebkun terbang`)
bisa = q
naon = ["Iya","Tidak","Mungkin"]
random = naon[Math.floor(Math.random() * (naon.length))]
bisakah = `Bisakah ${bisa}
Jawaban : ${random}`
reply(bisakah)
break

//--- kapankah
case 'kapankah':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}kapankah pebkun menikah`)
kapan = q
no = `${Math.floor(Math.random() * 100)}`
naon = ["Jam lagi","Hari lagi","Minggu lagi","Bulan lagi","Tahun lagi"]
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Kapankah ${kapan}
Jawaban : ${no} ${random}`
reply(kapan)
break		

case 'tagall':
		  if (!isGroup) return reply(mess.only.group)
		    if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					members_id = []
			teks = `▢ Group : *${groupName}*\n▢ Jumlah member : *${groupMetadata.participants.length}*\n\n┌───⊷ *MENTIONS* ⊶\n`
			for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
			teks += `└──────────────`
			mentions(teks, members_id, true)
			break
			
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅〔 Anime Hentai Menu〕┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅//	

case  'erochan': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kemonomimi&apikey=hardianto`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'solo': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=girlSolo&apikey=hardianto`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'trap': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=trap&apikey=hardianto`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'yuri': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'anal':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'hentai2': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/hentai`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'neko': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'neko2': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/neko`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'neko3': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/neko2`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'neko3': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(``)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'neko3': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
buffer = await getBuffer(``)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'hentai': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk aktif`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})


//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅〔 Random Poto Anime 〕┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅//	

case  'waifusearch': 
       if (args.length < 1) return reply(`Contoh ${prefix}${command} sagiri`)
       reply(mess.wait)
buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/waifusrc?nama=${body.slice(13)}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'hanime': 
reply(mess.wait)
buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/anime`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'neko': 
reply(mess.wait)
buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${hardiapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'wpanime2': 
reply(mess.wait)
buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/walpaperanime`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'wpanime': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/wallnime?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'kanna': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/kanna?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
break
case  'loli': 
reply(mess.wait)
buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/loli?apikey=${hardiapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'loli2': 
reply(mess.wait)
buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'neko': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'waifu': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'husbu': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'shota': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/shota?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'sagiri': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'elaina': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/elaina?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case  'shinobu': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/shinobu?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
case  'animeart': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/art?apikey=${cikoapi}`)
fdhl.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./pebrikun.jpg')})
break
case 'ppcp':
            reply(mess.wait)                  
			anu1 = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo1 = await getBuffer(anu1.result.cowo_image)
			fdhl.sendMessage(from, cowo1, MessageType.image, { thumbnail: fs.readFileSync('./pebrikun.jpg'), caption: 'ini cowo nya..', quoted: mek})
		    cewe1 = await getBuffer(anu1.result.cewe_image)
		    fdhl.sendMessage(from, cewe1, MessageType.image, { thumbnail: fs.readFileSync('./pebrikun.jpg'), caption: 'ini cewe nya...', quoted: mek})
		    break
//»»»»»»»»»»»»»»»»»»»»»»|| PRIMBON MENU ||«««««««««««««««««««««««//

case 'artinama':
      if (args.length < 1) return reply(`Contoh ${prefix}${command} Pebri`)
      teks = q
      anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
 	  reply(`*Arti Nama ${teks}*\n\*`+anu.result)
				break

//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅〔 Downloader Menu 〕┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅//	

				/*case 'tiktokdl': 
				if (args.length < 1) return reply('Urlnya mana sayang?')
                     anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=cikoapi&url=${body.slice(10)}`, {method: 'get'})
					buffer = await getBuffer(anu.result.link)
                    fdhl.sendMessage(from, buffer, video, )
				    break*/

case 'ytlink':
if (args.length < 1) return reply('Link Nya Mana?')
if(!ini_url(args[0]) && !args[0].includes('youtu')) return reply('error mass')
teks = args.join(' ')
reply(mess.wait)
res = await y2mateV(teks).catch(e => {
reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
result = `❒「  *${botname}*  」
├ *Judul :* ${res[0].judul}
├ *Ukuran :* ${res[0].size}
├ *Kualitas :* ${res[0].quality}p
├ *Nama File :* ${res[0].output}
└ *Output :* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
break
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅〔 StalkingMenu 〕┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅//	

case 'github':
      if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} febzofc\nPastikan Nama Github Benar`)
      ini_txt = args.join(" ")
      reply(mess.wait)
      peb = await fetchJson(`https://api.lolhuman.xyz/api/github/${ini_txt}?apikey=${cikoapi}`)
      buffer = await getBuffer(peb.result.avatar)
      teks = `*[ GithubStalk ]*
*Nama : ${peb.result.name}*
*Followers : ${peb.result.followers}*
*Following : ${peb.result.following}*
*Public Repost : ${peb.result.public_repos}*
*Public Gits : ${peb.result.public_gists}*
*Type / Status : ${peb.result.type}*
*Bio :* ${peb.result.bio}
`
fdhl.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
break
case 'instagram':
      if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} febzofc\nPastikan Nama Instagram nya Benar`)
      ini_txt = args.join(" ")
      reply(mess.wait)
      peb = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${ini_txt}?apikey=${cikoapi}`)
      buffer = await getBuffer(peb.result.photo_profile)
      teks = `*[ Instagram Stalk ]*      
*Nama : ${peb.result.username}*
*FullNama : ${peb.result.fullname}*
*Followers : ${peb.result.followers}*
*Following : ${peb.result.following}*
*TotalPost : ${peb.result.posts}*
*Bio* : \n${peb.result.bio}`
fdhl.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
break
		
case 'batch':
      if (args.length == 0) return reply(`Teks nya mana kak ${pushname}\nExample: ${prefix + command} tonikaku kawai`)
      ini_txt = args.join(" ")
      tod = await fetchJson(`https://hardianto-chan.herokuapp.com/api/anime/kusonime?search=${ini_txt}&apikey=hardianto`, {method: 'get'})
      buffer = await getBuffer(tod.result.thumbs)
      teks = q
      peb = `*[ ANIME BATCH ]*
      
*Judul : ${tod.result.title}*
*Episode : ${tod.result.total_episode}*
*Rilis : ${tod.result.released_on}*
*Genre : ${tod.result.genre}*
*Durasi : ${tod.result.duration}*
*Producer : ${tod.result.producer}*
*Rating : ${tod.result.score}*
*Dowload :* \n${tod.result.resolution}
${tod.result.download_list}
${tod.result.download_link}
${tod.result.downloader}
`
fdhl.sendMessage(from, buffer, image, {quoted: mek, caption: peb})
//reply(`ANIME BATCH *${teks}*\n\n`+peb)
break

              case 'otaku':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=ciko&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `*Title :* ${get_result.title}\n`
                    ini_txt += `*Japanese :* ${get_result.japanese}\n`
                    ini_txt += `*Judul :* ${get_result.judul}\n`
                    ini_txt += `*Type :* ${get_result.type}\n`
                    ini_txt += `*Episode :* ${get_result.episodes}\n`
                    ini_txt += `*Aired :* ${get_result.aired}\n`
                    ini_txt += `*Producers :* ${get_result.producers}\n`
                    ini_txt += `*Genre :* ${get_result.genres}\n`
                    ini_txt += `*Duration :* ${get_result.duration}\n`
                    ini_txt += `*Studios :* ${get_result.status}\n`
                    ini_txt += `*Rating :* ${get_result.rating}\n`
                    ini_txt += `*Credit :* ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break	
                case 'wait':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await fdhl.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${cikoapi}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        await fdhl.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break                    																			
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅〔 FEATURE GROUP 〕┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅//

     case 'welcome':   
         if (!isGroup) return reply(mess.only.group)
         if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
         if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
         if ((args[0]) === 'on') {
         if (isWelkom) return reply('welcome sudah aktif')
         _welkom.push(from)
         fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
         reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
         } else if ((args[0]) === 'off') {
         if (!isWelkom) return reply('welcome sudah off sebelumnya')
             _welkom.splice(from, 1)
         fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
         reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
         } else {
         reply('on untuk mengaktifkan, off untuk menonaktifkan')
         }
         break
     case 'antilink' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         but = [
         { buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
         { buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
         ]
         sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
         break
     case 'antilinkon' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (isAntiLink) return reply('anti link sudah on')
         _antilink.push(from)
         fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
         reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
         break
     case 'antilinkoff' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (!isAntiLink) return reply('anti link sudah off sebelumnya')
         _antilink.splice(from, 1)
         fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
         reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
         break
     case 'antivirtex' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         but = [
         { buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
         { buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
         ]
         sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
         break
     case 'antivirtexon' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
         _antivirtex.push(from)
         fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
         reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
         break
     case 'antivirtexoff' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
         _antivirtex.splice(from, 1)
         fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
         reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
         break
     case 'group' :
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isGroup) return reply(mess.only.group)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         but = [
         { buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
         { buttonId: '!geouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
         ]
         sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
         break
     case 'groupbuka' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
         fdhl.groupSettingChange(from, GroupSettingChange.messageSend, false)
         break
     case 'grouptutup' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
         fdhl.groupSettingChange(from, GroupSettingChange.messageSend, true)
         break
     case 'linkgrup' :
         if (!isGroup) return reply(mess.only.group)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         linkgc = await fdhl.groupInviteCode(from)
         yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
         fdhl.sendMessage(from, yeh, text, { quoted: ftrol })
         break
     case 'promote' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
         mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
         if (mentioned.length > 1) {
         teks = 'Perintah di terima, anda menjdi admin :\n'
         for (let _ of mentioned) {
         teks += `@${_.split('@')[0]}\n`
         }
         mentions(teks, mentioned, true)
         fdhl.groupMakeAdmin(from, mentioned)
         } else {
         mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
         fdhl.groupMakeAdmin(from, mentioned)
         }
         break
     case 'demote' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
         mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
         if (mentioned.length > 1) {
         teks = 'Perintah di terima, anda tidak menjadi admin :\n'
         for (let _ of mentioned) {
         teks += `@${_.split('@')[0]}\n`
         }
         mentions(teks, mentioned, true)
         fdhl.groupDemoteAdmin(from, mentioned)
         } else {
         mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
         fdhl.groupDemoteAdmin(from, mentioned)
         }
         break
     case 'add' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (args.length < 1) return reply('Yang mau di add siapa??')
         if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
         try {
         num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
         fdhl.groupAdd(from, [num])
         } catch (e) {
         console.log('Error :', e)
         reply('Gagal menambahkan target, mungkin karena di private')
         }
         break
     case 'kick' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
         mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
         if (mentioned.length > 1) {
         teks = 'Perintah di terima, mengeluarkan :\n'
         for (let _ of mentioned) {
         teks += `@${_.split('@')[0]}\n`
         }
         mentions(teks, mentioned, true)
         fdhl.groupRemove(from, mentioned)
         } else {
         mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
         fdhl.groupRemove(from, mentioned)
         }
         break
     case 'setname':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         fdhl.groupUpdateSubject(from, `${body.slice(9)}`)
         fdhl.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
         break
     case 'setdesc':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         fdhl.groupUpdateDescription(from, `${body.slice(9)}`)
         fdhl.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
         break
     case 'setpp':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         media = await fdhl.downloadAndSaveMediaMessage(mek, './database/media_user')
         await fdhl.updateProfilePicture(from, media)
         reply(mess.wait)
         reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
         break
     case 'hidetag':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         var value = body.slice(9)
         var group = await fdhl.groupMetadata(from)
         var member = group['participants']
         var mem = []
         member.map(async adm => {
         mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
         })
         var options = {
         text: value,
         contextInfo: { mentionedJid: mem },
         quoted: ftrol
         }
         fdhl.sendMessage(from, options, text)
         break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

     case 'attp':
         if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
         buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
         fdhl.sendMessage(from, buffer, sticker, { quoted: ftrol })
         break
         case 'sticker':
         case 'stiker':
         case 's':
         case 'stickergif':
         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         const media = await fdhl.downloadAndSaveMediaMessage(encmedia, './database/media_user')
         ran = getRandom('.webp')
         await ffmpeg(`./${media}`)
         .input(media)
         .on('start', function (cmd) {
         console.log(`Started : ${cmd}`)
         })
         .on('error', function (err) {
         console.log(`Error : ${err}`)
         fs.unlinkSync(media)
         reply(mess.error.stick)
         })
         .on('end', function () {
         console.log('Finish')
         buffer = fs.readFileSync(ran)
         costum(buffer, sticker, Verived, `Subscribe Fadhil Graphy\nSubscriebe FebZabotz`)
         fs.unlinkSync(media)
         fs.unlinkSync(ran)
         })
         .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
         .toFormat('webp')
         .save(ran)
         } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
         const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         const media = await fdhl.downloadAndSaveMediaMessage(encmedia, './database/media_user')
         ran = getRandom('.webp')
         reply(mess.wait)
         await ffmpeg(`./${media}`)
         .inputFormat(media.split('.')[1])
         .on('start', function (cmd) {
         console.log(`Started : ${cmd}`)
         })
         .on('error', function (err) {
         console.log(`Error : ${err}`)
         fs.unlinkSync(media)
         tipe = media.endsWith('.mp4') ? 'video' : 'gif'
         reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
         })
         .on('end', function () {
         console.log('Finish')
         costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Stiker gif nya`)
         fs.unlinkSync(media)
         fs.unlinkSync(ran)
         })
         .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
         .toFormat('webp')
         .save(ran)
         } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         const media = await fdhl.downloadAndSaveMediaMessage(encmedia, './database/media_user')
         ranw = getRandom('.webp')
         ranp = getRandom('.png')
         reply(mess.wait)
         keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
         await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
         fs.unlinkSync(media)
         let buffer = Buffer.from(res.base64img, 'base64')
         fs.writeFileSync(ranp, buffer, (err) => {
         if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
         })
         exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
         fs.unlinkSync(ranp)
         if (err) return reply(mess.error.stick)
         fdhl.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
         fs.unlinkSync(ranw)
         })
         })
         } else {
         reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
         }
         break
     case 'toimg':
         if (!isQuotedSticker) return reply(' reply stickernya gan')
         encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
         media = await fdhl.downloadAndSaveMediaMessage(encmedia, './database/media_user')
         ran = getRandom('.png')
         exec(`ffmpeg -i ${media} ${ran}`, (err) => {
         fs.unlinkSync(media)
         if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
         buffer = fs.readFileSync(ran)
         costum(buffer, image, Verived, `Jangan Lupa donasi`)
         fs.unlinkSync(ran)
         })
         break
     case 'tomp3':
         fdhl.updatePresence(from, Presence.recording)
         if (!isQuotedVideo) return reply('Reply Video nya Tod')
         reply(mess.wait)
         encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
         media = await fdhl.downloadAndSaveMediaMessage(encmedia, './database/media_user')
         ran = getRandom('.mp4')
         exec(`ffmpeg -i ${media} ${ran}`, (err) => {
         fs.unlinkSync(media)
         if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
         bufferlkj = fs.readFileSync(ran)
         fdhl.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
         fs.unlinkSync(ran)
         })
         break
     case 'tovideo':
         if (!isQuotedSticker) return reply('Reply stikernya')
         reply(mess.wait)
         anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
         anum = await fdhl.downloadAndSaveMediaMessage(anumedia, './database/media_user')
         ran = getRandom('.webp')
         exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
         fs.unlinkSync(anum)
         buffer = fs.readFileSync(ran)
         fdhl.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Donasi' })
         fs.unlinkSync(ran)
         })
         break
     case 'donasi':
donasi = `┏━━━━━━━━━━━━━━━━━━━━
┃        DONASI FADHIL
┣━━━━━━━━━━━━━━━━━━━━
┣━⊱❉ *DONASI YOK* ❉⊰━━✿
┃   
┣━⊱ *GOPAY*
┣⊱ 083102650464
┣━⊱ *DANA*
┣⊱ 083102650464
┣━⊱ *PULSA*
┣⊱ 083102650464
┃
┗━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃         DONASI PEBRI
┣━━━━━━━━━━━━━━━━━━━━
┣━⊱❉ *DONASI YOK* ❉⊰━━✿
┃   
┣━⊱ *GOPAY*
┣⊱ 085849261085
┣━⊱ *DANA*
┣⊱ 085849261085
┣━⊱ *PULSA*
┣⊱ 085849261085
┃
┗━━━━━━━━━━━━━━━━━━━

Terimakasih kakak sudah mau donasi, semoga bot ini semakin berkembang ya`
reply(donasi)
break
//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

     case 'owner':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:${ownername}\n`
         + `ORG: Creator ${ownername} ;\n`
         + `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
         + 'END:VCARD'.trim()
         fdhl.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
         { quoted: ftrol, 
         })
         reply('TUHH NOMER OWNER KU')
         break
     case 'bc':
         if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
         if (args.length < 1) return reply('.......')
         anu = await fdhl.chats.all()
         if (isMedia && !mek.message.videoMessage || isQuotedImage) {
         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         bc = await fdhl.downloadMediaMessage(encmedia)
         for (let _ of anu) {
         fdhl.sendMessage(_.jid, bc, image, { caption: `[ Ciko Bot\nIzin Broadcast ]\n\n${body.slice(4)}` })
         }
         reply('Suksess broadcast')
         } else {
         for (let _ of anu) {
         sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
         }
         reply('Suksess broadcast')
         }
         break
     case 'report':
         const pesan = body.slice(8)
         if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
         var nomor = mek.participant
         const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
         var options = {
         text: teks1,
         contextInfo: { mentionedJid: [nomor] },
         }
         fdhl.sendMessage(`6285849261085@s.whatsapp.net`, options, text, { quoted: ftrol })
         reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
         break
     default:
                    /*if (isCmd) {
                        reply(`Sorry bro, command *${prefix}${command}* gk ada di list *${prefix}menu*`)
                    }
                    if (!isGroup && !isCmd && !kuis) {
                        await fdhl.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${apikey}&text=${budy}`)
                        reply(simi.result)*/
     if (isOwner) {
			     if (budy.startsWith('>')) {
				     console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				     try {
					     let evaled = await eval(budy.slice(2))
					     if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					     reply(`${evaled}`)
				     } catch (err) {
					     reply(`${err}`)
				     }
			     } else if (budy.startsWith('x')) {
				     console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				     try {
					     return fdhl.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				     } catch (err) {
					     e = String(err)
					     reply(e)
				     }
			     }
		     }
		     }
	     } catch (e) {
         e = String(e)
         if (!e.includes("this.isZero") && !e.includes("jid")) {
	     console.log('Error : %s', color(e, 'red'))
             }
	     // console.log(e)
	     }
     }


	
    
