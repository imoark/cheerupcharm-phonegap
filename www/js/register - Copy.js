
    const appFire = initializeApp();
    const database = firebase.database();
    let elems = getDOMElements();
    let Nowymdhms　=　new Date();
    let NowYear = Nowymdhms.getFullYear();
    let NowMon = Nowymdhms.getMonth() + 1;
    let NowDay = Nowymdhms.getDate();
    let today = NowMon + "/" + NowDay + "/" + NowYear;


// console.log("Success: ");

    //register a user
    elems.registerButton.addEventListener("click", function() {
      let name_ = elems.regnameField.value;
      let email_ = elems.regemailField.value;
      let password_ = elems.regpasswordField.value;
        
      firebase.auth().createUserWithEmailAndPassword(email_, password_).then(function(user_) {
        console.log("Success: ", user_);
        // registerMessage(user_);

        //get a user who is logging in
        let currentUser = firebase.auth().currentUser;

        //get a userid
        let userId = currentUser.uid

        // register user db
        firebase.database().ref('users/' + userId).set({
          name: name_,
          email: email_,
          password: password_,
          createdate: today
        });

    console.log("DB succeed!");
        localStorage.setItem('test', 0);
        myPage();
        //go to my page
        // location.href = "/mypage.html";

        }).catch(function(err_) {
        console.log("Error: ", err_)
      });
    });


    
    //log in 
    elems.loginButton.addEventListener("click", function() {
      var email_ = elems.logemailField.value;
      var password_ = elems.logpasswordField.value;

      firebase.auth().signInWithEmailAndPassword(email_, password_).then(function(user_) {
 
        console.log("Signed in: ", user_);
        localStorage.setItem('test', 1);
        myPage();
      });
     
    });

    //log out 
    elems.logoutButton.addEventListener("click", function() {
      firebase.auth().signOut().then(function() {
       console.log("Signed out.");
      });
    });

    

    function myPage(){
        firebase.auth().onAuthStateChanged(function(user_) {
            if(user_) {
              console.log(user_);

              location.href = "/mypage.html";
            }
            else {
              console.log("nouser");
              location.href = "/index.html";
            }
        });
    }
    //check whether a user is logging in or not
    firebase.auth().onAuthStateChanged(function(user_) {
        if(user_) {
          elems.userStatus.textContent = user_.email;
          elems.loginContainer.style.display = "none";
          elems.logoutContainer.style.display = "block";
        }
        else {
          elems.userStatus.textContent = "";
          elems.loginContainer.style.display = "block";
          elems.logoutContainer.style.display = "none";
        }
    });




    //get elements 
    function getDOMElements() {
        return {
          "regnameField": document.getElementById("name-register"),
          "regemailField": document.getElementById("email-register"),
          "regpasswordField": document.getElementById("password-register"),
          "registerButton": document.getElementById("submit-register"),
          "registerMessage":document.getElementById("register-message"),
          "loginContainer": document.getElementById("container-login"),
          "logoutContainer": document.getElementById("container-logout"),
          "logemailField": document.getElementById("email-login"),
          "logpasswordField": document.getElementById("password-login"),
          "loginButton": document.getElementById("submit-login"),
          "userStatus": document.getElementById("status-user"),
          "logoutButton": document.getElementById("submit-logout")
        };
    }

    
    // Initialize Firebase
    function initializeApp(){
        var config = {
            apiKey: "AIzaSyB54gHFoCICkOQZ-lcdc1m1jVi-EW3NNOc",
            authDomain: "charmupapp.firebaseapp.com",
            databaseURL: "https://charmupapp.firebaseio.com",
            projectId: "charmupapp",
            storageBucket: "charmupapp.appspot.com",
            messagingSenderId: "263698113549"
          };
        firebase.initializeApp(config);
    }

