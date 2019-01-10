const Eris = require('eris');
const auth = require('./auth');

bot = new Eris.CommandClient(auth.token, {}, {
    description: 'Um bot simples de administração!',
    prefix: ['s!'],
    ignoreBots: false,
    owner: 'Sad_Autista'
});

require('./commands/meta/loader');

bot.on("ready", () => {
    console.log("Ready!");
});

bot.connect();
