$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyDiuU66JdHXgvnbjOtHnL254O3fMoqSt2E",
        authDomain: "my-projects-bfab4.firebaseapp.com",
        databaseURL: "https://my-projects-bfab4-default-rtdb.firebaseio.com",
        projectId: "my-projects-bfab4",
        storageBucket: "my-projects-bfab4.appspot.com",
        messagingSenderId: "688859468287",
        appId: "1:688859468287:web:3a432c16f15d4cc7d057ca"
    };
    firebase.initializeApp(config);

    var current_user = "";

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

            current_user = user.uid;
            $(".profile-name").text(user.email);
            document.getElementById("logout").style.display = "";
            document.getElementById("logAndSign").style.display = "none";
        }

    })

    $("#logout").click(function() {
        firebase.auth().signOut()
            .then(function() {

                window.location.href = "index.html";
                console.log("cıkış yapıldı")
            })
    })

})

var logout = document.getElementById("logout");
logout.style.display = 'none';