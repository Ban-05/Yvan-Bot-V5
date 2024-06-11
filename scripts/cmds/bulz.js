module.exports = {
  config: {
    name: "bulz",
    aliases: ["bulz"],
    version: "1.0",
    author: "Loid Butter | haitani du toman",
    countDown: 10,
    role: 0,
    shortDescription: "Play bluz, the oldest gambling game",
    longDescription: "Play bluz, the oldest gambling game, and earn money",
    category: "game",
    guide: "{pn} <rimuru/limule> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["rimuru", "limule"].includes(betType)) {
      return message.reply("💠𝐂𝐡𝐨𝐢𝐬𝐢 𝐞𝐧𝐭𝐫𝐞 [𝐑𝐈𝐌𝐔𝐑𝐔] 𝐨ù [𝐋𝐈𝐌𝐔𝐋𝐄] .");
    }

    if (!Number.isInteger(betAmount) || betAmount < 50) {
      return message.reply("💧𝐋𝐞 𝐦𝐨𝐧𝐭𝐚𝐧𝐭 𝐝𝐨𝐢𝐭 𝐞̂𝐭𝐫𝐞 50 𝐨𝐮 𝐩𝐥𝐮𝐬.");
    }

    if (betAmount > userData.money) {
      return message.reply("💠 𝐭𝐮 𝐧'𝐚𝐬 𝐩𝐚𝐬 𝐜𝐞 𝐦𝐨𝐧𝐭𝐚𝐧𝐭 𝐩𝐨𝐮𝐫 𝐣𝐨𝐮𝐞𝐫👋");
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
      const winAmount = 4 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`(💠_💠)>𝐓𝐮 𝐯𝐢𝐞𝐧𝐬 𝐝𝐞 𝐫𝐞𝐦𝐩𝐨𝐫𝐭𝐞𝐫 𝐥𝐞 𝐠𝐫𝐨𝐬 𝐥𝐨𝐭[ ${resultString} ]\n\n🎉 | 𝐛𝐫𝐚𝐯𝐨 𝐭𝐚 𝐠𝐚𝐠𝐧𝐞 𝐥𝐚 𝐬𝐨𝐦𝐦𝐞 𝐝𝐞 ☛ 💧 ${winAmount}💧€ `);
    } else {
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`( ⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)>𝐓𝐮 𝐚𝐬 𝐩𝐞𝐫𝐝𝐮 𝐭𝐨𝐧 𝐟𝐫𝐢𝐜 \n                 [ ${resultString} ]\n\n🔱 | 𝐓'𝐚 𝐩𝐞𝐫𝐝𝐮 𝐮𝐧𝐞 𝐬𝐨𝐦𝐦𝐞 𝐝𝐞 ☛${betAmount}.€`);
    }
  }
};
