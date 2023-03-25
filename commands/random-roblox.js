const Discord = require("discord.js");
const { SlashCommandBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const data = new SlashCommandBuilder()
    .setName('random-roblox')
    .setDescription('Shows information about a random popular Roblox game.');

module.exports.execute = async (client, interaction) => {
    const url = 'https://games.roblox.com/v2/users/1/games?accessFilter=2&limit=10&sortOrder=Asc';
    const response = await fetch(url);
    const json = await response.json();
    const games = json.data;

    if (Array.isArray(games) && games.length > 0) {
        const randomGame = games[Math.floor(Math.random() * games.length)];
        const gameId = randomGame.id;
        const gameUrl = `https://www.roblox.com/games/${gameId}/`;

        // make a new request to get more information about the game
        const infoUrl = `https://games.roblox.com/v1/games/${gameId}/`;
        const infoResponse = await fetch(infoUrl);
        const infoJson = await infoResponse.json();
        const creatorName = infoJson.creatorName;
        const created = infoJson.created;
        const updated = infoJson.updated;
        const serverSize = infoJson.playableDeviceTypesLength;
        const visits = infoJson.visits;

        const message = `**${randomGame.name}**\n\n` +
            `**Creator:** ${creatorName}\n` +
            `**Created:** ${created}\n` +
            `**Last updated:** ${updated}\n` +
            `**Server size:** ${serverSize}\n` +
            `**Visits:** ${visits}\n\n` +
            `**Link:** ${gameUrl}`;

        await interaction.reply({ content: message, ephemeral: false });
    } else {
        await interaction.reply({ content: 'Sorry, I couldn\'t find any games.', ephemeral: true });
    }
};

module.exports.options = {
    ...data.toJSON()
};

module.exports.config = {
    enabled: true,
};
