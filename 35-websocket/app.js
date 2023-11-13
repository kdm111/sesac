const express = require('express')
const app = express()
const PORT = 8080
const ws = require('ws')


app.set('view engine', 'ejs')

app.get('/', (req,  res) => {
  res.render('client')
})

const server = app.listen(PORT, () => {
  console.log(`Express App listening on http://localhost:${PORT}`)
})
const chats = []
const wsServer = new ws.Server({server})
const sockets = []// 클라이언트들을 담을 배열
wsServer.on('connection', (socket) => {
  sockets.push(socket)
  chats.forEach((chat) => {
    socket.send(`${JSON.stringify(chat)}`)
  })
  console.log('클라이언트 연결 완료')
  socket.on('message', (message) => {
    const chat = JSON.parse(message)
    chats.push(chat)
    sockets.forEach((socket) => {
      socket.send(`${message}`)
    })
  })
  socket.on('error', (error) => {
    console.error(`에러 발생 :: ${error}`)
  })
  socket.on('close', () => {
    console.log('클라이언트 연결 해지')
  })
})

