import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'





const firebaseConfig = {
    apiKey: "AIzaSyDGI87oO3_UaBzqrQc5fWHnoT3mhqKGFao",
    authDomain: "outrdevents-raymundo.firebaseapp.com",
    databaseURL: "https://outrdevents-raymundo.firebaseio.com",
    projectId: "outrdevents-raymundo",
    storageBucket: "outrdevents-raymundo.appspot.com",
    messagingSenderId: "255781915941",
    appId: "1:255781915941:web:cbc347cb712e2460"
}
firebase.initializeApp(firebaseConfig);






const db = firebase.firestore()
const ref = firebase.storage().ref();

export {
    db,
    ref,
    firebase,
}

export default firebase