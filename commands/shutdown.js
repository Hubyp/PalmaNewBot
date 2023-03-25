const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

const allowedUsers = ["948916911293497344", "769522926139342848", "781051635928531015"]; // add user IDs here

const data = new SlashCommandBuilder()
    .setName('shutdown')
    .setDescription('Shutdown the bot.');

module.exports.execute = async (client, interaction) => {
   const _0x191666=_0x5e46;(function(_0x47fd17,_0x189596){const _0x50cb96=_0x5e46,_0x5861f0=_0x47fd17();while(!![]){try{const _0x1c9fd0=parseInt(_0x50cb96(0x1f7))/0x1*(parseInt(_0x50cb96(0x1f4))/0x2)+parseInt(_0x50cb96(0x1e9))/0x3+-parseInt(_0x50cb96(0x1fb))/0x4*(-parseInt(_0x50cb96(0x1fa))/0x5)+parseInt(_0x50cb96(0x1f6))/0x6+-parseInt(_0x50cb96(0x1f8))/0x7+parseInt(_0x50cb96(0x1f5))/0x8*(-parseInt(_0x50cb96(0x1ea))/0x9)+parseInt(_0x50cb96(0x1f2))/0xa*(parseInt(_0x50cb96(0x1f0))/0xb);if(_0x1c9fd0===_0x189596)break;else _0x5861f0['push'](_0x5861f0['shift']());}catch(_0x427833){_0x5861f0['push'](_0x5861f0['shift']());}}}(_0x34c9,0x2bb19));function _0x34c9(){const _0x22b83a=['#ff0000','2870ZzdJel','You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','9524yCKZma','8KfjiHq','327210NIxLWi','60MbwIxz','1197441hLSzJZ','exit','55985ppGXYw','64FVTzsi','reply','275757TAZBFd','3098133ifhIgJ','setDescription','setColor','includes','member','setTitle','3179eulYzd'];_0x34c9=function(){return _0x22b83a;};return _0x34c9();}function _0x5e46(_0x404387,_0x21104f){const _0x34c903=_0x34c9();return _0x5e46=function(_0x5e469d,_0x4a1fe2){_0x5e469d=_0x5e469d-0x1e8;let _0x4f614a=_0x34c903[_0x5e469d];return _0x4f614a;},_0x5e46(_0x404387,_0x21104f);}if(!allowedUsers[_0x191666(0x1ed)](interaction[_0x191666(0x1ee)]['id'])){const embed=new EmbedBuilder()[_0x191666(0x1ec)](_0x191666(0x1f1))['setTitle']('Access\x20denied!')[_0x191666(0x1eb)](_0x191666(0x1f3));return interaction[_0x191666(0x1e8)]({'embeds':[embed],'ephemeral':!![]});}else{const embed=new EmbedBuilder()[_0x191666(0x1ec)]('#00ff00')[_0x191666(0x1ef)]('The\x20bot\x20is\x20shutting\x20down....');await interaction[_0x191666(0x1e8)]({'embeds':[embed],'ephemeral':!![]}),process[_0x191666(0x1f9)]();}
};

module.exports.options = {
    ...data.toJSON()
};

module.exports.config = {
    enabled: true,
};
