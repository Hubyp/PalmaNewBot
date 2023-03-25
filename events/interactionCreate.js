const Discord = require("discord.js");

module.exports = async (client, interaction) => {
    if (interaction.isCommand()) {
        if (!interaction.guildId) return;
           
        try {
            const cmd = client.commands.get(interaction.commandName || null);
            await cmd.execute(client, interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true // optiunea ephemeral setata pe true
            });
        }        
    }
};