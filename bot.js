const { Telegraf } = require("telegraf");
require("dotenv").config({ path: "./.env" });

const bot = new Telegraf(process.env.TELEGRAM_BOTKEY);

bot.start(async (ctx) => {
  console.log("+++++ BOT START +++++");
  await startAction(ctx);
});

async function startAction(ctx) {
  const userId = ctx.from.id;
  let firstname = ctx.from.first_name;
  await bot.telegram.sendChatAction(userId, "typing");
  await bot.telegram.sendMessage(userId, `Hello ${firstname}`);
}

// Start the bot
bot.launch();
