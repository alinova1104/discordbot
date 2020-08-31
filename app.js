const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Hazir!');
});

client.on('message', message => {
	if (message.content === '!n ping') {
		message.channel.send('Pong.');
	} else if (message.content === '!n beep') {
		message.channel.send('Boop.');
	} else if (message.content === `!n server`) {
		message.channel.send(`Sunucunun Adi: ${message.guild.name}\nToplam Uye Sayisi: ${message.guild.memberCount}`);
	}
});

client.login("NzQzODIzMjQ5ODcxNDcwNzE0.XzaRYg.C3JTZdbs7FiDUyr77_tiCsnyixA");
