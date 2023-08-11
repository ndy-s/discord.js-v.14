require('dotenv/config');
const { ContextMenuCommandBuilder, ApplicationCommandType, REST, Routes } = require('discord.js');

const commandsData = [
    new ContextMenuCommandBuilder()
        .setName('User information')
        .setType(ApplicationCommandType.User),
    
    new ContextMenuCommandBuilder()
        .setName('Translate Message')
        .setType(ApplicationCommandType.Message),

    // Notes: Using this will replace your slash commands so, if you do have slash commands
    // that you're manually registering then it's highly recommended that you use your
    // SlashCommandBuilder over here or you can just pass in your command objects.

    // new SlashCommandBuilder
];

const rest = new REST().setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Refreshing context menu commands');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commandsData },

            // If you want to registering to a specific server
            // Routes.applicationGuildCommand('bot id', 'server id')
        )

        console.log('Succesfully registered context menu commands');
    } catch (error) {
        console.error(error);   
    }
})();