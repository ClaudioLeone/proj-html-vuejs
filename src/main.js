import { createApp } from 'vue'
import '../src/style/general.scss'
import App from './App.vue'

createApp(App)
.component('font-awesome-icon', 'FontAwesomeIcon')
.mount('#app')
