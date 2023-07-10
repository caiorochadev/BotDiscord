const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder() //instanciar
    .setName("ping")
    .setDescription("Responde com 'Pong!'"),

  async execute(interaction) {
    await Intersection.reply("pong!")
  }
}