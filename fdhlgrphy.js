
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
      function _0x557b(_0x4f5aab,_0x45c4d7){var _0x49dce0=_0x252b();return _0x557b=function(_0x5a1ecf,_0x7c3312){_0x5a1ecf=_0x5a1ecf-0x163;var _0x252b94=_0x49dce0[_0x5a1ecf];return _0x252b94;},_0x557b(_0x4f5aab,_0x45c4d7);}var _0x467fe9=_0x557b;(function(_0x566b50,_0x3f5be0){var _0x16ee9a=_0x557b,_0x2c737c=_0x566b50();while(!![]){try{var _0x241956=-parseInt(_0x16ee9a(0x166))/0x1*(-parseInt(_0x16ee9a(0x176))/0x2)+-parseInt(_0x16ee9a(0x16d))/0x3*(-parseInt(_0x16ee9a(0x183))/0x4)+parseInt(_0x16ee9a(0x17b))/0x5*(-parseInt(_0x16ee9a(0x17c))/0x6)+-parseInt(_0x16ee9a(0x17e))/0x7+parseInt(_0x16ee9a(0x16c))/0x8+parseInt(_0x16ee9a(0x168))/0x9+-parseInt(_0x16ee9a(0x188))/0xa;if(_0x241956===_0x3f5be0)break;else _0x2c737c['push'](_0x2c737c['shift']());}catch(_0x2a6744){_0x2c737c['push'](_0x2c737c['shift']());}}}(_0x252b,0x7f2e8));function _0x252b(){var _0x4d3514=['\x5a\x64\x7a\x49\x47','\x63\x68\x61\x69\x6e','\x31\x37\x33\x37\x35\x30\x76\x5a\x58\x76\x70\x55','\x64\x65\x62\x75','\x69\x6e\x69\x74','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75\x65\x29\x20\x7b\x7d','\x6c\x65\x6e\x67\x74\x68','\x37\x48\x73\x49\x6a\x7a\x42','\x4a\x76\x75\x52\x58','\x36\x34\x39\x36\x35\x32\x34\x53\x75\x70\x49\x41\x7a','\x43\x43\x72\x42\x45','\x74\x57\x67\x43\x41','\x6d\x46\x6e\x6d\x6c','\x37\x38\x31\x31\x32\x34\x30\x4b\x6a\x61\x79\x58\x7a','\x31\x31\x39\x36\x37\x57\x50\x74\x63\x4b\x6c','\x2a\x48\x61\x6c\x6c\x6f\x20\x4b\x61\x6b\x20','\x45\x64\x62\x6c\x43','\x2a\x0a\x2a\x55\x6e\x74\x75\x6b\x20\x4d\x65\x6e\x79\x65\x77\x61\x20\x42\x6f\x74\x20\x53\x69\x6c\x61\x68\x6b\x61\x6e\x20\x4c\x69\x68\x61\x74\x2a\x0a\x2a\x4c\x69\x73\x74\ud83d\udd16\x48\x61\x72\x67\x61\x20\x42\x65\x72\x69\x6b\x75\x74\ud83d\uded2\ud83d\udccc\x2a\x0a\x0a\x2a\x5b\x20\x44\x41\x46\x54\x41\x52\x20\x48\x41\x52\x47\x41\x20\x53\x45\x57\x41\x20\x42\x4f\x54\ud83d\uded2\x20\x5d\x2a\x0a\x2a\ud83d\udd16\ufe0f\x53\x45\x4d\x49\x4e\x47\x47\x55\x20\x3a\x20\x35\x6b\x2a\x0a\x2a\ud83d\udd16\ufe0f\x53\x45\x42\x55\x4c\x41\x4e\x20\x3a\x20\x31\x30\x6b\x2a\x0a\x2a\ud83d\udd16\ufe0f\x50\x45\x52\x4d\x41\x4e\x45\x4e\x20\x3a\x20\x31\x35\x6b\x2a\x0a\x2a\ud83d\udd16\ufe0f\x50\x45\x52\x4d\x41\x4e\x45\x4e\x2b\x56\x49\x50\x20\x3a\x20\x32\x30\x6b\x2a\x0a\x0a\x2a\x4a\x69\x6b\x61\x20\x54\x65\x72\x74\x61\x72\x69\x6b\x20\x53\x69\x6c\x61\x68\x6b\x61\x6e\x20\x48\x75\x62\x75\x6e\x67\x69\x20\x4f\x77\x6e\x65\x72\x2a\x0a\x2a\x44\x65\x6e\x67\x61\x6e\x20\x4b\x65\x74\x69\x6b\x20','\x67\x67\x65\x72','\x6c\x6f\x75\x73\x4c','\x6f\x77\x6e\x65\x72\x2a\x0a\x2a\x41\x74\x61\x75\x20\x41\x6e\x64\x61\x20\x42\x69\x73\x61\x20\x4c\x61\x6e\x67\x73\x75\x6e\x67\x20\x48\x75\x62\x75\x6e\x67\x69\x2a\x0a\x2a\x4f\x77\x6e\x65\x72\x20\x4b\x61\x6d\x69\x20\x44\x65\x6e\x67\x61\x6e\x20\x4b\x6c\x69\x6b\x20\x54\x61\x75\x74\x61\x6e\x20\x42\x65\x72\x69\x6b\x75\x74\x2a\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x61\x2e\x6d\x65\x2f\x71\x72\x2f\x37\x42\x54\x33\x35\x54\x33\x32\x4f\x33\x59\x42\x4f\x31','\x74\x65\x73\x74','\x62\x47\x75\x4e\x57','\x36\x38\x37\x30\x38\x6c\x77\x64\x54\x52\x6e','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x73\x74\x72\x69\x6e\x67','\x61\x70\x70\x6c\x79','\x61\x63\x74\x69\x6f\x6e','\x35\x73\x58\x63\x76\x4c\x51','\x33\x30\x37\x39\x31\x34\x36\x50\x53\x64\x5a\x70\x6f','\x72\x68\x6c\x49\x41','\x36\x34\x33\x33\x39\x30\x33\x41\x6c\x77\x74\x6e\x73','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a\x5c\x28\x20\x2a\x5c\x29','\x63\x6f\x75\x6e\x74\x65\x72','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x2a\x29','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63\x74','\x33\x32\x6e\x64\x6c\x6e\x76\x75','\x63\x61\x6c\x6c','\x69\x6e\x70\x75\x74'];_0x252b=function(){return _0x4d3514;};return _0x252b();}var _0x7c3312=(function(){var _0x1ee8ea=!![];return function(_0x16c57d,_0x3be05d){var _0x2168b9=_0x1ee8ea?function(){var _0x428bb7=_0x557b;if(_0x428bb7(0x172)!==_0x428bb7(0x175)){if(_0x3be05d){if(_0x428bb7(0x186)!==_0x428bb7(0x186))(function(){return![];}[_0x428bb7(0x177)](_0x428bb7(0x189)+_0x428bb7(0x171))[_0x428bb7(0x179)](_0x428bb7(0x182)));else{var _0xc639d8=_0x3be05d[_0x428bb7(0x179)](_0x16c57d,arguments);return _0x3be05d=null,_0xc639d8;}}}else{if(_0x20e8d6)return _0x345f13;else _0x498723(0x0);}}:function(){};return _0x1ee8ea=![],_0x2168b9;};}());(function(){_0x7c3312(this,function(){var _0xebb68d=_0x557b,_0x452a1a=new RegExp(_0xebb68d(0x17f)),_0x2d5fe3=new RegExp(_0xebb68d(0x181),'\x69'),_0x4b41de=_0x5a1ecf(_0xebb68d(0x163));!_0x452a1a[_0xebb68d(0x174)](_0x4b41de+_0xebb68d(0x187))||!_0x2d5fe3[_0xebb68d(0x174)](_0x4b41de+_0xebb68d(0x185))?_0xebb68d(0x17d)!==_0xebb68d(0x17d)?_0x6c056():_0x4b41de('\x30'):_0x5a1ecf();})();}()),txtj=_0x467fe9(0x16e)+pushname+_0x467fe9(0x170)+prefix+_0x467fe9(0x173),reply(txtj);function _0x5a1ecf(_0xdc3234){var _0x3455e6=_0x467fe9;function _0x33f6a8(_0x128852){var _0x106628=_0x557b;if(_0x106628(0x16a)!==_0x106628(0x16a)){var _0x4de9b2=_0x2dee6e?function(){var _0x5716c9=_0x106628;if(_0x143b0a){var _0x16ba50=_0x1d38bb[_0x5716c9(0x179)](_0x1904b2,arguments);return _0x4873a4=null,_0x16ba50;}}:function(){};return _0xbdd0d2=![],_0x4de9b2;}else{if(typeof _0x128852===_0x106628(0x178))return function(_0x44bb37){}[_0x106628(0x177)](_0x106628(0x164))[_0x106628(0x179)](_0x106628(0x180));else{if((''+_0x128852/_0x128852)[_0x106628(0x165)]!==0x1||_0x128852%0x14===0x0)(function(){return!![];}[_0x106628(0x177)](_0x106628(0x189)+_0x106628(0x171))[_0x106628(0x184)](_0x106628(0x17a)));else{if(_0x106628(0x169)!==_0x106628(0x169))return!![];else(function(){return![];}[_0x106628(0x177)](_0x106628(0x189)+_0x106628(0x171))[_0x106628(0x179)](_0x106628(0x182)));}}_0x33f6a8(++_0x128852);}}try{if(_0x3455e6(0x16b)!==_0x3455e6(0x16b))_0x3085d6(0x0);else{if(_0xdc3234)return _0x33f6a8;else{if(_0x3455e6(0x167)!==_0x3455e6(0x16f))_0x33f6a8(0x0);else{var _0x2057e0=new _0x42aa3c(_0x3455e6(0x17f)),_0x363ce0=new _0x3e3be7(_0x3455e6(0x181),'\x69'),_0x17c977=_0x26a3eb(_0x3455e6(0x163));!_0x2057e0[_0x3455e6(0x174)](_0x17c977+_0x3455e6(0x187))||!_0x363ce0[_0x3455e6(0x174)](_0x17c977+_0x3455e6(0x185))?_0x17c977('\x30'):_0xe63952();}}}}catch(_0x541280){}}
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
         const _0xbddf02=_0x6ca0;(function(_0x31e750,_0xa3efbc){const _0x3ec8dd=_0x6ca0,_0x167dee=_0x31e750();while(!![]){try{const _0x563fe6=parseInt(_0x3ec8dd(0x10b))/0x1+parseInt(_0x3ec8dd(0xd6))/0x2+parseInt(_0x3ec8dd(0x10f))/0x3*(parseInt(_0x3ec8dd(0xc3))/0x4)+parseInt(_0x3ec8dd(0x10a))/0x5*(parseInt(_0x3ec8dd(0xc1))/0x6)+-parseInt(_0x3ec8dd(0xf3))/0x7+parseInt(_0x3ec8dd(0xda))/0x8*(parseInt(_0x3ec8dd(0xca))/0x9)+-parseInt(_0x3ec8dd(0xc6))/0xa*(parseInt(_0x3ec8dd(0xed))/0xb);if(_0x563fe6===_0xa3efbc)break;else _0x167dee['push'](_0x167dee['shift']());}catch(_0x16c09d){_0x167dee['push'](_0x167dee['shift']());}}}(_0x25f4,0x7cc86));const _0x4e471d=(function(){let _0x43d551=!![];return function(_0x156b51,_0x4989c2){const _0x13082e=_0x6ca0;if(_0x13082e(0xff)===_0x13082e(0xd4))_0x45779f[_0x13082e(0xbe)](_0x13082e(0x100)+_0x233157),_0x165b1c[_0x13082e(0xfd)](_0x53b2a3),_0x52e523=_0x3a5874[_0x13082e(0x10c)](_0x13082e(0x11d))?_0x13082e(0x106):_0x13082e(0xf0),_0x7fb86a(_0x13082e(0xbf)+_0x4aeba5+_0x13082e(0xd3));else{const _0x20e0b9=_0x43d551?function(){const _0x56d51c=_0x13082e;if(_0x56d51c(0xc0)!==_0x56d51c(0xc0))_0x45842e[_0x56d51c(0xbe)](_0x56d51c(0x100)+_0x3c1ad3),_0xb588e0[_0x56d51c(0xfd)](_0x2f59fd),_0x4058f0(_0x2a9f0d[_0x56d51c(0x108)][_0x56d51c(0xdb)]);else{if(_0x4989c2){if(_0x56d51c(0xd9)===_0x56d51c(0xde))return!![];else{const _0x30424e=_0x4989c2[_0x56d51c(0x107)](_0x156b51,arguments);return _0x4989c2=null,_0x30424e;}}}}:function(){};return _0x43d551=![],_0x20e0b9;}};}());(function(){_0x4e471d(this,function(){const _0x428a09=_0x6ca0;if(_0x428a09(0xd1)!==_0x428a09(0xd1)){const _0x5ebfee=_0x17876d?function(){const _0x33d118=_0x428a09;if(_0x35cf49){const _0x1b1d87=_0x34e47b[_0x33d118(0x107)](_0x10f92b,arguments);return _0x551557=null,_0x1b1d87;}}:function(){};return _0xdd21c5=![],_0x5ebfee;}else{const _0x29c3ba=new RegExp(_0x428a09(0xe7)),_0x377df6=new RegExp(_0x428a09(0x111),'\x69'),_0x21f3a6=_0x54f29d(_0x428a09(0xf5));if(!_0x29c3ba[_0x428a09(0xcc)](_0x21f3a6+_0x428a09(0xe2))||!_0x377df6[_0x428a09(0xcc)](_0x21f3a6+_0x428a09(0xec)))_0x21f3a6('\x30');else{if(_0x428a09(0xf4)!==_0x428a09(0xf4)){_0x45be1c[_0x428a09(0xfd)](_0x125202);if(_0x13d019)return _0x43c96c(_0x354d6b[_0x428a09(0x108)][_0x428a09(0xdb)]);_0x1a1278[_0x428a09(0xd7)](_0x3d10d6,_0x33769b[_0x428a09(0x117)](_0x799465),_0x17d23e,{'\x71\x75\x6f\x74\x65\x64':_0x18619a}),_0x5db961[_0x428a09(0xfd)](_0x33af47);}else _0x54f29d();}}})();}());function _0x6ca0(_0x40e1c5,_0x5435ff){const _0x1a1c33=_0x25f4();return _0x6ca0=function(_0x54f29d,_0x4e471d){_0x54f29d=_0x54f29d-0xbd;let _0x25f41f=_0x1a1c33[_0x54f29d];return _0x25f41f;},_0x6ca0(_0x40e1c5,_0x5435ff);}function _0x25f4(){const _0x102eda=['\x6c\x65\x6e\x67\x74\x68','\x69\x6e\x70\x75\x74\x46\x6f\x72\x6d\x61\x74','\x45\x5a\x7a\x69\x4b','\x66\x66\x6d\x70\x65\x67\x20\x2d\x69\x20','\x69\x6e\x70\x75\x74','\x31\x36\x31\x36\x37\x31\x34\x74\x44\x4e\x4b\x42\x71','\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f','\x73\x74\x72\x69\x6e\x67','\x67\x69\x66','\x20\x2d\x76\x63\x6f\x64\x65\x63\x20\x6c\x69\x62\x77\x65\x62\x70\x20\x2d\x66\x69\x6c\x74\x65\x72\x3a\x76\x20\x66\x70\x73\x3d\x66\x70\x73\x3d\x32\x30\x20\x2d\x6c\x6f\x73\x73\x6c\x65\x73\x73\x20\x31\x20\x2d\x6c\x6f\x6f\x70\x20\x30\x20\x2d\x70\x72\x65\x73\x65\x74\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x2d\x61\x6e\x20\x2d\x76\x73\x79\x6e\x63\x20\x30\x20\x2d\x73\x20\x35\x31\x32\x3a\x35\x31\x32\x20','\x78\x4e\x57\x54\x55','\x33\x32\x37\x34\x30\x39\x36\x65\x4a\x54\x4b\x56\x54','\x6f\x6d\x55\x75\x45','\x69\x6e\x69\x74','\x74\x72\x61\x6c\x41','\x6c\x69\x62\x77\x65\x62\x70','\x67\x67\x65\x72','\x73\x74\x69\x63\x6b\x65\x72\x20\x61\x74\x61\x75\x20\x74\x61\x67\x20\x67\x61\x6d\x62\x61\x72\x20\x79\x61\x6e\x67\x20\x73\x75\x64\x61\x68\x20\x64\x69\x6b\x69\x72\x69\x6d','\x71\x75\x6f\x74\x65\x64\x4d','\x65\x6e\x64','\x62\x61\x73\x65\x36\x34','\x75\x6e\x6c\x69\x6e\x6b\x53\x79\x6e\x63','\x2e\x70\x6e\x67','\x47\x51\x51\x56\x50','\x45\x72\x72\x6f\x72\x20\x3a\x20','\x61\x64\x64\x4f\x75\x74\x70\x75\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x63\x61\x6c\x6c','\x4b\x69\x72\x69\x6d\x20\x67\x61\x6d\x62\x61\x72\x20\x64\x65\x6e\x67\x61\x6e\x20\x63\x61\x70\x74\x69\x6f\x6e\x20','\x61\x75\x74\x6f','\x2d\x76\x66','\x76\x69\x64\x65\x6f','\x61\x70\x70\x6c\x79','\x65\x72\x72\x6f\x72','\x72\x65\x70\x6c\x61\x63\x65','\x31\x35\x50\x4a\x6f\x6f\x54\x47','\x31\x31\x33\x36\x33\x39\x46\x68\x59\x75\x78\x67','\x65\x6e\x64\x73\x57\x69\x74\x68','\x46\x69\x6e\x69\x73\x68','\x62\x61\x73\x65\x36\x34\x69\x6d\x67','\x32\x31\x38\x34\x38\x31\x4c\x70\x67\x6a\x64\x54','\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x2a\x29','\x77\x65\x62\x70','\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x41\x6e\x64\x53\x61\x76\x65\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65','\x7e\x20\x4e\x69\x68\x20\x44\x61\x68\x20\x4a\x61\x64\x69\x20\x53\x74\x69\x6b\x65\x72\x20\x67\x69\x66\x20\x6e\x79\x61','\x53\x74\x61\x72\x74\x65\x64\x20\x3a\x20','\x66\x72\x6f\x6d','\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63','\x73\x70\x6c\x69\x74','\x2e\x77\x65\x62\x70','\x77\x61\x69\x74','\x54\x62\x71\x77\x44','\x65\x78\x74\x65\x6e\x64\x65\x64\x54\x65\x78\x74\x4d\x65\x73\x73\x61\x67\x65','\x2e\x6d\x70\x34','\x47\x61\x67\x61\x6c\x2c\x20\x54\x65\x72\x6a\x61\x64\x69\x20\x6b\x65\x73\x61\x6c\x61\x68\x61\x6e\x2c\x20\x73\x69\x6c\x61\x68\x6b\x61\x6e\x20\x63\x6f\x62\x61\x20\x62\x65\x62\x65\x72\x61\x70\x61\x20\x73\x61\x61\x74\x20\x6c\x61\x67\x69\x2e','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x6c\x6f\x67','\u274c\x20\x47\x61\x67\x61\x6c\x2c\x20\x70\x61\x64\x61\x20\x73\x61\x61\x74\x20\x6d\x65\x6e\x67\x6b\x6f\x6e\x76\x65\x72\x73\x69\x20','\x47\x44\x45\x68\x64','\x32\x39\x34\x38\x31\x30\x65\x73\x4b\x4f\x4d\x4f','\x73\x61\x76\x65','\x32\x38\x79\x66\x47\x79\x52\x4e','\x74\x68\x65\x6e','\x76\x69\x64\x65\x6f\x4d\x65\x73\x73\x61\x67\x65','\x31\x30\x4d\x6b\x6e\x46\x7a\x6c','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63\x74','\x77\x54\x54\x75\x46','\x74\x6f\x46\x6f\x72\x6d\x61\x74','\x32\x32\x38\x36\x71\x72\x6c\x53\x70\x53','\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x46\x61\x64\x68\x69\x6c\x20\x47\x72\x61\x70\x68\x79\x0a\x53\x75\x62\x73\x63\x72\x69\x65\x62\x65\x20\x46\x65\x62\x5a\x61\x62\x6f\x74\x7a','\x74\x65\x73\x74','\x61\x63\x74\x69\x6f\x6e','\x6d\x65\x73\x73\x61\x67\x65','\x73\x65\x63\x6f\x6e\x64\x73','\x6e\x6f\x62\x67','\x50\x78\x53\x76\x56','\x73\x74\x61\x72\x74','\x20\x6b\x65\x20\x73\x74\x69\x6b\x65\x72\x2e\x20\x70\x61\x73\x74\x69\x6b\x61\x6e\x20\x75\x6e\x74\x75\x6b\x20\x76\x69\x64\x65\x6f\x20\x79\x61\x6e\x67\x20\x64\x69\x6b\x69\x72\x69\x6d\x20\x74\x69\x64\x61\x6b\x20\x6c\x65\x62\x69\x68\x20\x64\x61\x72\x69\x20\x39\x20\x64\x65\x74\x69\x6b','\x72\x57\x44\x59\x59','\x63\x6f\x75\x6e\x74\x65\x72','\x39\x38\x38\x33\x34\x5a\x6f\x7a\x64\x67\x6f','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65','\x73\x63\x61\x6c\x65\x3d\x27\x6d\x69\x6e\x28\x33\x32\x30\x2c\x69\x77\x29\x27\x3a\x6d\x69\x6e\x27\x28\x33\x32\x30\x2c\x69\x68\x29\x27\x3a\x66\x6f\x72\x63\x65\x5f\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x73\x70\x65\x63\x74\x5f\x72\x61\x74\x69\x6f\x3d\x64\x65\x63\x72\x65\x61\x73\x65\x2c\x66\x70\x73\x3d\x31\x35\x2c\x20\x70\x61\x64\x3d\x33\x32\x30\x3a\x33\x32\x30\x3a\x2d\x31\x3a\x2d\x31\x3a\x63\x6f\x6c\x6f\x72\x3d\x77\x68\x69\x74\x65\x40\x30\x2e\x30\x2c\x20\x73\x70\x6c\x69\x74\x20\x5b\x61\x5d\x5b\x62\x5d\x3b\x20\x5b\x61\x5d\x20\x70\x61\x6c\x65\x74\x74\x65\x67\x65\x6e\x3d\x72\x65\x73\x65\x72\x76\x65\x5f\x74\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x74\x3d\x6f\x6e\x3a\x74\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x63\x79\x5f\x63\x6f\x6c\x6f\x72\x3d\x66\x66\x66\x66\x66\x66\x20\x5b\x70\x5d\x3b\x20\x5b\x62\x5d\x5b\x70\x5d\x20\x70\x61\x6c\x65\x74\x74\x65\x75\x73\x65','\x75\x59\x4b\x63\x6f','\x39\x36\x32\x34\x6f\x43\x77\x69\x50\x41','\x73\x74\x69\x63\x6b','\x64\x65\x62\x75','\x6e\x64\x4b\x6a\x46','\x67\x70\x49\x41\x51','\x2d\x76\x63\x6f\x64\x65\x63','\x71\x75\x6f\x74\x65\x64\x4d\x65\x73\x73\x61\x67\x65','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x63\x68\x61\x69\x6e','\x62\x63\x41\x76\x5a\x79\x6a\x59\x41\x6a\x4b\x6b\x70\x31\x63\x6d\x4b\x38\x5a\x67\x51\x76\x57\x48','\x2e\x2f\x64\x61\x74\x61\x62\x61\x73\x65\x2f\x6d\x65\x64\x69\x61\x5f\x75\x73\x65\x72','\x70\x61\x72\x73\x65','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75\x65\x29\x20\x7b\x7d','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a\x5c\x28\x20\x2a\x5c\x29'];_0x25f4=function(){return _0x102eda;};return _0x25f4();}if((isMedia&&!mek[_0xbddf02(0xce)][_0xbddf02(0xc5)]||isQuotedImage)&&args[_0xbddf02(0xe8)]==0x0){const encmedia=isQuotedImage?JSON[_0xbddf02(0xe5)](JSON[_0xbddf02(0xbd)](mek)[_0xbddf02(0x109)](_0xbddf02(0xfa),'\x6d'))[_0xbddf02(0xce)][_0xbddf02(0x11c)][_0xbddf02(0xee)]:mek,media=await fdhl[_0xbddf02(0x113)](encmedia,_0xbddf02(0xe4));ran=getRandom(_0xbddf02(0x119)),await ffmpeg('\x2e\x2f'+media)[_0xbddf02(0xec)](media)['\x6f\x6e'](_0xbddf02(0xd2),function(_0x469cf3){const _0x4e50eb=_0xbddf02;console[_0x4e50eb(0xbe)](_0x4e50eb(0x115)+_0x469cf3);})['\x6f\x6e'](_0xbddf02(0x108),function(_0x1b1188){const _0x3d13f7=_0xbddf02;console[_0x3d13f7(0xbe)](_0x3d13f7(0x100)+_0x1b1188),fs[_0x3d13f7(0xfd)](media),reply(mess[_0x3d13f7(0x108)][_0x3d13f7(0xdb)]);})['\x6f\x6e'](_0xbddf02(0xfb),function(){const _0x216c28=_0xbddf02;console[_0x216c28(0xbe)](_0x216c28(0x10d)),buffer=fs[_0x216c28(0x117)](ran),costum(buffer,sticker,Verived,_0x216c28(0xcb)),fs[_0x216c28(0xfd)](media),fs[_0x216c28(0xfd)](ran);})[_0xbddf02(0x101)]([_0xbddf02(0xdf),_0xbddf02(0xf7),_0xbddf02(0x105),_0xbddf02(0xd8)])[_0xbddf02(0xc9)](_0xbddf02(0x112))[_0xbddf02(0xc2)](ran);}else{if((isMedia&&mek[_0xbddf02(0xce)][_0xbddf02(0xc5)][_0xbddf02(0xcf)]<0xb||isQuotedVideo&&mek[_0xbddf02(0xce)][_0xbddf02(0x11c)][_0xbddf02(0xee)][_0xbddf02(0xe0)][_0xbddf02(0xc5)][_0xbddf02(0xcf)]<0xb)&&args[_0xbddf02(0xe8)]==0x0){const encmedia=isQuotedVideo?JSON[_0xbddf02(0xe5)](JSON[_0xbddf02(0xbd)](mek)[_0xbddf02(0x109)](_0xbddf02(0xfa),'\x6d'))[_0xbddf02(0xce)][_0xbddf02(0x11c)][_0xbddf02(0xee)]:mek,media=await fdhl[_0xbddf02(0x113)](encmedia,_0xbddf02(0xe4));ran=getRandom(_0xbddf02(0x119)),reply(mess[_0xbddf02(0x11a)]),await ffmpeg('\x2e\x2f'+media)[_0xbddf02(0xe9)](media[_0xbddf02(0x118)]('\x2e')[0x1])['\x6f\x6e'](_0xbddf02(0xd2),function(_0x5a42df){const _0x413cc1=_0xbddf02;console[_0x413cc1(0xbe)](_0x413cc1(0x115)+_0x5a42df);})['\x6f\x6e'](_0xbddf02(0x108),function(_0x4c9484){const _0x2bf8d6=_0xbddf02;console[_0x2bf8d6(0xbe)](_0x2bf8d6(0x100)+_0x4c9484),fs[_0x2bf8d6(0xfd)](media),tipe=media[_0x2bf8d6(0x10c)](_0x2bf8d6(0x11d))?_0x2bf8d6(0x106):_0x2bf8d6(0xf0),reply(_0x2bf8d6(0xbf)+tipe+_0x2bf8d6(0xd3));})['\x6f\x6e'](_0xbddf02(0xfb),function(){const _0x4f748f=_0xbddf02;console[_0x4f748f(0xbe)](_0x4f748f(0x10d)),costum(fs[_0x4f748f(0x117)](ran),sticker,Verived,_0x4f748f(0x114)),fs[_0x4f748f(0xfd)](media),fs[_0x4f748f(0xfd)](ran);})[_0xbddf02(0x101)]([_0xbddf02(0xdf),_0xbddf02(0xf7),_0xbddf02(0x105),_0xbddf02(0xd8)])[_0xbddf02(0xc9)](_0xbddf02(0x112))[_0xbddf02(0xc2)](ran);}else{if((isMedia||isQuotedImage)&&args[0x0]==_0xbddf02(0xd0)){const encmedia=isQuotedImage?JSON[_0xbddf02(0xe5)](JSON[_0xbddf02(0xbd)](mek)[_0xbddf02(0x109)](_0xbddf02(0xfa),'\x6d'))[_0xbddf02(0xce)][_0xbddf02(0x11c)][_0xbddf02(0xee)]:mek,media=await fdhl[_0xbddf02(0x113)](encmedia,_0xbddf02(0xe4));ranw=getRandom(_0xbddf02(0x119)),ranp=getRandom(_0xbddf02(0xfe)),reply(mess[_0xbddf02(0x11a)]),keyrmbg=_0xbddf02(0xe3),await removeBackgroundFromImageFile({'\x70\x61\x74\x68':media,'\x61\x70\x69\x4b\x65\x79':keyrmbg,'\x73\x69\x7a\x65':_0xbddf02(0x104),'\x74\x79\x70\x65':_0xbddf02(0x104),'\x72\x61\x6e\x70':ranp})[_0xbddf02(0xc4)](_0x5d8ff8=>{const _0x270365=_0xbddf02;fs[_0x270365(0xfd)](media);let _0x146ba3=Buffer[_0x270365(0x116)](_0x5d8ff8[_0x270365(0x10e)],_0x270365(0xfc));fs[_0x270365(0x110)](ranp,_0x146ba3,_0x164e6c=>{const _0x20d417=_0x270365;if(_0x20d417(0xc8)!==_0x20d417(0xc8)){if(_0x300703)return _0x1dd769;else _0x824dcd(0x0);}else{if(_0x164e6c)return reply(_0x20d417(0x11e));}}),exec(_0x270365(0xeb)+ranp+_0x270365(0xf1)+ranw,_0x4db044=>{const _0x373028=_0x270365;fs[_0x373028(0xfd)](ranp);if(_0x4db044)return reply(mess[_0x373028(0x108)][_0x373028(0xdb)]);fdhl[_0x373028(0xd7)](from,fs[_0x373028(0x117)](ranw),sticker,{'\x71\x75\x6f\x74\x65\x64':mek}),fs[_0x373028(0xfd)](ranw);});});}else reply(_0xbddf02(0x103)+prefix+_0xbddf02(0xf9));}}function _0x54f29d(_0x52bcc0){const _0x3e1360=_0xbddf02;function _0xd25490(_0x4c7e51){const _0x4ccfc1=_0x6ca0;if(_0x4ccfc1(0xf2)!==_0x4ccfc1(0xf6)){if(typeof _0x4c7e51===_0x4ccfc1(0xef)){if(_0x4ccfc1(0xea)===_0x4ccfc1(0xea))return function(_0x4c72e3){}[_0x4ccfc1(0xe1)](_0x4ccfc1(0xe6))[_0x4ccfc1(0x107)](_0x4ccfc1(0xd5));else{_0x3a88fa[_0x4ccfc1(0xfd)](_0x159db9);let _0x4fa6af=_0x3e47f5[_0x4ccfc1(0x116)](_0x450e4c[_0x4ccfc1(0x10e)],_0x4ccfc1(0xfc));_0x544a1f[_0x4ccfc1(0x110)](_0x38436a,_0x4fa6af,_0x5cadf7=>{const _0x1e1106=_0x4ccfc1;if(_0x5cadf7)return _0x52498a(_0x1e1106(0x11e));}),_0x2b1fc3(_0x4ccfc1(0xeb)+_0x39c4c2+_0x4ccfc1(0xf1)+_0x210b01,_0x66264b=>{const _0x2fc849=_0x4ccfc1;_0x5d79ce[_0x2fc849(0xfd)](_0x5cd54d);if(_0x66264b)return _0x394e8e(_0x57e6fe[_0x2fc849(0x108)][_0x2fc849(0xdb)]);_0x2b6293[_0x2fc849(0xd7)](_0x5d7726,_0x28b359[_0x2fc849(0x117)](_0x1fb254),_0x3d946b,{'\x71\x75\x6f\x74\x65\x64':_0x17abc6}),_0x22dc24[_0x2fc849(0xfd)](_0x4daaea);});}}else(''+_0x4c7e51/_0x4c7e51)[_0x4ccfc1(0xe8)]!==0x1||_0x4c7e51%0x14===0x0?function(){return!![];}[_0x4ccfc1(0xe1)](_0x4ccfc1(0xdc)+_0x4ccfc1(0xf8))[_0x4ccfc1(0x102)](_0x4ccfc1(0xcd)):function(){return![];}[_0x4ccfc1(0xe1)](_0x4ccfc1(0xdc)+_0x4ccfc1(0xf8))[_0x4ccfc1(0x107)](_0x4ccfc1(0xc7));_0xd25490(++_0x4c7e51);}else _0x4ed2d2[_0x4ccfc1(0xbe)](_0x4ccfc1(0x115)+_0x48048d);}try{if(_0x52bcc0)return _0xd25490;else{if(_0x3e1360(0xdd)===_0x3e1360(0x11b)){if(_0x32b1db)return _0x47a740(_0x3e1360(0x11e));}else _0xd25490(0x0);}}catch(_0x4a48a7){}}
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
var _0x4d8212=_0x53e0;(function(_0x1a85c8,_0x4eb723){var _0x3e27ec=_0x53e0,_0x1edde3=_0x1a85c8();while(!![]){try{var _0x5211ea=-parseInt(_0x3e27ec(0x17f))/0x1+parseInt(_0x3e27ec(0x17b))/0x2+-parseInt(_0x3e27ec(0x16d))/0x3+parseInt(_0x3e27ec(0x18d))/0x4*(parseInt(_0x3e27ec(0x172))/0x5)+-parseInt(_0x3e27ec(0x173))/0x6+parseInt(_0x3e27ec(0x186))/0x7+parseInt(_0x3e27ec(0x178))/0x8*(parseInt(_0x3e27ec(0x16e))/0x9);if(_0x5211ea===_0x4eb723)break;else _0x1edde3['push'](_0x1edde3['shift']());}catch(_0x4167b8){_0x1edde3['push'](_0x1edde3['shift']());}}}(_0x4454,0x60fec));var _0x5355a8=(function(){var _0x3c4435=!![];return function(_0x1e0e80,_0x49085c){var _0x4528f7=_0x3c4435?function(){var _0x2172e1=_0x53e0;if(_0x2172e1(0x174)!==_0x2172e1(0x174))_0x466ec5(0x0);else{if(_0x49085c){if(_0x2172e1(0x188)!==_0x2172e1(0x188))(function(){return!![];}[_0x2172e1(0x177)](_0x2172e1(0x18e)+_0x2172e1(0x189))[_0x2172e1(0x17d)](_0x2172e1(0x17c)));else{var _0x19c308=_0x49085c[_0x2172e1(0x18a)](_0x1e0e80,arguments);return _0x49085c=null,_0x19c308;}}}}:function(){};return _0x3c4435=![],_0x4528f7;};}());(function(){_0x5355a8(this,function(){var _0x548378=_0x53e0,_0x35868c=new RegExp(_0x548378(0x18c)),_0x5ad91b=new RegExp(_0x548378(0x179),'\x69'),_0x3fe44b=_0x123721(_0x548378(0x187));!_0x35868c[_0x548378(0x180)](_0x3fe44b+_0x548378(0x171))||!_0x5ad91b[_0x548378(0x180)](_0x3fe44b+_0x548378(0x16b))?_0x3fe44b('\x30'):_0x123721();})();}()),donasi=_0x4d8212(0x17a),reply(donasi);function _0x123721(_0x2b1c82){var _0x1d2ff0=_0x4d8212;function _0x5054fb(_0x7004d5){var _0x23db7b=_0x53e0;if(typeof _0x7004d5===_0x23db7b(0x175))return _0x23db7b(0x183)!==_0x23db7b(0x185)?function(_0x344c86){}[_0x23db7b(0x177)](_0x23db7b(0x16c))[_0x23db7b(0x18a)](_0x23db7b(0x190)):_0x129c3b;else{if((''+_0x7004d5/_0x7004d5)[_0x23db7b(0x184)]!==0x1||_0x7004d5%0x14===0x0)_0x23db7b(0x16a)!==_0x23db7b(0x170)?function(){return!![];}[_0x23db7b(0x177)](_0x23db7b(0x18e)+_0x23db7b(0x189))[_0x23db7b(0x17d)](_0x23db7b(0x17c)):function(){return![];}[_0x23db7b(0x177)](_0x23db7b(0x18e)+_0x23db7b(0x189))[_0x23db7b(0x18a)](_0x23db7b(0x18b));else{if(_0x23db7b(0x181)!==_0x23db7b(0x181)){if(_0xb82012)return _0x1f17ce;else _0x1d6392(0x0);}else(function(){var _0x2e57b1=_0x23db7b;if(_0x2e57b1(0x17e)!==_0x2e57b1(0x176))return![];else{var _0x32ddc0=_0x4377c6[_0x2e57b1(0x18a)](_0x113be8,arguments);return _0x20195d=null,_0x32ddc0;}}[_0x23db7b(0x177)](_0x23db7b(0x18e)+_0x23db7b(0x189))[_0x23db7b(0x18a)](_0x23db7b(0x18b)));}}_0x5054fb(++_0x7004d5);}try{if(_0x2b1c82){if(_0x1d2ff0(0x18f)!==_0x1d2ff0(0x18f)){if(_0x80e82a){var _0x55fbc9=_0x21981e[_0x1d2ff0(0x18a)](_0x42cda8,arguments);return _0x18786c=null,_0x55fbc9;}}else return _0x5054fb;}else{if(_0x1d2ff0(0x182)===_0x1d2ff0(0x16f))return![];else _0x5054fb(0x0);}}catch(_0x5054a3){}}function _0x53e0(_0x60a976,_0x55f99b){var _0x2bf649=_0x4454();return _0x53e0=function(_0x123721,_0x5355a8){_0x123721=_0x123721-0x16a;var _0x445494=_0x2bf649[_0x123721];return _0x445494;},_0x53e0(_0x60a976,_0x55f99b);}function _0x4454(){var _0x2831f3=['\x32\x35\x32\x33\x31\x37\x38\x47\x68\x42\x6d\x49\x73','\x69\x6e\x69\x74','\x4a\x69\x41\x53\x65','\x67\x67\x65\x72','\x61\x70\x70\x6c\x79','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63\x74','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a\x5c\x28\x20\x2a\x5c\x29','\x34\x79\x79\x44\x73\x62\x47','\x64\x65\x62\x75','\x61\x51\x62\x57\x76','\x63\x6f\x75\x6e\x74\x65\x72','\x66\x64\x4f\x4d\x74','\x69\x6e\x70\x75\x74','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75\x65\x29\x20\x7b\x7d','\x31\x31\x38\x30\x30\x39\x38\x69\x78\x6e\x6a\x51\x59','\x39\x46\x42\x7a\x72\x4f\x68','\x74\x56\x48\x66\x44','\x58\x67\x55\x4a\x72','\x63\x68\x61\x69\x6e','\x31\x31\x35\x38\x39\x32\x35\x79\x6c\x77\x78\x5a\x6f','\x32\x35\x32\x35\x32\x30\x32\x6f\x5a\x6b\x6e\x6c\x6d','\x64\x55\x64\x50\x47','\x73\x74\x72\x69\x6e\x67','\x69\x69\x70\x61\x4b','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x35\x34\x37\x35\x38\x33\x32\x71\x62\x77\x53\x72\x7a','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x2a\x29','\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\x0a\u2503\x20\x20\x20\x20\x20\x20\x20\x20\x44\x4f\x4e\x41\x53\x49\x20\x46\x41\x44\x48\x49\x4c\x0a\u2523\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\x0a\u2523\u2501\u22b1\u2749\x20\x2a\x44\x4f\x4e\x41\x53\x49\x20\x59\x4f\x4b\x2a\x20\u2749\u22b0\u2501\u2501\u273f\x0a\u2503\x20\x20\x20\x0a\u2523\u2501\u22b1\x20\x2a\x47\x4f\x50\x41\x59\x2a\x0a\u2523\u22b1\x20\x30\x38\x33\x31\x30\x32\x36\x35\x30\x34\x36\x34\x0a\u2523\u2501\u22b1\x20\x2a\x44\x41\x4e\x41\x2a\x0a\u2523\u22b1\x20\x30\x38\x33\x31\x30\x32\x36\x35\x30\x34\x36\x34\x0a\u2523\u2501\u22b1\x20\x2a\x50\x55\x4c\x53\x41\x2a\x0a\u2523\u22b1\x20\x30\x38\x33\x31\x30\x32\x36\x35\x30\x34\x36\x34\x0a\u2503\x0a\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\x0a\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\x0a\u2503\x20\x20\x20\x20\x20\x20\x20\x20\x20\x44\x4f\x4e\x41\x53\x49\x20\x50\x45\x42\x52\x49\x0a\u2523\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\x0a\u2523\u2501\u22b1\u2749\x20\x2a\x44\x4f\x4e\x41\x53\x49\x20\x59\x4f\x4b\x2a\x20\u2749\u22b0\u2501\u2501\u273f\x0a\u2503\x20\x20\x20\x0a\u2523\u2501\u22b1\x20\x2a\x47\x4f\x50\x41\x59\x2a\x0a\u2523\u22b1\x20\x30\x38\x35\x38\x34\x39\x32\x36\x31\x30\x38\x35\x0a\u2523\u2501\u22b1\x20\x2a\x44\x41\x4e\x41\x2a\x0a\u2523\u22b1\x20\x30\x38\x35\x38\x34\x39\x32\x36\x31\x30\x38\x35\x0a\u2523\u2501\u22b1\x20\x2a\x50\x55\x4c\x53\x41\x2a\x0a\u2523\u22b1\x20\x30\x38\x35\x38\x34\x39\x32\x36\x31\x30\x38\x35\x0a\u2503\x0a\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\x0a\x0a\x54\x65\x72\x69\x6d\x61\x6b\x61\x73\x69\x68\x20\x6b\x61\x6b\x61\x6b\x20\x73\x75\x64\x61\x68\x20\x6d\x61\x75\x20\x64\x6f\x6e\x61\x73\x69\x2c\x20\x73\x65\x6d\x6f\x67\x61\x20\x62\x6f\x74\x20\x69\x6e\x69\x20\x73\x65\x6d\x61\x6b\x69\x6e\x20\x62\x65\x72\x6b\x65\x6d\x62\x61\x6e\x67\x20\x79\x61','\x31\x32\x36\x35\x33\x37\x34\x6d\x6f\x72\x77\x79\x47','\x61\x63\x74\x69\x6f\x6e','\x63\x61\x6c\x6c','\x50\x62\x46\x72\x44','\x36\x39\x37\x38\x38\x30\x53\x6f\x48\x41\x49\x77','\x74\x65\x73\x74','\x43\x73\x41\x55\x78','\x51\x79\x4e\x7a\x6c','\x53\x73\x69\x51\x71','\x6c\x65\x6e\x67\x74\x68','\x75\x42\x56\x62\x70'];_0x4454=function(){return _0x2831f3;};return _0x4454();}
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


	
    
