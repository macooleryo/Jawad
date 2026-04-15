
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

//add your session id

global.session = "https://khanxmd-pair.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VU226jOhT9F782Gi4BQpAqHaAQcr/ThKN5cLAhBDBgmyRklH8fkU7beTgz6vGTr3uvvdba/gFIkTA8xg0wfoCSJmfIcTvlTYmBAaw6ijAFHYAgh8AA84Va1+JFzpPtLdkfbkP6Ou8XVqg9xbdmfqWz04uuXtOXxtGfwb0DyvqQJeFfAm6I4gRrMsoJqsutQuyCyrcqk3VhvIIzm2+gNNpXE25KyjO4txFhQhMSO+UR55jCbIybBUzo1+Dj6SpXZqYfBgKdo6lueZf0pC5Ej3mnWjksJxYMBZHR3SD8GvzjNKYaUUZk0eSTnGa7aCiL50ARNG19rnGXXeLd9YpHE2/5Bp8lMcFoiDDhCW++zHs9slPTOZrKXiAjS7SUm6ju89HQnuaSJxEuC0SQAy0Mu9uvAS8cdqJBFgpOU1/XM9Xu9yKzqsRYRguyiCKkMT2NRFGz4t+BL+i7V9L/w/ur65gFnXBH9sIuLpvl0b3yq3fl2j41KxXC3VMUX+SV7rGvwRe21WL71A/G/iWY7KeDXt7MD6fT6ekQuWtpEyXBaeymTR/J+id8yGv6N5QzVAbCdWIJVMhTcXPc+YK3FMgOLUtfTlN15BJ1va2J6pV4PD0sqmFqeitNGRUbiV1mmQixiHb+zfHtbohVf0pcyzafHxWluBkiYEj3DqA4ThinkCcFeezpagdAdF7jkGL+oBdII+2lu9rfcOWN88HJE+u+hT08z/TgfDufZLfR/bn72ivH02fQASUtQswYRl7CeEGbKWYMxpgB49/vHUDwlb8J16bTpW4HRAllfEvqMisgepf14xSGYVETvm5IaLcTTIEhfm5jzhMSs5bJmkAaHpMzto+QM2BEMGP4o0ZMMQIGpzX+6Fu7QC31i9Vk9+o6G9AB+UOSBAEDyFq3p/dVRekpXUPu/cO+XdqwsCy/EcxBB2Rv16S+2FdltacpktiX25vtwf0DYRsQYQ6TjAED2BM7i+eO68x2XGDKYGAOY9OOTfBZ0bs53sh/kn1c0nidnQ+9EF7tQCLlZtu3t1tJdC8jObPUKlR7/i5mz/8RBBiAzD1ky3th4dd7E/X6cDaaaX03HVPpsl6/TPFwIF8PMapWE010Kt/yERyN0+1GWx217WW8cMZ8v3m1qttYP3qZrpLVwLo8t9kQPich/j0Z0vOTNuyJTrDajNJVud/A/VFFGWbyMUt6CmcX55Vvokxd1nLYXzS3COq3ZulKt3WaVzkuVOukHs2VtPI3ga1xfO6+LN9s+2ib7Nd3lTwM1WrVLqMEP7qfwFbBP4nyDrj1lnjv/Pb21z/yh160Ip7tKqg45UF+6g7YMkeBtpUWy8ydISu0UbnEkMyx5CsTcL9/74AygzwqaA4MAAmixSM5LerWq0MSFX9JZpvp0InjYVtxBhk3P/2/SXLMOMxLYEi9niZrfVEWOyBvzLJcc8jf+waY7Zg0Fbj/BAhOf6lUBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed By JAWAD MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "263787786042", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐙𝐮𝐤𝐚", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "🩵", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "null, pm, dm, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 𝐀𝐢", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/8yz3ex.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴀɪ ᴀssɪsᴛᴀɴᴛ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "true", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
//KHAN MD; 🔥💸💀
