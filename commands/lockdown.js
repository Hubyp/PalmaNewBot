const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

// variabila de stare pentru lockdown
let lockdownMode = false;

const data = new SlashCommandBuilder()
    .setName('lockdown')
    .setDescription('Activates/deactivates lockdown mode for the bot.');

module.exports.execute = async (client, interaction) => {
   const _0x57e0ec=_0x23e8;function _0x2364(){const _0x5aecba=['setTitle','393LFnpmI','reply','setDescription','user','setColor','48XaXYnw','69490rtwqcg','24UfGVYr','550010leDRyU','#00ff00','9148QHCRYM','The\x20bot\x20is\x20now\x20in\x20lockdown\x20mode.\x20Only\x20users\x20with\x20the\x20necessary\x20permissions\x20can\x20use\x20its\x20commands.','948916911293497344','4471065tgURBK','The\x20bot\x20is\x20no\x20longer\x20in\x20lockdown\x20mode.','257376JHzoLr','2574xrtxFp','183295uErIpZ','1184880KIKLqR'];_0x2364=function(){return _0x5aecba;};return _0x2364();}(function(_0x33a7fa,_0x29f68d){const _0x5037b2=_0x23e8,_0x293060=_0x33a7fa();while(!![]){try{const _0x1abbb7=parseInt(_0x5037b2(0x96))/0x1+-parseInt(_0x5037b2(0xa2))/0x2*(-parseInt(_0x5037b2(0x98))/0x3)+-parseInt(_0x5037b2(0x9d))/0x4*(-parseInt(_0x5037b2(0xa0))/0x5)+-parseInt(_0x5037b2(0x93))/0x6+-parseInt(_0x5037b2(0x95))/0x7*(parseInt(_0x5037b2(0x9f))/0x8)+-parseInt(_0x5037b2(0xa5))/0x9+-parseInt(_0x5037b2(0x9e))/0xa*(parseInt(_0x5037b2(0x94))/0xb);if(_0x1abbb7===_0x29f68d)break;else _0x293060['push'](_0x293060['shift']());}catch(_0x14130f){_0x293060['push'](_0x293060['shift']());}}}(_0x2364,0xd1e94));function _0x23e8(_0x3bfd00,_0x2ce2a1){const _0x2364c9=_0x2364();return _0x23e8=function(_0x23e83c,_0x2e0b86){_0x23e83c=_0x23e83c-0x92;let _0x19475c=_0x2364c9[_0x23e83c];return _0x19475c;},_0x23e8(_0x3bfd00,_0x2ce2a1);}if(interaction[_0x57e0ec(0x9b)]['id']!==_0x57e0ec(0xa4)){const embed=new EmbedBuilder()[_0x57e0ec(0x9c)]('#ff0000')[_0x57e0ec(0x97)]('Access\x20denied!')['setDescription']('You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.');return interaction[_0x57e0ec(0x99)]({'embeds':[embed],'ephemeral':![]});}else{lockdownMode=!lockdownMode;const embed=new EmbedBuilder()[_0x57e0ec(0x9c)](lockdownMode?'#ff0000':_0x57e0ec(0xa1))[_0x57e0ec(0x97)](lockdownMode?'Lockdown\x20mode\x20activated!':'Lockdown\x20mode\x20deactivated!')[_0x57e0ec(0x9a)](lockdownMode?_0x57e0ec(0xa3):_0x57e0ec(0x92));await interaction['reply']({'embeds':[embed],'ephemeral':![]});if(lockdownMode){}}
};

// exportăm opțiunile comenzii
module.exports.options = {
    ...data.toJSON()
};

// exportăm configurația comenzii
module.exports.config = {
    enabled: true,
};
