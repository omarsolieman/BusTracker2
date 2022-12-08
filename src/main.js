import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import { getAuth,connectAuthEmulator } from 'firebase/auth';
import './output.css'
import './registerServiceWorker'

/* code from our Firebase console */
const firebaseConfig = {
  apiKey: "AIzaSyC3GybbCuvFQHyHHTHDCz1MBJ8YB7UTxBo",
  authDomain: "bustrack3r.firebaseapp.com",
  projectId: "bustrack3r",
  storageBucket: "bustrack3r.appspot.com",
  messagingSenderId: "1092781724793",
  appId: "1:1092781724793:web:235c22f3348482cb9fb0a8",
  measurementId: "G-286HKT8LDR"
};

// Initialize Firebase
initializeApp(firebaseConfig)

if (location.hostname === "locahhlhost") {
  connectAuthEmulator(getAuth(), "http://localhost:8080");
}

const app = createApp(App)

app.use(router)

app.mount('#app')
