const Permissions = require('eris').Constants.Permissions;

//TODO: Clean them / mute case sensitivity
//TODO: Clean them / mute nicknames
//TODO: Should userIDs override the rest of the permissions? I think so - ALL OF THIS NEEDS TO BE FIXED
//TODO: Serverwide mute?

bot.registerCommand('mute', (msg, args) => {
    if(args.length === 0) return 'Por Favor diga um `Usuário`';

    let toFind = bot.users.find(u => u.username === args[0]);
    if(!toFind) return 'Por Favor diga um `Usuário` válido';

    bot.editChannelPermissions(msg.channel.id, msg.author.id, 0, Permissions.sendMessages);
}, {
    description: 'Muta um Usuário especifico',
    fullDescription: 'Muta  um Usuário no Chat em que o comando foi utilizado',
    usage: '<Node de Usuário>',
    requirements: {
        permissions: {
            "manageMessages": true
        }
    }
});

let clean = bot.registerCommand('clean', (msg, args) => {
    let toDelete = parseInt(args.length > 0 ? args[0] : 10);
    if(!toDelete) return 'Por Favor diga um `Número` válido';

    bot.purgeChannel(msg.channel.id, toDelete + 1).then(del => {
        bot.createMessage(msg.channel.id, `${del - 1} Mensagens Deletadas`).then(msg => {
            setTimeout(() => bot.deleteMessage(msg.channel.id, msg.id), 4000);
        });
    });
}, {
    description: 'Deletar Mensagens',
    fullDescription: 'O Bot irá deletar a quantidade especificada de mensagens de todo mundo',
    usage: '<Número De Mensagens>',
    requirements: {
        permissions: {
            "manageMessages": true
        }
    }
});
