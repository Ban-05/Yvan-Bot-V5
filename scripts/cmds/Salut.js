 module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "Yvan",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("💧𝑺𝒂𝒍𝒖𝒕 𝒋𝒆 𝒔𝒖𝒊𝒔 𝒖𝒏 𝒔𝒍𝒊𝒎𝒆 𝒅é𝒗𝒆𝒍𝒐𝒑𝒑é 𝒑𝒂𝒓☛ ♚𝒀𝑽𝑨𝑵 𝑷𝑶𝑾𝑬𝑹♚ ☚ 𝒑𝒐𝒖𝒓 𝒓é𝒑𝒐𝒏𝒅𝒓𝒆 à 𝒗𝒐𝒔 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏𝒔🙂 💧");
}
};
