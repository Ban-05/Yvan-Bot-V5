module.exports = {
  config: {
    name: "dust",
    aliases: ["lrd"],
    version: "1.0",
    author: "Yvan power ",
    countDown: 10,
    role: 0,
    shortDescription: "Amuses toi bien au jeu du hasard",
    longDescription: "Seul le hasard tu rendras riche ou pauvre...Bonne chance",
    category: "game",
    guide: "{pn} <Nind/Van> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["nind", "van"].includes(betType)) {
      return message.reply("💠💧 | 𝗖𝗵𝗼𝗶𝘀𝗶 : '𝐍𝐢𝐧𝐝' 𝗼𝘂 '𝐕𝐚𝐧'.");
    }

    if (!Number.isInteger(betAmount) || betAmount < 50) {
      return message.reply("💠 | 𝐌𝐢𝐬𝐞 𝐚𝐮 𝐦𝐨𝐢𝐧𝐬 50$ 𝐨𝐮 𝐩𝐥𝐮𝐬.");
    }

    if (betAmount > userData.money) {
      return message.reply("💧 | 𝐕𝐚, 𝐭𝐮 𝐧'𝐚𝐬 𝐩𝐚𝐬 𝐜𝐞𝐭𝐭𝐞 𝐬𝐨𝐦𝐦𝐞 ✴");
    }

    const dice = [1, 2, 3, 4, 5, 6];
    const results = [];

    for (let i = 0; i < 3; i++) {
      const result = dice[Math.floor(Math.random() * dice.length)];
      results.push(result);
    }

    const winConditions = {
      small: results.filter((num, index, arr) => num >= 1 && num <= 3 && arr.indexOf(num) !== index).length > 0,
      big: results.filter((num, index, arr) => num >= 4 && num <= 6 && arr.indexOf(num) !== index).length > 0,
    };

    const resultString = results.join(" | ");

    if ((winConditions[betType] && Math.random() <= 0.4) || (!winConditions[betType] && Math.random() > 0.4)) {
      const winAmount = 2 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`💠✨𝑳𝒊𝒎𝒖𝒍𝒆 𝒕𝒆𝒎𝒑𝒆𝒔𝒕✨💠
 ───────────
🔱[ ${resultString} ]🔱\ 🌀|𝐁𝐫𝐚𝐯𝐨 𝐭𝐮 𝐠𝐚𝐠𝐧𝐞🎉💧${winAmount}€💧!`);
    } else {
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`𝑳𝒊𝒎𝒖𝒍𝒆 𝒕𝒆𝒎𝒑𝒆𝒔𝒕
  ─────────── 
ʕ˖͜͡˖ʔ[ ${resultString} ]ʕ˖͜͡˖ʔ
🥺| 𝐃𝐬𝐥 𝐦𝐞𝐜 𝐦𝐚𝐢𝐬 𝐭'𝐚 𝐩𝐞𝐫𝐝𝐮 💧${betAmount}€💧.`);
    }
  }
    }
