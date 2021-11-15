const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./fdhlgrphy.js')
nocache('./fdhlgrphy.js', module => console.log(`${module} has been updated!`))

const starts = async (fdhl = new WAConnection()) => {
         fdhl.version = [2, 2143, 8]
         fdhl.browserDescription = ['CikoBot', 'ZyroBot', '3.0']
         fdhl.logger.level = 'warn'
         console.log(banner)
         fdhl.on('qr', () => {
             console.log(color('[','white'), color('!','red'), color(']','white'), color(' Buruan scan kode QR Nya...!'))
         })
           const sendButImage = async (from, context, fotext, img, but) => {
         gam = img
         jadinya = await fdhl.prepareMessage(from, gam, MessageType.image)
         buttonMessagesI = {
         imageMessage: jadinya.message.imageMessage,
         contentText: context,
         footerText: fotext,
         buttons: but,
         headerType: 4     
         }
         fdhl.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
       }
     
         fs.existsSync('./ciko.json') && fdhl.loadAuthInfo('./ciko.json')
         fdhl.on('connecting', () => {
             start('2', 'Lagi login bosq️')
         })
         fdhl.on('open', () => {
             success('2', 'Sukses login')
         })
         await fdhl.connect({timeoutMs: 30*1000})
             fs.writeFileSync('./ciko.json', JSON.stringify(fdhl.base64EncodedAuthInfo(), null, '\t'))
     
         fdhl.on('chat-update', async (message) => {
             require('./fdhlgrphy.js')(fdhl, message, _welkom)
         })
     fdhl.on("group-participants-update", async (anu) => {
     
         const isWelkom = _welkom.includes(anu.jid)
         try {
           groupMet = await fdhl.groupMetadata(anu.jid)
           groupMembers = groupMet.participants
           groupAdmins = getGroupAdmins(groupMembers)
           mem = anu.participants[0]
     
           console.log(anu)
           try {
             pp_user = await fdhl.getProfilePicture(mem)
           } catch (e) {
             pp_user = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ens1g6uBcHNYS5T3CFEiIKkrN-BT-tVJQw&usqp=CAU"
           }
           try {
             pp_grup = await fdhl.getProfilePicture(anu.jid)
           } catch (e) {
             pp_grup =
               "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
           }
           if (anu.action == "add" && mem.includes(fdhl.user.jid)) {
             fdhl.sendMessage(anu.jid, "Halo!! saya ciko saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik #menu/#help.", "conversation")
           }
           if (!isWelkom) return
           if (anu.action == "add" && !mem.includes(fdhl.user.jid)) {
             mdata = await fdhl.groupMetadata(anu.jid)
             memeg = mdata.participants.length
             num = anu.participants[0]
             let v = fdhl.contacts[num] || { notify: num.replace(/@.+/, "") }
             anu_user = v.vname || v.notify || num.split("@")[0]
             time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
             wel = `Halo @${anu_user} \nWelcome In ${mdata.subject} \nJangan Lupa Mampir\n• Instagram : instagram.com/febzabotz\n• Github : github.com/febzofc`
             buff = await getBuffer(
               `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length
               }&memcount=${memeg}&gcname=${encodeURI(
                 mdata.subject
               )}&pp=${pp_user}&bg=https://www.linkpicture.com/q/20211031_095546.jpg`
             )
     
             but = [
               { buttonId: '#menu', buttonText: { displayText: 'MENU🗂️'}, type: 1 }
             ]
             sendButImage(mdata.id, wel, "CopyRight : FebzKun", buff, but)
           }
                                
           if (!isWelkom) return
           if (anu.action == "remove" && !mem.includes(fdhl.user.jid)) {
             mdata = await fdhl.groupMetadata(anu.jid)
             num = anu.participants[0]
             let w = fdhl.contacts[num] || { notify: num.replace(/@.+/, "") }
             anu_user = w.vname || w.notify || num.split("@")[0]
             time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
             memeg = mdata.participants.length
             out = `Sayonara @${anu_user} Semoga Bahagia di kehidupan barunya`
             buff = await getBuffer(
               `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length
               }&memcount=${memeg}&gcname=${encodeURI(
                 mdata.subject
               )}&pp=${pp_user}&bg=https://www.linkpicture.com/q/20211031_095546.jpg`
             )
     
             but = [
               { buttonId: '#donasi', buttonText: { displayText: 'DONASI😒' }, type: 1 }
             ]
             sendButImage(mdata.id, out, "CopyRight : FebzKun", buff, but)
           }
           if (anu.action == "promote") {
             const mdata = await fdhl.groupMetadata(anu.jid)
             anu_user = fdhl.contacts[mem]
             num = anu.participants[0]
             try {
               ppimg = await fdhl.getProfilePicture(
                 `${anu.participants[0].split("@")[0]}@c.us`
               )
             } catch {
               ppimg =
                 "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
             }
             let buff = await getBuffer(ppimg)
             teks = `@${num.split("@")[0]} Telah dipromote`
             fdhl.sendMessage(mdata.id, teks, MessageType.text)
           }
     
           if (anu.action == "demote") {
             anu_user = fdhl.contacts[mem]
             num = anu.participants[0]
             const mdata = await fdhl.groupMetadata(anu.jid)
             try {
               ppimg = await fdhl.getProfilePicture(
                 `${anu.participants[0].split("@")[0]}@c.us`
               )
             } catch {
               ppimg =
                 "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
             }
     
             let buff = await getBuffer(
               `http://hadi-api.herokuapp.com/api/card/promote?nama=febz&member=222&pesan=demote&pp=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDeiLcXwOHfeH4K6oa3PT3khSkMRUU6YR4g&usqp=CAU&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDeiLcXwOHfeH4K6oa3PT3khSkMRUU6YR4g&usqp=CAU`
             )
             teks = `@${num.split("@")[0]} Telah didemote`
             fdhl.sendMessage(mdata.id, teks, MessageType.text)
           }
         } catch (e) {
           console.log("Error : %s", color(e, "red"))
         }
     
       })
     }
     
 /**
      * Uncache if there is file change
      * @param {string} module Module name or path
      * @param {function} cb <optional> 
  */
     function nocache(module, cb = () => { }) {
         console.log('Module', `'${module}'`, 'Now being watched for changes')
         fs.watchFile(require.resolve(module), async () => {
             await uncache(require.resolve(module))
             cb(module)
         })
     }

/**
      * Uncache a module
      * @param {string} module Module name or path
 */
     function uncache(module = '.') {
         return new Promise((resolve, reject) => {
             try {
                 delete require.cache[require.resolve(module)]
                 resolve()
             } catch (e) {
                 reject(e)
             }
         })
     }
     
 starts()
