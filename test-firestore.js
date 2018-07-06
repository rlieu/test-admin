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

firebase.firestore().collection('tokens').get().then(function(querySnapshot){
    const data = querySnapshot.docs.map(function (documentSnapshot) {
        return documentSnapshot.data();
    });
    const entries = {
        data: data,
        total: 200
    };
    console.log(entries);
    // let data = {};
    // querySnapshot.forEach(function(doc) {
    //     data[doc.id] = doc.data();
    // });
    // console.log(data);
});