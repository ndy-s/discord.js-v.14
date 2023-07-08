require('dotenv').config();
const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
    intents: [
        // Intents is set of permissions that your Bot 
        // can use in order to get access to a set of events
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

const roles = [
    {
        id: '1104728054988800010',
        label: 'Green'
    },
    {
        id: '1104728095128293457',
        label: 'Blue'
    },
    {
        id: '1104728124819787917',
        label: 'Red'
    },
]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1104657752825004064');
        if (!channel) return;

        const row = new ActionRowBuilder();

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder()
                    .setCustomId(role.id)
                    .setLabel(role.label)
                    .setStyle(ButtonStyle.Primary)
            );
        });

        await channel.send({
            content: 'Claim or remove a role bellow.',
            components: [row],
        });

        process.exit();
    } catch (error) {
        console.log(error);
    }
});

client.login(process.env.TOKEN);