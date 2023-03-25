const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
.setName('userinfo')
.setDescription('Displays information about a user.')
.addUserOption(option => option.setName('target').setDescription('Select a user.'));

module.exports.execute = async (client, interaction) => {
const targetUser = interaction.options.getUser('target') || interaction.user;
const member = interaction.guild.members.cache.get(targetUser.id);
const roles = member.roles.cache.filter(r => r.id !== interaction.guild.id).map(r => r.toString()).join(' | ');
const createdAt = targetUser.createdAt.toLocaleDateString();
const joinedAt = member.joinedAt.toLocaleDateString();

const embed = new EmbedBuilder()
    .setColor('#00ffff')
    .setThumbnail(targetUser.displayAvatarURL({ dynamic: true }))
    .addFields(
        { name: 'Name', value: targetUser.username, inline: true },
        { name: 'Discriminator', value: targetUser.discriminator, inline: true },
        { name: 'ID', value: targetUser.id, inline: true },
        { name: 'Created At', value: createdAt, inline: true },
        { name: 'Joined At', value: joinedAt, inline: true },
        { name: 'Roles', value: roles || 'None', inline: false }
    )

        return interaction.reply({ embeds: [embed], ephemeral: false });
};

module.exports.options = {
...data.toJSON()
};
module.exports.config = {
enabled: true,
};