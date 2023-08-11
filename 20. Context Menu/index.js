require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', () => console.log(`${client.user.username} is online.`));

client.on('interactionCreate', (interaction) => {
    // Message Context Menu Command Handler
    // if (!interaction.isMessageContextMenuCommand()) return;

    // if (interaction.commandName === 'Translate Message') {
    //     const targetMessage = interaction.targetMessage;

    //     interaction.reply(`Original message: ${targetMessage}\nTranslated message: ...`);
    // }

    // User Context Menu Command Handler
    if (!interaction.isUserContextMenuCommand()) return;
    
    if (interaction.commandName === 'User information') {
        const targetUser = interaction.targetUser;

        interaction.reply(`Username: ${targetUser.username}\nID: ${targetUser.id}\nUser tag: ${targetUser.tag}`);
    }
});

client.login(process.env.TOKEN)