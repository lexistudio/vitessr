import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'
import { store } from './store'

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  app.use(store)
  return { app, router, store }
}
