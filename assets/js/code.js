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
        // renders start page
        start: function () {
            var header = $("<div>")
            header.addClass("text-center headerT bg-primary")
            header.text("Rock Paper Scissor World Championship")
            $("body").append(header)
            // calls bootstrap container class and puts it in dom
            var container = $("<div>")
            container.addClass("container mt-5")
            header.after(container)
            // appends table div to container
            var table = $("<div>")
            container.append(table)
            // sets a row for the table
            var row1 = $("<div>")
            row1.addClass("row text-center")
            table.append(row1)
            // sets a column to the row
            var column1 = $("<div>")
            column1.addClass("col-6")
            row1.append(column1)
            
            var column2 = $("<div>")
            column2.addClass("col-6")
            row1.append(column2)
            // sets the image to the column
            var img1 = $("<img>")
            img1.attr("src", "assets/imgs/pcimg.png")
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
            //sets the buttons to the img
            var vsComputer = $("<h1>")
            vsComputer.append("<button type='button'>Computer</button>")
            column1.append(vsComputer)

            var online = $("<h1>")
            online.append("<button type='button'>Online</button>")
            column2.append(online)
        }

    }

    game.start()