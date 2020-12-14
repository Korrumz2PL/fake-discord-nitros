//welcomescreen
const figlet = require('figlet')
figlet.text('Welcome!', {
    font: 'epic',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
//end welcomescreen
const EventEmmiter = require('events')
let emmiter = new EventEmmiter();

// emmiter.setMaxListeners(0);

emmiter.on('message', function(msg) {

    console.log('Your fake discord nitro gift ' + msg);

})
setInterval(function () {
    emmiter.emit("message", `https://discord.gift/${Math.floor(Math.random() * 10000000000000)}`)
}, 200)
// emmiter.emit("message", `https://discord.gift/${gifts[Math.floor(Math.random()*gifts.length)]}`)