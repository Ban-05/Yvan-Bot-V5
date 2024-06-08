module.exports = {
	config: {
		name: "limule",
		aliases: ["Rimuru"],
		version: "1.0",
		author: "Yvan power ", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of Limule",
		longDescription: "sends u pic of limule",
		category: "no prefix",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/YkJQ3Lj/image.jpg",
"https://i.ibb.co/qxWsYzB/image.jpg",
"https://i.ibb.co/0jr3Q9m/image.jpg",
"https://i.ibb.co/VCBSYGr/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '💠✨𝐋𝐈𝐌𝐔𝐋𝐄 💧𝐓𝐄𝐌𝐏𝐄𝐒𝐓✨💠',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
