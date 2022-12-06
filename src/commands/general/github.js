const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('github')
    .setDescription('Return a github button.'),
    async execute(interaction, client) {

        const row = new ActionRowBuilder()
        .addComponents(
        new ButtonBuilder()
        .setLabel(`Click and show to my github!`)
        .setURL("https://github.com/thendra-s")
        .setStyle(ButtonStyle.Link)
        )
        

        await interaction.reply({
            components: [row]
        })
    }
}