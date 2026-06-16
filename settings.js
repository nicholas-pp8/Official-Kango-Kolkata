//-----------------------[ BOT SETTINGS ]-----------------------//
//
// @project_name : KANGO-XMD
// @author : Rohan Sharma
// @telegram : [TUMHARA_TELEGRAM_LINK_YA_USERNAME]
// @github : [TUMHARA_GITHUB_USERNAME]
// @whatsapp : [TUMHARA_WHATSAPP_NUMBER_WITH_COUNTRY_CODE]

//-----------------------[ KANGO-XMD ]-----------------------//
//----//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//-----------------------[ SESSION ID ]-----------------------//
//---//

global.SESSION_ID = process.env.SESSION_ID || ''
//Enter your KANGO-XMD session id here; must start with KANGO-

//-----------------------[ BOT NAME ]-----------------------//
//-//

global.botname = process.env.BOT_NAME || 'KANGO-XMD'

//-----------------------[ OWNER NUMBER ]-----------------------//
//-//

global.ownernumber = process.env.OWNER_NUMBER || '[TUMHARA_WHATSAPP_NUMBER]' // Bina '+' ke daalna, e.g., '919876543210'

//-----------------------[ SUDO ]-----------------------//
//-//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['[TUMHARA_WHATSAPP_NUMBER]'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------------[ OWNER NAME ]-----------------------//
//-//

global.ownername = process.env.OWNER_NAME || 'Rohan Sharma'

//-----------------------[ STICKER PACKNAME ]-----------------------//
//-//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD"

//-----------------------[ COUNTRY TIMEZONE ]-----------------------//
//-//

global.timezones = 'Asia/Kolkata'; // Set this to your timezone

//-----------------------[ STICKER AUTHOR NAME ]-----------------------//
//-//

global.author = process.env.STICKER_AUTHOR_NAME || "Rohan Sharma"

//-----------------------[ GITHUB DATABASE ]-----------------------//
// /

global.dbToken = process.env.GITHUB_TOKEN || "";

//-----------------------[ CONTEXT LINK ]-----------------------//
// /

global.plink = process.env.PLINK || "[TUMHARA_YOUTUBE_YA_INSTA_LINK]"

//-----------------------[ WATERMARK ]-----------------------//
//-//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//-----------------------[ REPLIES ]-----------------------//
//-//

global.mess = {
    done: '*Done*',
    success: '©Kango-xmd',
    owner: '*You don\'t have permission to use this command!*',
    group: '*This feature becomes available when you use it in a group!*',
    admin: '*You\'ll unlock this feature with me as an admin!*',
    notadmin: '*This feature will work once you become an admin. A way of ensuring order!*'
}

//-----------------------[ WATCHER ]-----------------------//
//-//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Updated '${__filename}'`, 'red'))
    delete require.cache[file]
    require(file)
})

//-----------------------[ KANGO-XMD ]-----------------------//

