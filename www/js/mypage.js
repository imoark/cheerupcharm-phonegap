	const appFire = initializeApp();
    const database = firebase.database();
    const storage = firebase.storage();
    const storageRef = firebase.storage().ref();
    const firstgreeting = ["Hello!", "Hiya!", "Heyyo!", "Heyyo!", "Howdee-do!", "Heyya!"];
    const returngreeting = ["What’s up?", "Sup?", "Sup?", "Boo! Did I scare you?", "Beep boop!", "Beep boop!"];
    const dbRef = firebase.database().ref('users');
let usercheck;
    let elems = getDOMElements();
    let Entymdhms=　new Date();
    let EntYear = Entymdhms.getFullYear();
    let EntMon = Entymdhms.getMonth();
    let EntMonEng = ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let EntDay = Entymdhms.getDate();
    let uploaddate = EntMonEng[EntMon] + " " + EntDay + ", " + EntYear;
    let timestamp = Math.floor(Entymdhms.getTime() / 100) ;
    let text;
    let usernamedis;
    let picname;
    let picregistername;
    let entrypicAttr; //this is assigned entry_pic attribute 
    let emotionnum;
    let emotionbool = "false";
    let emotionUrl = ["img/happy.png", "img/normal.png", "img/sad.png"];
    let emotionAlt = ["Happy", "Normal", "Sad"];

    firebase.auth().onAuthStateChanged(function(user_) {
        if (user_) {
                //get a user who is logging in
                let currentUser = firebase.auth().currentUser;
                //get a userid
                let userId = currentUser.uid   
                let urldb = "users/" + userId;
                const dbRef = firebase.database().ref(urldb);
                dbRef.on("value", function(snapshot) {
                usernamedis = snapshot.child("name").val();
                usercheck = snapshot.child("logintimes").val();
			    
     //display greeting 
	    if(usercheck == 0) {
	        let rfirst = Math.floor( Math.random() * firstgreeting.length );
	        elems.greetingmes.innerHTML = firstgreeting[rfirst]; 

	        // change logintime
        firebase.database().ref("users/" + userId).update({
              logintimes: 1
        });
	    } else if (usercheck == 1){
	        let rsecond = Math.floor( Math.random() * returngreeting.length );
	        elems.greetingmes.innerHTML = returngreeting[rsecond]; 
	    }


alert("usercheck" + usercheck);
                //display username in their page
                elems.usernameField.innerHTML  = " " + usernamedis;
              });  

              // loadPastlog();            
          } else {
console.log("nouser");
          } 
    });


    //log out 
    elems.logoutButton.addEventListener("click", function() {
    	 
        firebase.auth().signOut().then(function() {
	       console.log("Signed out.");
	       //go to my page
	       location.href = "index.html";
       });
    });


    //get elements 
    function getDOMElements() {
        return {
          "greetingmes": document.getElementById("greeting"),
          "usernameField": document.getElementById("username"),
          "entrylogField": document.getElementById("entrylog"),
          "entryformField": document.getElementById("entry_form"),
          "entrydate":document.getElementById("entry_date"),
          "qlentrytext":document.querySelector(".ql-editor"),
          "entrytitle":document.querySelector(".entry-title"),
          "entrytext":document.getElementById("entry_text"),
          "entrypic":document.getElementById("entry_pic"),

          "hapid":document.getElementById("happy"),
          "norid":document.getElementById("normal"),
          "sadid":document.getElementById("sad"),


          "entrynextButton":document.getElementById("entry_nextb"),
          "entryresetButton":document.getElementById("entry_resetb"),
          "entrylogDisFeild":document.getElementById("entrylogdis"),
          "entrytextDis":document.getElementById("entrylogdis_text"),
          "entrypicDis":document.getElementById("entrylogdis_pic"),

          "entryMood":document.getElementById("entrymood"),

          "entrybackButton":document.getElementById("entrylogdis_backb"),
          "entrysubmitButton":document.getElementById("entrylogdis-submitb"),
          "dislogDate":document.getElementById("logdis_date"),
          "dislogText":document.getElementById("logdis_text"),
          "dispdeleteButton":document.getElementById("logdis_deb"),

          "logoutContainer": document.getElementById("container-logout"),
          "userStatus": document.getElementById("status-user"),
          "logoutButton": document.getElementById("submit-logout"),

          "entrybackButton":document.getElementById("entrylogdis_backb"),
          "entrysubmitButton":document.getElementById("entrylogdis-submitb"),
          "displaylogdis":document.getElementById("displaylogdis"),
          "dislogBig":document.getElementById("displaylogbig")
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

    let cece = document.getElementById("qtext");
    // console.log(cece.innerHTML);