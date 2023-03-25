const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// Map to store the number of warnings for each user
const warns = new Map();

const data = new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Warn a user.')
    .addUserOption(option => 
        option.setName('user')
        .setDescription('The user to be warned.')
        .setRequired(true))
    .addStringOption(option => 
        option.setName('reason')
        .setDescription('The reason for the warning.')
        .setRequired(true));

module.exports.execute = async (client, interaction) => {
    const _0x4955d7=_0x3c5f;(function(_0x3b85fc,_0x2fc5ce){const _0x3f5ca1=_0x3c5f,_0xe789b8=_0x3b85fc();while(!![]){try{const _0x1c1ca7=-parseInt(_0x3f5ca1(0x18d))/0x1*(-parseInt(_0x3f5ca1(0x189))/0x2)+parseInt(_0x3f5ca1(0x18b))/0x3+-parseInt(_0x3f5ca1(0x196))/0x4*(-parseInt(_0x3f5ca1(0x182))/0x5)+parseInt(_0x3f5ca1(0x199))/0x6+parseInt(_0x3f5ca1(0x1a1))/0x7*(parseInt(_0x3f5ca1(0x181))/0x8)+-parseInt(_0x3f5ca1(0x19f))/0x9+-parseInt(_0x3f5ca1(0x1a2))/0xa;if(_0x1c1ca7===_0x2fc5ce)break;else _0xe789b8['push'](_0xe789b8['shift']());}catch(_0x395d2b){_0xe789b8['push'](_0xe789b8['shift']());}}}(_0x5414,0x1e60b));const user=interaction['options'][_0x4955d7(0x17d)](_0x4955d7(0x18f)),reason=interaction[_0x4955d7(0x180)][_0x4955d7(0x18c)]('reason'),author=interaction['user'];if(!interaction[_0x4955d7(0x19c)][_0x4955d7(0x197)][_0x4955d7(0x17e)]('KICK_MEMBERS')){const embed=new MessageEmbed()[_0x4955d7(0x19d)](_0x4955d7(0x191))[_0x4955d7(0x18e)](_0x4955d7(0x187))[_0x4955d7(0x195)](_0x4955d7(0x185));return interaction['reply']({'embeds':[embed],'ephemeral':![]});}function _0x5414(){const _0x3e5bb6=['cache','username','setDescription','743116fZrQlc','permissions','get','1060866vmJxQg','You\x20have\x20been\x20kicked\x20from\x20the\x20server!','\x20has\x20been\x20kicked\x20from\x20the\x20server!','member','setColor','send','1490040fLKwvv','kick','1436029dVlNWL','6077510AEsKzR','\x0aTotal\x20number\x20of\x20warnings:\x20','getUser','has','You\x20have\x20received\x205\x20warnings\x20for:\x20','options','8oNvrpj','5xOQmTd','They\x20received\x205\x20warnings\x20for:\x20','delete','You\x20do\x20not\x20have\x20the\x20necessary\x20permission\x20to\x20issue\x20warnings.','Reason:\x20','Access\x20denied!','set','22858zjYluP','members','338550cfRrcf','getString','19ufSJhJ','setTitle','user','reply','#ff0000','#ffff00'];_0x5414=function(){return _0x3e5bb6;};return _0x5414();}!warns['has'](user['id'])&&warns['set'](user['id'],0x0);const numWarnings=warns[_0x4955d7(0x198)](user['id'])+0x1;warns[_0x4955d7(0x188)](user['id'],numWarnings);if(numWarnings>=0x5){const member=interaction['guild'][_0x4955d7(0x18a)][_0x4955d7(0x193)][_0x4955d7(0x198)](user['id']);await member[_0x4955d7(0x1a0)](_0x4955d7(0x17f)+reason+'.'),warns[_0x4955d7(0x184)](user['id']);const embed=new MessageEmbed()['setColor'](_0x4955d7(0x191))[_0x4955d7(0x18e)](user[_0x4955d7(0x194)]+_0x4955d7(0x19b))['setDescription'](_0x4955d7(0x183)+reason+'.');await interaction[_0x4955d7(0x190)]({'embeds':[embed],'ephemeral':![]});const dmEmbed=new MessageEmbed()[_0x4955d7(0x19d)](_0x4955d7(0x191))['setTitle'](_0x4955d7(0x19a))[_0x4955d7(0x195)]('You\x20received\x205\x20warnings\x20for:\x20'+reason+'.');return user[_0x4955d7(0x19e)]({'embeds':[dmEmbed]});}function _0x3c5f(_0x4abde1,_0x1bd5d3){const _0x54143c=_0x5414();return _0x3c5f=function(_0x3c5fb4,_0x1c5729){_0x3c5fb4=_0x3c5fb4-0x17d;let _0x2596cd=_0x54143c[_0x3c5fb4];return _0x2596cd;},_0x3c5f(_0x4abde1,_0x1bd5d3);}const embed=new MessageEmbed()[_0x4955d7(0x19d)](_0x4955d7(0x192))[_0x4955d7(0x18e)](user['username']+'\x20has\x20received\x20a\x20warning!')[_0x4955d7(0x195)](_0x4955d7(0x186)+reason+'\x0aTotal\x20number\x20of\x20warnings:\x20'+numWarnings);await interaction[_0x4955d7(0x190)]({'embeds':[embed],'ephemeral':![]});const dmEmbed=new MessageEmbed()[_0x4955d7(0x19d)]('#ffff00')[_0x4955d7(0x18e)]('You\x20have\x20received\x20a\x20warning!')[_0x4955d7(0x195)](_0x4955d7(0x186)+reason+_0x4955d7(0x1a3)+numWarnings);return user[_0x4955d7(0x19e)]({'embeds':[dmEmbed]});
};
  
module.exports.options = {
    ...data.toJSON()
};
  
module.exports.config = {
    enabled: true,
};
