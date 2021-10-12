const app = require('express')()
const http = require('http').createServer(app)
const io = require("socket.io")(http, {
  cors: {
    origin: ["http://localhost:3000"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  },
  allowEIO3: true
});

const users = []

io.on("connection", (socket) => {
  console.log('Socket IO')

  users.push(socket.id)

  io.emit("newMess", users)
})

module.exports = {
  app, http
}