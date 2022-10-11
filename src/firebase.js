import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAkDTN5eNaw2rHxiAXuoHT28mDmcoMMupY",
  authDomain: "task-fa3a0.firebaseapp.com",
  projectId: "task-fa3a0",
  storageBucket: "task-fa3a0.appspot.com",
  messagingSenderId: "336899303864",
  appId: "1:336899303864:web:bb95c516da7404e8d6874d",
  measurementId: "G-01253TS4R3"
})

export const auth = app.auth()
export default app
