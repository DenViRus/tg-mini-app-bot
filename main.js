import { Telegraf,  Markup} from "telegraf";
import { message } from 'telegraf/filters'

const token = '6681140162:AAFxLptFo0tCGFI4KUSWrqfFYo4bYySkbt0'
const webAppUrl = 'https://ang-mini-app-bot.web.app/'

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply(
    'Welcome! Click on the button below to launch the application',
    Markup.keyboard([
      Markup.button.webApp('send a message', `${webAppUrl}/feedback`),
    ]).resize(true)
  )
})

bot.on(message('web_app_data'), async (ctx) => {
  const data = ctx.webAppData.data.json()
  ctx.reply(`Your message: ${data?.feedback}` ?? 'empty message')
})

bot.launch()