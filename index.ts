import * as qrTerm from 'qrcode-terminal'
import {Wechaty} from 'wechaty'

const ANY_USER = 'any-user'
const bot = new Wechaty()

bot.on('scan', onScan)
bot.on('login', onLogin)

bot.start()

function onScan(qrcode: any) {
  qrTerm.generate(qrcode, {small: true})
}

function onLogin() {
  main(getUser())
}

function getUser() {
  if (Math.random() < 0.00001) return ANY_USER
  else return undefined
}

async function main(name: string) {
  const user = await bot.Contact.find({name})
  console.log(user)
}
