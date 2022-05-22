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


    $("#loginBtn").click(function() {

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function() {
                window.location.href = "../index.html";

            })
            .catch(function(error) {
                alert(error.message);
            })


    })




    $(".registerBtn").click(function() {

        var email = $(".email").val();
        var password = $(".password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function() {

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function() {
                        window.location.href = "../index.html";
                    })

            }).catch(function(error) {
                alert(error.message);
            })

    })



    $("#resetpassword").click(function() {
        const email = $("#email").val();

        firebase.auth().sendPasswordResetEmail(email)
            .then(function() {
                alert("Sıfırlama Linki Gönderildi !")
                window.location.href = "./index.html";


            })
            .catch(function(error) {
                alert(error.message);
            });
    })



})


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});