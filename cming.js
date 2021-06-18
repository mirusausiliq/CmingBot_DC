const { strict } = require('assert');
const Discord = require('discord.js'); // require the discord.js module
const config = require('./config.json');
const keyWord = require('./keyWordData.json');
const client = new Discord.Client(); // create a new Discord client (Object)
// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log(`${client.user.tag} is online!!`); 
}); 
//.once is only process once . .on is when quist down ,than it do.
client.on('message' , msg => {
	let pre = msg.content.substr(0,1) == "C";
	let rot = msg.content.substr(1);
	let nu1,nu2,nu3;
	let str1 = " ",str2,str3;
	let sp1,sp2,sp3,sp4,sp5,sp6;
	const con0 = keyWord.Speak.length;
	const con1 = keyWord.keyWord.length;
	const con2 = keyWord.keyWord.indexOf(msg.content);
		function getKeyNumber(x){
			return Math.floor(Math.random()*x)
		};
	const embed = new Discord.MessageEmbed()//找不到就用embed discord找
		.setColor('#eb7b97')
		.setTitle('CmingBot指令')
		.addField('>>> Chelp','尋求幫助')
		.addField('>>> Ckeyword','找關鍵字')
		.addField(`>>> ~~各種關鍵字~~`,'噁男語錄')
		.setTimestamp()
		.setFooter('By Mirusa Usiliq','https://imgur.com/J3iFTMJ.png');
	if(pre == true){
		switch(rot){
			case "keyword":{
				for(nu1=0;nu1<5;nu1++){
					str1 = str1 + keyWord.keyWord[getKeyNumber(con1)];
					str1 += " ,";
				} 
				str1 = str1.slice(0,-1);//DONT USE .substring or .substr ㄇㄉ快被操死 ++ 有空來學點string excute好ㄌ
				console.log(str1)
				msg.reply("KeyWord:"+str1);
				break;
			}
			case "help":{
				msg.channel.send(embed);
			}
		}
	}
	else if(con2>=0){ //keyTalk
		msg.reply(keyWord.Speak[getKeyNumber(con0)]);
	};
 }//別動
);
client.login(config.token);