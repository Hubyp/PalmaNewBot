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
    if (!interaction.member.permissions.has('BAN_MEMBERS')) {
        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Access denied!')
            .setDescription('You do not have permission to use this command.')

        return interaction.reply({ embeds: [embed], ephemeral: false });
    } else {
        const bannedUser = interaction.options.getUser('userid');
        const banList = await interaction.guild.bans.fetch();
        const bannedMember = banList.find(user => user.user.id === bannedUser.id);

        if (!bannedMember) {
            const embed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Invalid user!')
                .setDescription('The user you provided is not banned from this server.')

            return interaction.reply({ embeds: [embed], ephemeral: false });
        }

        await interaction.guild.members.unban(bannedUser);

        const embed = new EmbedBuilder()
            .setColor('#00ff00')
            .setTitle(`${bannedUser.username} has been unbanned!`)
        await interaction.reply({ embeds: [embed], ephemeral: false });
    }
};

module.exports.options = {
    ...data.toJSON()
};

module.exports.config = {
    enabled: true,
};
