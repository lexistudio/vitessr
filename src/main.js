import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'
import { store } from './store'
import VueSocketIO from 'vue-3-socket.io'

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  app.use(store)
  app.use(new VueSocketIO({
    debug: false,
    connection: 'http://localhost:3000',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  }))
  return { app, router }
}
