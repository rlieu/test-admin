const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyA_zLJNeHik17VpCEQZcJ7MOSG0xKST-zQ",
    authDomain: "cmc-api.firebaseapp.com",
    databaseURL: "https://cmc-api.firebaseio.com",
    projectId: "cmc-api",
    storageBucket: "cmc-api.appspot.com",
    messagingSenderId: "849334807828"
};

firebase.initializeApp(config);

firebase.firestore().collection('tokens').get().then((data) => {

    const coinList = data.docs.map((doc) => {
      return doc.data()
    })
    
    console.log(coinList)
})