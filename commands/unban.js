const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('unban')
    .setDescription('Unban a user from the server.')
    .addUserOption(option => 
        option.setName('user')
            .setDescription('The user you want to unban.')
            .setRequired(true));

module.exports.execute = async (client, interaction) => {
   const _0x36aa85=_0x2a7f;function _0x2a7f(_0x334958,_0x197285){const _0x214d7f=_0x214d();return _0x2a7f=function(_0x2a7fc5,_0x516c03){_0x2a7fc5=_0x2a7fc5-0x90;let _0x5201d4=_0x214d7f[_0x2a7fc5];return _0x5201d4;},_0x2a7f(_0x334958,_0x197285);}(function(_0x1776a3,_0xf03141){const _0x1a0460=_0x2a7f,_0x185d40=_0x1776a3();while(!![]){try{const _0x5d2485=-parseInt(_0x1a0460(0x9a))/0x1+-parseInt(_0x1a0460(0xa9))/0x2*(parseInt(_0x1a0460(0x95))/0x3)+parseInt(_0x1a0460(0x91))/0x4*(-parseInt(_0x1a0460(0xae))/0x5)+-parseInt(_0x1a0460(0x9c))/0x6+parseInt(_0x1a0460(0xa4))/0x7*(parseInt(_0x1a0460(0x94))/0x8)+-parseInt(_0x1a0460(0x96))/0x9*(parseInt(_0x1a0460(0xa5))/0xa)+parseInt(_0x1a0460(0x97))/0xb*(parseInt(_0x1a0460(0x90))/0xc);if(_0x5d2485===_0xf03141)break;else _0x185d40['push'](_0x185d40['shift']());}catch(_0x1771bd){_0x185d40['push'](_0x185d40['shift']());}}}(_0x214d,0x39a6e));if(!interaction[_0x36aa85(0x92)]['permissions'][_0x36aa85(0xab)](_0x36aa85(0xa2))){const embed=new EmbedBuilder()['setColor']('#ff0000')[_0x36aa85(0x99)]('Access\x20denied!')['setDescription'](_0x36aa85(0x9f));return interaction[_0x36aa85(0xa0)]({'embeds':[embed],'ephemeral':![]});}else{const bannedUser=interaction[_0x36aa85(0xa8)][_0x36aa85(0x93)](_0x36aa85(0xa1)),banList=await interaction['guild'][_0x36aa85(0x9b)][_0x36aa85(0x9d)](),bannedMember=banList['find'](_0xbf9826=>_0xbf9826[_0x36aa85(0x98)]['id']===bannedUser['id']);if(!bannedMember){const embed=new EmbedBuilder()[_0x36aa85(0xa6)]('#ff0000')[_0x36aa85(0x99)](_0x36aa85(0x9e))['setDescription'](_0x36aa85(0xad));return interaction[_0x36aa85(0xa0)]({'embeds':[embed],'ephemeral':![]});}await interaction[_0x36aa85(0xa3)]['members'][_0x36aa85(0xa7)](bannedUser);const embed=new EmbedBuilder()[_0x36aa85(0xa6)](_0x36aa85(0xaa))['setTitle'](bannedUser[_0x36aa85(0xac)]+'\x20has\x20been\x20unbanned!');await interaction['reply']({'embeds':[embed],'ephemeral':![]});}function _0x214d(){const _0x24c3fb=['guild','60130RKtuqx','70XjESrc','setColor','unban','options','448816rgNiVo','#00ff00','has','username','The\x20user\x20you\x20provided\x20is\x20not\x20banned\x20from\x20this\x20server.','1460330bkpUgZ','12tyImHw','4sncvov','member','getUser','408btRoyc','3DDLObk','340713QXWFfl','11628034BGBUhe','user','setTitle','350617pLzIyv','bans','761712VnBHvE','fetch','Invalid\x20user!','You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','reply','userid','BAN_MEMBERS'];_0x214d=function(){return _0x24c3fb;};return _0x214d();}
};

module.exports.options = {
    ...data.toJSON()
};

module.exports.config = {
    enabled: true,
};
