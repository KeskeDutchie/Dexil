const { client } = require('../main');

module.exports = {
    name: "offenses",
    description: "Shows the number of flags and offenses a user has. (MODS ONLY)",
    execute(message, args) {
        const member = message.mentions.members.first();

        if(!message.member.roles.cache.has('939667378948681730'))
            return message.reply("You do not have the correct permissions!");

        if(member == null)
            return message.reply("Please enter a valid member");

        client.validateOffender(member);

        return message.reply(`This user has ${client.offenders[member.id].offenses} offenses and ${client.offenders[member.id].flags.length} flags!`);
    }   
}