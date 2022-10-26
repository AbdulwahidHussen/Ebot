const { Telegraf } = require("telegraf");

const bot = new Telegraf('5450453330:AAE-v-2APq8VWLpCZ47Oq2IKYjpH9rJyIqo');
const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();
 