const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

// variabila de stare pentru lockdown
let lockdownMode = false;

const data = new SlashCommandBuilder()
    .setName('lockdown')
    .setDescription('Activates/deactivates lockdown mode for the bot.');

module.exports.execute = async (client, interaction) => {
    // verificăm dacă utilizatorul are permisiunea necesară pentru a activa/dezactiva modul de lockdown
    if (interaction.user.id !== "948916911293497344") {
        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Access denied!')
            .setDescription('You do not have permission to use this command.')

        return interaction.reply({ embeds: [embed], ephemeral: false });
    } else {
        // dacă utilizatorul are permisiunea necesară, modificăm variabila de stare
        lockdownMode = !lockdownMode;

        // generăm mesajul de răspuns în funcție de starea curentă a modului de lockdown
        const embed = new EmbedBuilder()
            .setColor(lockdownMode ? '#ff0000' : '#00ff00')
            .setTitle(lockdownMode ? 'Lockdown mode activated!' : 'Lockdown mode deactivated!')
            .setDescription(lockdownMode ? 'The bot is now in lockdown mode. Only users with the necessary permissions can use its commands.' : 'The bot is no longer in lockdown mode.');

        // trimitem răspunsul
        await interaction.reply({ embeds: [embed], ephemeral: false });

        // dacă am activat modul de lockdown, îl forțăm să iasă din program
        if (lockdownMode) {
          //  process.exit();
        }
    }
};

// exportăm opțiunile comenzii
module.exports.options = {
    ...data.toJSON()
};

// exportăm configurația comenzii
module.exports.config = {
    enabled: true,
};
