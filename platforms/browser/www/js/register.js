        const appFire = initializeApp();
        const database = firebase.database();
        let elems = getDOMElements();
        let Nowymdhms　=　new Date();
        let NowYear = Nowymdhms.getFullYear();
        let NowMon = Nowymdhms.getMonth() + 1;
        let NowDay = Nowymdhms.getDate();
        let today = NowMon + "/" + NowDay + "/" + NowYear;

        //register a user
        elems.registerButton.addEventListener("click", function() {
              let name_ = elems.regnameField.value;
              let email_ = elems.regemailField.value;
              let password_ = elems.regpasswordField.value;
              let playtimes_ = 0;
              let dogpicture_ = 0;
                
              firebase.auth().createUserWithEmailAndPassword(email_, password_).then(function(user_) {
                console.log("Success: ", user_);

                //get a user who is logging in
                let currentUser = firebase.auth().currentUser;

                //get a userid
                let userId = currentUser.uid

                // register user db
                firebase.database().ref('users/' + userId).set({
                  name: name_,
                  email: email_,
                  password: password_,
                  createdate: today,
                  playtimes: playtimes_,
                  dogpicture: dogpicture_,
                  logintimes: 0
                });

                console.log("DB succeed!");
                location.href = "mypage.html";

                }).catch(function(err_) {
                console.log("Error: ", err_)
              });
        });

        elems.loginButton.addEventListener("click", function() {
          alert("signin");
            var email_ = elems.logemailField.value;
            var password_ = elems.logpasswordField.value;

// alert("email_: " + email_ + " password_" + password_);

             firebase.auth().signInWithEmailAndPassword(email_, password_)
              .then(user=>{
                  alert('USER SERVICE : user exist' + user.uid);
                  location.href = "mypage.html";

              })
              .catch((error)=> {
                  alert('USER SERVICE : user do not exist');
                  console.log(error.code);
                  console.log(error.message);
              }
          );
           
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
              "logemailField": document.getElementById("email-login"),
              "logpasswordField": document.getElementById("password-login"),
              "loginButton": document.getElementById("submit-login"),
              "userStatus": document.getElementById("status-user"),
            };
        }

        // Initialize Firebase
        function initializeApp(){
            var config = {
              apiKey: "AIzaSyAatGjG5U82vOAc2Gdj1n1HRYuATwoL8Ng",
              authDomain: "cheerupcharmcordova.firebaseapp.com",
              databaseURL: "https://cheerupcharmcordova.firebaseio.com",
              projectId: "cheerupcharmcordova",
              storageBucket: "cheerupcharmcordova.appspot.com",
              messagingSenderId: "648210211385"
              };
            firebase.initializeApp(config);
        }
    