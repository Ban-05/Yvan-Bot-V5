const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "by",
		aliases: ["adventure"],
		version: "1.0",
		author: "yvan power",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage("🔹𝐉𝐞 𝐩𝐚𝐫𝐬 à 𝐥'𝐚𝐯𝐞𝐧𝐭𝐮𝐫𝐞 𝐚𝐯𝐞𝐜 𝐦𝐨𝐧 𝐦𝐚î𝐭𝐫𝐞 𝐚 𝐥𝐚 𝐩𝐫𝐨𝐜𝐡𝐚𝐢𝐧𝐞 👋😎🔹", id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
