require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

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

let status = [
    {
        name: 'Under Control of Elite Global',
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=H5ohDQ-umHM&t=1730s',
    },
    {
        name: 'Custom Status 1',
    },
    {
        name: 'Custom Status 2',
        type: ActivityType.Watching,
    },
    {
        name: 'Custom Status 3',
        type: ActivityType.Listening,
    },
]

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 10000);
});

client.login(process.env.TOKEN);