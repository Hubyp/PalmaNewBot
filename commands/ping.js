const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Shows the latency of the bot.");
module.exports.execute = async (client, interaction) => {

    return interaction.reply({ content: `${Math.floor(client.ws.ping)}`, ephemeral: false });
   
};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
};