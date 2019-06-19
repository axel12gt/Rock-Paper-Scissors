    // calls firebase
    var firebaseConfig = {
        apiKey: "AIzaSyD2YDjamnsOsIntlBEhlS8Gb9pe-6G-6lk",
        authDomain: "liveactionrps.firebaseapp.com",
        databaseURL: "https://liveactionrps.firebaseio.com",
        projectId: "liveactionrps",
        storageBucket: "liveactionrps.appspot.com",
        messagingSenderId: "448755254185",
        appId: "1:448755254185:web:d3c398d9e23a580c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // reference to firebase database
    var database = firebase.database()

    // game object
    var game = {
        

    }