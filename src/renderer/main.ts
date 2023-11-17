import { createApp } from 'vue';

import './style.css';

import App from './App.vue';

const app = createApp(App);

app.mount('#app');

if (window.electronAPI.getNodeEnv() === 'development') {
  import('@vue/devtools').then((module) => {
    module.connect(`http://localhost`);
  });
}
