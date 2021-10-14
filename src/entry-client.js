import { createApp } from './main'
import VueSocketIO from 'vue-3-socket.io'
const { app, router, store } = createApp()

app.use(new VueSocketIO({
  debug: false,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

router.isReady().then(() => {
  app.mount('#app')
})