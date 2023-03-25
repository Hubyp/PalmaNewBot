const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
.setName('userinfo')
.setDescription('Displays information about a user.')
.addUserOption(option => option.setName('target').setDescription('Select a user.'));

module.exports.execute = async (client, interaction) => {
const _0x3fd82d=_0x1de4;(function(_0x873ddf,_0x296c01){const _0x15e9b5=_0x1de4,_0x17060d=_0x873ddf();while(!![]){try{const _0x108427=parseInt(_0x15e9b5(0x15f))/0x1+-parseInt(_0x15e9b5(0x16c))/0x2+-parseInt(_0x15e9b5(0x168))/0x3+parseInt(_0x15e9b5(0x16e))/0x4*(-parseInt(_0x15e9b5(0x175))/0x5)+-parseInt(_0x15e9b5(0x161))/0x6*(-parseInt(_0x15e9b5(0x165))/0x7)+parseInt(_0x15e9b5(0x176))/0x8+parseInt(_0x15e9b5(0x16a))/0x9;if(_0x108427===_0x296c01)break;else _0x17060d['push'](_0x17060d['shift']());}catch(_0x4a4ab1){_0x17060d['push'](_0x17060d['shift']());}}}(_0x29ef,0x8fd7e));function _0x1de4(_0x1bbbc9,_0x16fce9){const _0x29efc4=_0x29ef();return _0x1de4=function(_0x1de416,_0x324b71){_0x1de416=_0x1de416-0x15c;let _0x1f3cac=_0x29efc4[_0x1de416];return _0x1f3cac;},_0x1de4(_0x1bbbc9,_0x16fce9);}function _0x29ef(){const _0x3803b5=['addFields','createdAt','860520egKxqK','Name','100578Yyybln','username','None','discriminator','84BJZOaH','Roles','setThumbnail','1148181ZtMeSD','toLocaleDateString','3618549yAXFLz','#00ffff','1394524hmisSb','Created\x20At','860788XzYurp','options','joinedAt','get','guild','roles','user','15eMHPzQ','6808200zLEyzw','Discriminator','cache','getUser','setColor','displayAvatarURL','\x20|\x20','filter'];_0x29ef=function(){return _0x3803b5;};return _0x29ef();}const targetUser=interaction[_0x3fd82d(0x16f)][_0x3fd82d(0x179)]('target')||interaction[_0x3fd82d(0x174)],member=interaction['guild']['members'][_0x3fd82d(0x178)][_0x3fd82d(0x171)](targetUser['id']),roles=member[_0x3fd82d(0x173)][_0x3fd82d(0x178)][_0x3fd82d(0x15c)](_0x164542=>_0x164542['id']!==interaction[_0x3fd82d(0x172)]['id'])['map'](_0x2ae352=>_0x2ae352['toString']())['join'](_0x3fd82d(0x17c)),createdAt=targetUser[_0x3fd82d(0x15e)][_0x3fd82d(0x169)](),joinedAt=member[_0x3fd82d(0x170)][_0x3fd82d(0x169)](),embed=new EmbedBuilder()[_0x3fd82d(0x17a)](_0x3fd82d(0x16b))[_0x3fd82d(0x167)](targetUser[_0x3fd82d(0x17b)]({'dynamic':!![]}))[_0x3fd82d(0x15d)]({'name':_0x3fd82d(0x160),'value':targetUser[_0x3fd82d(0x162)],'inline':!![]},{'name':_0x3fd82d(0x177),'value':targetUser[_0x3fd82d(0x164)],'inline':!![]},{'name':'ID','value':targetUser['id'],'inline':!![]},{'name':_0x3fd82d(0x16d),'value':createdAt,'inline':!![]},{'name':'Joined\x20At','value':joinedAt,'inline':!![]},{'name':_0x3fd82d(0x166),'value':roles||_0x3fd82d(0x163),'inline':![]});

        return interaction.reply({ embeds: [embed], ephemeral: false });
};

module.exports.options = {
...data.toJSON()
};
module.exports.config = {
enabled: true,
};
