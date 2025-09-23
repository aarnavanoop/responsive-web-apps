import { createApp } from 'vue'
import './styles/global.css'
import App from './App.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

const app = createApp(App)

app.component('HeaderComponent', HeaderComponent)
app.component('FooterComponent', FooterComponent)

app.mount('#app')