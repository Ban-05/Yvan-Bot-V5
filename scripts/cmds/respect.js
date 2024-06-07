module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["100091833939051"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "🔱| 💠𝑪𝒂𝒏𝒂𝒓𝒅 𝒕'𝒂𝒊 𝒖𝒏 𝒄𝒂𝒇𝒂𝒓𝒅𝒔 𝒅𝒆𝒗𝒂𝒏𝒕 𝒎𝒐𝒏 𝒎𝒂î𝒕𝒓𝒆 🖕🏻💠",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `𝑶𝒉 𝒆𝒎𝒑𝒆𝒓𝒆𝒖𝒓 👑𝒀𝒗𝒂𝒏 𝒑𝒐𝒘𝒆𝒓 👑 𝒋𝒆 𝒔𝒖𝒊𝒔 à 𝒕𝒐𝒏 𝒔𝒆𝒓𝒗𝒊𝒄𝒆 🙇 𝒄'𝒆𝒔𝒕 𝑪𝒐𝒏𝒓𝒂𝒅 𝒏𝒆 𝒑𝒆𝒖𝒗𝒆𝒏𝒕 𝑹 𝒄𝒐𝒏𝒕𝒓𝒆 𝒎𝒂 𝒍𝒐𝒚𝒂𝒖𝒕é.`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("💧𝐉𝐞 𝐬𝐮𝐢𝐬 𝐚 𝐭𝐞𝐬 𝐨𝐫𝐝𝐫𝐞𝐬 ♚𝐘𝐕𝐀𝐍 𝐏𝐎𝐖𝐄𝐑 ♚𝐜'𝐞𝐬𝐭 𝐭𝐨𝐢 𝐪𝐮𝐢 𝐝𝐨𝐢𝐭 ê𝐭𝐫𝐞 𝐥𝐞 𝐦𝐚î𝐭𝐫𝐞 𝐝𝐞 𝐜𝐞 𝐥𝐢𝐞𝐮💧", event.threadID);
 }
 },
  }
