const {App} = require("@slack/bolt");
require("dotenv").config();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.command("/testcommand", async ({command, ack, say}) => {
    try {
        await ack();
        say("Yay! That worked!");
    } catch (e) {
        console.log(e);
        console.error(e);
    }
});

app.message(/hey/, async({ command, say}) => {
    try {
        say("Yay! Message Worked!");
    } catch (e) {
        console.log(e);
        console.error(e);
    }
});

const startApp = async () => {
    const port = 3000; 
    await app.start(process.env.PORT || port);
    console.log(`Slack Bolt app is running on port ${port}!`);
}; 

startApp(); 