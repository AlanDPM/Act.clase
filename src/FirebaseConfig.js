import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const FirebaseConfig = {
  apiKey: "AIzaSyA82zExN8o2cCp1YaJnbwRtFmu9dmcCU80",
  authDomain: "prueba-51685.firebaseapp.com",
  projectId: "prueba-51685",
  storageBucket: "prueba-51685.appspot.com",
  messagingSenderId: "410207780231",
  appId: "1:410207780231:web:66d269a8f645d092582722"
}

const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}