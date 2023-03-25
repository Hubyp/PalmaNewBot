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
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason');
    const author = interaction.user;

    // Check if the user who issued the command has the necessary permission
    if (!interaction.member.permissions.has('KICK_MEMBERS')) {
        const embed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Access denied!')
            .setDescription('You do not have the necessary permission to issue warnings.')

        return interaction.reply({ embeds: [embed], ephemeral: false });
    }

    // Check if the user to be warned is already registered in the Map
    if (!warns.has(user.id)) {
        warns.set(user.id, 0);
    }

    // Increment the number of warnings for the user
    const numWarnings = warns.get(user.id) + 1;
    warns.set(user.id, numWarnings);

    // Check if the user has already received enough warnings to be kicked
    if (numWarnings >= 5) {
        const member = interaction.guild.members.cache.get(user.id);
        await member.kick(`You have received 5 warnings for: ${reason}.`);
        warns.delete(user.id);

        const embed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle(`${user.username} has been kicked from the server!`)
            .setDescription(`They received 5 warnings for: ${reason}.`)
        await interaction.reply({ embeds: [embed], ephemeral: false });

        const dmEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle(`You have been kicked from the server!`)
            .setDescription(`You received 5 warnings for: ${reason}.`)
        return user.send({ embeds: [dmEmbed] });
    }

    const embed = new MessageEmbed()
        .setColor('#ffff00')
        .setTitle(`${user.username} has received a warning!`)
        .setDescription(`Reason: ${reason}\nTotal number of warnings: ${numWarnings}`)
    await interaction.reply({ embeds: [embed], ephemeral: false });

    const dmEmbed = new MessageEmbed()
        .setColor('#ffff00')
        .setTitle(`You have received a warning!`)
        .setDescription(`Reason: ${reason}\nTotal number of warnings: ${numWarnings}`)
    return user.send({ embeds: [dmEmbed] });
};
  
module.exports.options = {
    ...data.toJSON()
};
  
module.exports.config = {
    enabled: true,
};
