const Discord = require('discord.js');





db.defaults({xp: []}) .write()

var bot = new Discord.Client();
var prefix = ("/");
var randnum = 0;



bot.on('ready', () => {

    var mesgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xplevel').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp);
    }
    bot.user.setPresence({ game: { name: 'exterminer des juifs'}});
    console.log("Bot Ready !");
});

bot.login('NDUwOTM0NzY1NDkxODQ3MTg4.De6dVA.CiE0nTkqdM8n0djvk5VfoMYZ92E');

bot.on('message', message => {
    if (message.content === "tamer"){
    message.reply("ftg sale nègre");
    console.log('violence envers un bamboula');
    }

    if(message.content === prefix + 'help'){
        var help_embed = new Discord.RichEmbed()
        .setColor('#EC0000')
        .addField("commande du bot", "voici mes commandes pour tuer des juifs")
        .addField("interraction", "tamer : le bot t'insulte")
    message.channel.sendEmbed(help_embed);
        message.channel.sendMessage("tiens mes commandes gros pd :\n -/help pour afficher les commandes");
        console.log("commande help utilisée");
    }

    if (message.content === "ça va Akali ?"){
        random();

        if (randnum == 1){
            message.reply("(réponse numéro1), tranquille gros");
            console.log(randnum);
        }

        if(randnum ==2){
            message.reply("(Réponse numéro 2), j'vais t'envoyer au goulag giga sous pute");
            console.log(randnum);
        }
    }
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
