import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
document.onselectstart = new Function("event.returnValue=false");
document.getElementsByTagName('img')[0].onmousedown = function (e) {
    e.preventDefault()
};