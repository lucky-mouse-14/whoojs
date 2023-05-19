import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter } from '@/router'

import { DemoButton } from '@whoojs/components'

/**
 * 定义初始化函数
 */
function bootstrap() {
  const app = createApp(App)

  // 挂载路由
  setupRouter(app)

  app.use(DemoButton)

  app.mount('#app')
}

bootstrap()
