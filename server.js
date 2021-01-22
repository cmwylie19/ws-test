import "dotenv/config";
import Websocket from 'ws'

const { PORT } = process.env;
const wss = new Websocket.Server({port: PORT});

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
    ws.send(`Received message: ${message}`)
  })
  ws.send('Connected!')
})

