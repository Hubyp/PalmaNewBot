const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({
    intents:
     [
           GatewayIntentBits.Guilds,
           GatewayIntentBits.GuildMembers,
           GatewayIntentBits.GuildEmojisAndStickers,
           GatewayIntentBits.GuildIntegrations,
           GatewayIntentBits.GuildWebhooks,
           GatewayIntentBits.GuildInvites,
           GatewayIntentBits.GuildVoiceStates,
           GatewayIntentBits.GuildPresences,
           GatewayIntentBits.GuildMessages,
           GatewayIntentBits.GuildMessageReactions,
           GatewayIntentBits.GuildMessageTyping,
           GatewayIntentBits.DirectMessages,
           GatewayIntentBits.DirectMessageReactions,
           GatewayIntentBits.DirectMessageTyping,
           GatewayIntentBits.MessageContent],
           shards: "auto",
           partials:
          [
          Partials.Message,
          Partials.Channel,
          Partials.GuildMember,
          Partials.Reaction, Partials.GuildScheduledEvent,
          Partials.User,
          Partials.ThreadMember
        ]});
     
function _0x3766(_0x308a8c,_0x1d5e23){const _0x2122dd=_0x2122();return _0x3766=function(_0x3766c7,_0x1e66e6){_0x3766c7=_0x3766c7-0x1de;let _0x243a28=_0x2122dd[_0x3766c7];return _0x243a28;},_0x3766(_0x308a8c,_0x1d5e23);}function _0x2122(){const _0xcb2404=['split','1mFEheK','forEach','filter','resolve','./events/','pop','No\x20events\x20dir.','3558HvsgjY','585yJjIxm','260sOrEoi','24776hNmeqm','bind','existsSync','1719212ZKcNWI','628NUXMjd','path','name','utf-8','114360eHCLhZ','./prefix-cmd','cache','log','discord-sync-commands-v14','./commands','Invalid\x20command\x20file.','50420HUFiub','./commands/','Collection','commands','1046731hwAzLo','No\x20events\x20dir','options','\x20Prefix\x20command\x20saved','./events','readdirSync','set','\x20was\x20saved.','No\x20props.','23238guxCyK','./prefix-cmd/','map'];_0x2122=function(){return _0xcb2404;};return _0x2122();}const _0x1f9afa=_0x3766;(function(_0x2f25e4,_0x3da807){const _0x207737=_0x3766,_0x3a3cc2=_0x2f25e4();while(!![]){try{const _0x34fe43=-parseInt(_0x207737(0x1fa))/0x1*(-parseInt(_0x207737(0x1e9))/0x2)+parseInt(_0x207737(0x201))/0x3*(parseInt(_0x207737(0x1de))/0x4)+-parseInt(_0x207737(0x203))/0x5*(parseInt(_0x207737(0x1f6))/0x6)+parseInt(_0x207737(0x1ed))/0x7+parseInt(_0x207737(0x204))/0x8*(-parseInt(_0x207737(0x202))/0x9)+-parseInt(_0x207737(0x1e2))/0xa+parseInt(_0x207737(0x207))/0xb;if(_0x34fe43===_0x3da807)break;else _0x3a3cc2['push'](_0x3a3cc2['shift']());}catch(_0x1c1a92){_0x3a3cc2['push'](_0x3a3cc2['shift']());}}}(_0x2122,0x192bc));const Discord=require('discord.js'),fs=require('fs'),Path=require(_0x1f9afa(0x1df));client[_0x1f9afa(0x1ec)]=global[_0x1f9afa(0x1ec)]=new Discord[(_0x1f9afa(0x1eb))]();const synchronizeSlashCommands=require(_0x1f9afa(0x1e6)),eventsRegister=()=>{const _0x5376e0=_0x1f9afa;let _0x30a256=Path[_0x5376e0(0x1fd)](__dirname,_0x5376e0(0x1f1));if(!fs['existsSync'](_0x30a256))return console[_0x5376e0(0x1e5)](_0x5376e0(0x1ee));fs[_0x5376e0(0x1f2)](_0x30a256,{'encoding':_0x5376e0(0x1e1)})[_0x5376e0(0x1fc)](_0x170a65=>_0x170a65[_0x5376e0(0x1f9)]('.')[_0x5376e0(0x1ff)]()==='js')['forEach'](_0x144913=>{const _0x3d3fa3=_0x5376e0;let _0x259425=require(_0x3d3fa3(0x1fe)+_0x144913);if(!_0x259425)return console[_0x3d3fa3(0x1e5)](_0x3d3fa3(0x1f5));console[_0x3d3fa3(0x1e5)](_0x144913+_0x3d3fa3(0x1f4)),client['on'](_0x144913[_0x3d3fa3(0x1f9)]('.')[0x0],_0x259425[_0x3d3fa3(0x205)](null,client)),delete require[_0x3d3fa3(0x1e4)][require[_0x3d3fa3(0x1fd)]('./events/'+_0x144913)];});},commandsRegister=()=>{const _0x3a5794=_0x1f9afa;let _0x12f182=Path[_0x3a5794(0x1fd)](__dirname,_0x3a5794(0x1e7));if(!fs['existsSync'](_0x12f182))return console['log'](_0x3a5794(0x200));fs[_0x3a5794(0x1f2)](_0x12f182,{'encoding':_0x3a5794(0x1e1)})[_0x3a5794(0x1fc)](_0x4fab31=>_0x4fab31[_0x3a5794(0x1f9)]('.')[_0x3a5794(0x1ff)]()==='js')[_0x3a5794(0x1fb)](_0x11ac31=>{const _0x36a367=_0x3a5794;let _0x3fa92c=require(_0x36a367(0x1ea)+_0x11ac31);if(!_0x3fa92c||!_0x3fa92c['options']||!_0x3fa92c[_0x36a367(0x1ef)]['name'])return console[_0x36a367(0x1e5)](_0x36a367(0x1e8));console[_0x36a367(0x1e5)](_0x11ac31+'\x20command\x20saved'),client[_0x36a367(0x1ec)]['set'](_0x3fa92c[_0x36a367(0x1ef)][_0x36a367(0x1e0)],_0x3fa92c),delete require['cache'][require[_0x36a367(0x1fd)](_0x36a367(0x1ea)+_0x11ac31)];});},prefix='!',commandsPrefix=_0xa31e59=>{const _0x124133=_0x1f9afa;let _0x15ace6=Path['resolve'](__dirname,_0x124133(0x1e3));if(!fs[_0x124133(0x206)](_0x15ace6))return console[_0x124133(0x1e5)]('No\x20events\x20dir.');fs[_0x124133(0x1f2)](_0x15ace6,{'encoding':_0x124133(0x1e1)})[_0x124133(0x1fc)](_0x2a1684=>_0x2a1684['split']('.')[_0x124133(0x1ff)]()==='js')['forEach'](_0x20c8e6=>{const _0xabc1ba=_0x124133;let _0x88bc99=require(_0xabc1ba(0x1f7)+_0x20c8e6);if(!_0x88bc99||!_0x88bc99[_0xabc1ba(0x1ef)]||!_0x88bc99[_0xabc1ba(0x1ef)]['name'])return console[_0xabc1ba(0x1e5)](_0xabc1ba(0x1e8));const _0x331a51=''+_0xa31e59+_0x88bc99[_0xabc1ba(0x1ef)]['name'];console['log'](_0x331a51+_0xabc1ba(0x1f0)),client[_0xabc1ba(0x1ec)][_0xabc1ba(0x1f3)](_0x331a51,_0x88bc99),delete require['cache'][require['resolve'](_0xabc1ba(0x1f7)+_0x20c8e6)];});},slashCommandsRegister=()=>{const _0x163f58=_0x1f9afa,_0x52aa74=client['commands'][_0x163f58(0x1fc)](_0x21e6ed=>_0x21e6ed[_0x163f58(0x1ef)]),_0x4d09e9={'debug':!![]};synchronizeSlashCommands(client,_0x52aa74[_0x163f58(0x1f8)](_0x2aae78=>_0x2aae78['options']),_0x4d09e9);};
        
        eventsRegister();
        commandsRegister();
        slashCommandsRegister();
        commandsPrefix(prefix); // Apelarea funcției cu prefixul definit anterior

        process.on('unhandledRejection', error => {
            console.log(error);
        
        });;

client.login(process.env.TOKEN)
