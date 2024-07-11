//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94760769124";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURHT2lxVW5US3VYeDRFTk9OOXcwcUl4V2puWlJuaWZYenZVOURXNVVXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGU5OU83QTJDalgrVkhWVkxHOHlHU1BLOW54UHQ0WXpCVytlb0xmMXRtYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQzBNYkpMWnlmTnNYZ2liRThqd0VkNFZ0aUhrTnNRV2xvQk1jSG9XWkc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzQ0xlcUkzWDVhNG1rbTNWR3NNclJ3V0paeHZpcmtLWUpONmVOU2w3WUhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDKzZTUXVUUXdsVUpBVWdpUmR0ZEhQV2xhcFpDOG5kWVJjbGVBWDNja009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9xbVEwMi83SzNsMTM2a1lIVzNiQ2xMU21NQ2VmOFVGZVBaWHZIYjZ5Qmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0kvKytjVTRpWld5NjZtQnBVSlR5bDVBb1Q0Z0RZQ0ZoWUwxTUN5a21Waz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlE2QXhrS0FDRmlZZStldkNNMDB5aG02OW5UZmtocm9kWDBHa0Q2OFBsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1XU0FEZ2tSL3kzSWJpUkN3MEVxMGc5cVVKOVVDQ3Mva3htWGl4dWQ0b0FHNzZBUDRPZngyaUpmK0IvdHhLeTl1S1dtdUhHREVxRlBGdUxTRVdPcGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJudTBPb0p3L0ZvbEo3TDhlKzYrU05qSDA0N0ZIT3JUU3JWQzkrendpTnpZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAzMTU1MDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNDNEQyNDA2QzIyOUE3M0UwREEyMzdGM0VBQjRFRTIzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA3MjMzMjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAzMTU1MDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEwRURFMDZDQ0JDOUU4RDkxRURCQkRFREY4OEIwNzkzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA3MjMzMjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9Za3ZMcTdNUWxLdF9kNzZjNkJlM1EiLCJwaG9uZUlkIjoiZTg3YzYwMWItNWI2Ny00NjJiLTkzZTAtMzVlMzc2YzI2NTQ4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxaeWFWeEpjcng3Q3dURnoxWm5mMU1aYTJHYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2ZUI4L05ZUEtXc01ETWRKSWgyWm5WdWhOK0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0Y3Q01IRFkiLCJtZSI6eyJpZCI6Ijk0NzAzMTU1MDIzOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWFzaGlmX1NFUiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1N3dXZRSEVPbk93TFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidGNEN2RuZ0NjUWZoK1ZIL0xlMXdSeUQzR0U3SitNZXFTVFFLZW5WWjZoOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidnphSnFEYVZZUVgrU1JBVG1OclVQT200eDEwUEl2a0YxdUozaEFoZGJEOTZUV0ExVHl6WWJTWGpVMU9XRlMwSFp6SEhOb0JxNUpEVE95SlkvTVEzREE9PSIsImRldmljZVNpZ25hdHVyZSI6InFKNFN3YStsTkNKNitON01MTE1ncDRnM1k5WHYvMkJ0SmVER0tGaXp5UFdlclJsZVArdWliUmpOQ1ZEbDg0V3A3OHByNHcwREJxM3JqckNCU3YvYWdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDMxNTUwMjM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiWEErM1o0QW5FSDRmbFIveTN0Y0VjZzl4aE95ZmpIcWtrMENucDFXZW9mIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNzIzMzE5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlOWiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || “A N I T A”,
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
   aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
