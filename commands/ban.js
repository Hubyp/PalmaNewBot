const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from the server.')
    .addUserOption(option => option.setName('user').setDescription('The user to ban.').setRequired(true));

module.exports.execute = async (client, interaction) => {
    const userToBan = interaction.options.getUser('user');
    const memberToBan = interaction.guild.members.cache.get(userToBan.id);

    if (!interaction.member.permissions.has('BAN_MEMBERS')) {
        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Access denied!')
            .setDescription('You do not have permission to use this command.')
            
        return interaction.reply({ embeds: [embed], ephemeral: false });
    } else if (!memberToBan.bannable) {
        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Error!')
            .setDescription('I cannot ban this user. Please check my permissions and try again.')

        return interaction.reply({ embeds: [embed], ephemeral: false });
    } else {
        const reason = interaction.options.getString('reason') || 'No reason specified.';
        await memberToBan.ban({ reason: reason });

        const embed = new EmbedBuilder()
            .setColor('#00ff00')
            .setTitle(`User banned: ${userToBan.username}`)
            .setDescription(`Reason: ${reason}`)

        return interaction.reply({ embeds: [embed], ephemeral: false });
    }
};
module.exports.options = {
    ...data.toJSON()
};
module.exports.config = {
    enabled: true,
};
