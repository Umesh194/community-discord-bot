const { prefix } = require('../config.json');
const checkAuth = require('./commands/checkAuth');
const welcomeCommandHandler = require('./commands/welcome');
const addEventHandler = require('./commands/addEvent');
const scrapePage = require('./commands/scrape');
const helpHadler = require('./commands/helpHandler');

const messageHandler = (message, announcementChannel) => {
    if(!message.content.startsWith(prefix)) return;

    /* --------- Made Lowercase to deal with it easily ------------ */
    let messageContentinLowercase = message.content.toLowerCase()
    const messageWithoutPrefix = messageContentinLowercase.slice(prefix.length);
    const split = messageWithoutPrefix.split(/ +/);
    const command = split[0].toLowerCase();
    const args = split.slice(1);


    /* ------------------ Commands & Responses ----------------- */
    switch(command){
        case `welcome`: 
            welcomeCommandHandler(message, args);
            break;
            
        case `add-event`:
            addEventHandler(message, args, announcementChannel);
            break;

        case `auth`:
            checkAuth(message, args);
            break;

        case `scrape`:
            scrapePage(message, args);
            break;

        case `help`:
            helpHadler(message, args);
            break;

            
        case `ping`:
            message.channel.send('Willy here, live.');
            break;

        default:
            message.channel.send(`I haven't been programmed for that command yet.\n\n> We encourage you to add more commands and contribute to the development of the bot. It would really be a fun learning experience this pandemic. \n\nSend a PR with your contributions to our repository:\nhttps://github.com/DSCKGEC/community-discord-bot`)
    }
}

module.exports = messageHandler;