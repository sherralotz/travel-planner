import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css';
import axios from 'axios';   
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons';

// library.add(faUser,faTable, faListUl);
// Configure axios defaults
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5173';

const app = createApp(App); 
// app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');