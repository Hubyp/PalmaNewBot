const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from the server.')
    .addUserOption(option => option.setName('user').setDescription('The user to ban.').setRequired(true));

module.exports.execute = async (client, interaction) => {
    const _0x5f1ae1=_0x1677;function _0x1677(_0x274ead,_0x4b6949){const _0x3b7d8a=_0x3b7d();return _0x1677=function(_0x16776a,_0x3c84d7){_0x16776a=_0x16776a-0x1c2;let _0x421e7a=_0x3b7d8a[_0x16776a];return _0x421e7a;},_0x1677(_0x274ead,_0x4b6949);}(function(_0x49ac80,_0x302aba){const _0x144c4c=_0x1677,_0x12bb77=_0x49ac80();while(!![]){try{const _0xd31dbc=parseInt(_0x144c4c(0x1ca))/0x1*(parseInt(_0x144c4c(0x1c6))/0x2)+-parseInt(_0x144c4c(0x1d9))/0x3+-parseInt(_0x144c4c(0x1c8))/0x4+parseInt(_0x144c4c(0x1e3))/0x5*(parseInt(_0x144c4c(0x1cd))/0x6)+parseInt(_0x144c4c(0x1c2))/0x7*(parseInt(_0x144c4c(0x1c3))/0x8)+parseInt(_0x144c4c(0x1c5))/0x9+-parseInt(_0x144c4c(0x1de))/0xa*(-parseInt(_0x144c4c(0x1df))/0xb);if(_0xd31dbc===_0x302aba)break;else _0x12bb77['push'](_0x12bb77['shift']());}catch(_0xee530d){_0x12bb77['push'](_0x12bb77['shift']());}}}(_0x3b7d,0xe36ea));const userToBan=interaction['options'][_0x5f1ae1(0x1d6)](_0x5f1ae1(0x1d8)),memberToBan=interaction[_0x5f1ae1(0x1cb)][_0x5f1ae1(0x1d5)][_0x5f1ae1(0x1cc)]['get'](userToBan['id']);if(!interaction[_0x5f1ae1(0x1ce)][_0x5f1ae1(0x1c9)][_0x5f1ae1(0x1e0)](_0x5f1ae1(0x1e1))){const embed=new EmbedBuilder()[_0x5f1ae1(0x1cf)](_0x5f1ae1(0x1d0))[_0x5f1ae1(0x1d3)](_0x5f1ae1(0x1c7))[_0x5f1ae1(0x1c4)](_0x5f1ae1(0x1dd));return interaction[_0x5f1ae1(0x1da)]({'embeds':[embed],'ephemeral':![]});}else{if(!memberToBan[_0x5f1ae1(0x1e2)]){const embed=new EmbedBuilder()[_0x5f1ae1(0x1cf)](_0x5f1ae1(0x1d0))[_0x5f1ae1(0x1d3)](_0x5f1ae1(0x1d7))[_0x5f1ae1(0x1c4)]('I\x20cannot\x20ban\x20this\x20user.\x20Please\x20check\x20my\x20permissions\x20and\x20try\x20again.');return interaction[_0x5f1ae1(0x1da)]({'embeds':[embed],'ephemeral':![]});}else{const reason=interaction[_0x5f1ae1(0x1d4)][_0x5f1ae1(0x1dc)](_0x5f1ae1(0x1d1))||'No\x20reason\x20specified.';await memberToBan['ban']({'reason':reason});const embed=new EmbedBuilder()[_0x5f1ae1(0x1cf)](_0x5f1ae1(0x1db))[_0x5f1ae1(0x1d3)](_0x5f1ae1(0x1e4)+userToBan[_0x5f1ae1(0x1d2)])['setDescription']('Reason:\x20'+reason);return interaction[_0x5f1ae1(0x1da)]({'embeds':[embed],'ephemeral':![]});}}function _0x3b7d(){const _0x5a17e2=['862ZRfjUg','Access\x20denied!','7252208sAtQEW','permissions','710MreVCf','guild','cache','18OTttwh','member','setColor','#ff0000','reason','username','setTitle','options','members','getUser','Error!','user','2661609uUtakw','reply','#00ff00','getString','You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','10dasQLP','5289757waNQgq','has','BAN_MEMBERS','bannable','1475035tcQLrv','User\x20banned:\x20','358603XUoOwA','112SRrmza','setDescription','11184237ycFYfs'];_0x3b7d=function(){return _0x5a17e2;};return _0x3b7d();}
};
module.exports.options = {
    ...data.toJSON()
};
module.exports.config = {
    enabled: true,
};
