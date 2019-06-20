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

    var h1 = $("<h1>")
    var div = $("<div>")

    // game object
    var game = {
        // renders page
        start: function () {
            var header = $("<div>")
            header.addClass("text-center headerT bg-primary")
            header.text("Rock Paper Scissor World Championship")
            $("body").append(header)

            var container = $("<div>")
            container.addClass("container mt-5")
            header.after(container)

            var table = $("<div>")
            container.append(table)

            var row1 = $("<div>")
            row1.addClass("row text-center")
            table.append(row1)

            var column1 = $("<div>")
            column1.addClass("col-6")
            row1.append(column1)
            
            var column2 = $("<div>")
            column2.addClass("col-6")
            row1.append(column2)

            var img1 = $('<img>')
            img1.attr('src', 'assets/imgs/pcimg.png')
            img1.attr("height", "100px")
            img1.attr("width", "100px")
            img1.addClass("vs")
            column1.append(img1)

            var img2 = $("<img>")
            img2.attr("src", "assets/imgs/multiplayer.png")
            img2.attr("height", "100px")
            img2.attr("width", "100px")
            img2.addClass("vs")
            column2.append(img2)

            var vsComputer = $('<h1>')
            vsComputer.text('Vs Computer')
            column1.append(vsComputer)

            var online = $('<h1>')
            online.text('Online')
            column2.append(online)
        }

    }

    game.start()