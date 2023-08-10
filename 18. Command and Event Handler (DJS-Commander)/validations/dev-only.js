module.exports = ( interaction, commandsObj ) => {
    if (commandsObj.devOnly) {
        if (interaction.member.id !== '1234') {
            interaction.reply("This command is for developers only.");
            return true;
        }
    }
} 