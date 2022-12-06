const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('youtube')
    .setDescription('Return a youtube button.'),
    async execute(interaction, client) {

        const row = new ActionRowBuilder()
        .addComponents(
        new ButtonBuilder()
        .setLabel(`Click and show to my youtube!`)
        .setURL("https://youtube.com/@thendrra")
        .setStyle(ButtonStyle.Link)
        )
        

        await interaction.reply({
            components: [row]
        })
    }
}