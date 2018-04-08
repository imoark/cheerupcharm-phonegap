    const appFire = initializeApp();
    const database = firebase.database();
    const storage = firebase.storage();
    const storageRef = firebase.storage().ref();
    const firstgreeting = ["Hello!", "Hiya!", "Heyyo!", "Heyyo!", "Howdee-do!", "Heyya!"];
    const returngreeting = ["What’s up?", "Sup?", "Sup?", "Boo! Did I scare you?", "Beep boop!", "Beep boop!"];
    let usercheck = localStorage.getItem('test');
    let elems = getDOMElements();
    let Entymdhms=　new Date();
    let EntYear = Entymdhms.getFullYear();
    let EntMon = Entymdhms.getMonth();
    let EntMonEng = ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let EntDay = Entymdhms.getDate();
    let uploaddate = EntMonEng[EntMon] + " " + EntDay + ", " + EntYear;
    const dbRef = firebase.database().ref('users');
    let text;
    let usernamedis;
    let picname;
    let entrypicAttr; //this is assigned entry_pic attribute 
   
    //display greeting 
    if(usercheck == 0) {
        let rfirst = Math.floor( Math.random() * firstgreeting.length );
        elems.greetingmes.innerHTML = firstgreeting[rfirst]; 
    } else if (usercheck == 1){
        let rsecond = Math.floor( Math.random() * returngreeting.length );
        elems.greetingmes.innerHTML = returngreeting[rsecond]; 
    }

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
                //display username in their page
                elems.usernameField.innerHTML  = " " + usernamedis;
              });  

              loadPastlog();            
          } else {
console.log("nouser");
          } 
    });

    //undisplay div id "entrylogdis"
    elems.entrylogDisFeild.style.display = "none";
    
    //when a user click "Next"
    elems.entrynextButton.addEventListener("click", nextEntry, false);

    //when a user click "Submit"
    elems.entrysubmitButton.addEventListener("click", submitEntry, false);

    //when a user click "Back"
    elems.entrybackButton.addEventListener("click", backEntry, false);

    //when a user click a "Reset"
    elems.entryresetButton.addEventListener("click", resetEntry, false);
       
    
    function loadPastlog(){
        //get a user who is logging in
        let currentUser = firebase.auth().currentUser;

        //get a userid
        let userId = currentUser.uid;  
        let dbRefinput = firebase.database().ref("userinput");
        let querydisp = dbRefinput.orderByChild("userid").equalTo(userId);
// console.log("querydisp: " + querydisp);
          querydisp.on("value", function(snapshot) {
// console.log(snapshot.numChildren());
              snapshot.forEach(function(d){
// console.log(d.child("createdate").val());
// console.log(d.child("text").val());
                  //display the past entry log
                  // let namecla = koume;
                  // let i = 0;
                  let nodeh4 = document.createElement("h4");
                  let textnodeh4= document.createTextNode(d.child("createdate").val());
                  nodeh4.appendChild(textnodeh4);
                  let nodep = document.createElement("p");
                  let textnodep = document.createTextNode(d.child("text").val());
                  nodep.appendChild(textnodep);
                  let nodeimg = document.createElement("img");
console.log(d.child("imageplace").val());
console.log(d.child("imagename").val());
                  let cresrc = document.createAttribute("src"); 
                  let crealt = document.createAttribute("alt"); 
                  cresrc.value = d.child("imageplace").val();
                  crealt.value = d.child("imagename").val();
                  nodeimg.setAttributeNode(cresrc);
                  nodeimg.setAttributeNode(crealt);
        
                  // nodeimg.appendChild(imgnodeimg);
                  elems.displaylogdis.appendChild(nodeh4);
                  elems.displaylogdis.appendChild(nodep);
                  elems.displaylogdis.appendChild(nodeimg);
                  // i++;
                  // class=koume0

              });
          }); 
    }



    function nextEntry(){
        text  = elems.entrytext.value;
        elems.entrydate.innerHTML = EntMonEng[EntMon] + " " + EntDay;
        elems.entrytextDis.innerHTML = text;
        elems.entrylogDisFeild.style.display = "inline";

        entrypicAttr = elems.entrypic.hasAttribute("src");

        //check whether there is src attribute in img id"entry_pic"
        if (entrypicAttr) {
              let pathReference = storage.ref(picname);
console.log("pathReference: " + pathReference);
              // Create a reference to the file we want to download
              let picRef = storageRef.child(picname);

              // Get the download URL
              picRef.getDownloadURL().then(function(url) {
console.log(url);
                elems.entrypicDis.src = url;
              });
        }
        elems.entrylogField.style.display = "none";
    }


    function resetEntry(){
console.log("Reset works!");
      elems.entrypic.removeAttribute("src");
      picname = "";

console.log("one");
console.log("entrypicAttr: " + entrypicAttr);
      if(entrypicAttr){
          // Create a reference to the file to delete
          let delpicRef = storageRef.child(picname);
console.log("two");
          // Delete the file
          delpicRef.delete().then(function() {
            // File deleted successfully
console.log("Complete delete a pic");
          }).catch(function(error) {
console.log("A pic Delete Error...");
          });
      }
    }



    function submitEntry(){
// let domlength = elems.displaylogdis.childElementCount;


        while(elems.displaylogdis.firstChild) {
// console.log("elems.displaylogdis.firstChild: " + elems.displaylogdis.firstChild);
            elems.displaylogdis.removeChild(elems.displaylogdis.firstChild);
        }
         //get a user who is logging in
        let currentUser = firebase.auth().currentUser;

        //get a userid
        let userId = currentUser.uid   
        console.log(userId);

        let logdata = firebase.database().ref('userinput/')
        let imgUrl = elems.entrypicDis.getAttribute("src");

        if(!entrypicAttr){
            picname = "";
            imgUrl = "";
        }

        logdata.push({
          userid: userId,
          text: elems.entrytext.value,
          imagename: picname,
          imageplace: imgUrl,
          createdate: uploaddate
        });

      elems.entrypic.removeAttribute("src");
      picname = "";
    }

    function backEntry(){
        text = "";
        elems.entrytextDis.innerHTML = text;
        elems.entrylogDisFeild.style.display = "none";
        elems.entrylogField.style.display = "inline";
        //remove src attribute from id "entrylogdis_pic"
        elems.entrypicDis.removeAttribute("src");  
    }

    //function to save file
      function loadFile(){
          let file = document.getElementById("files").files[0];
console.log(file);
          
          let storageRef = firebase.storage().ref();
          
          //dynamically set reference to the file name
          let thisRef = storageRef.child(file.name);
console.log("file.name: " + file.name);
          //put request upload file to firebase storage
          thisRef.put(file).then(function(snapshot) {
console.log('Uploaded a blob or file!');
          });

          let pathReference = storage.ref(file.name);
console.log("pathReference: " + pathReference);
          picname = file.name;

          // previewFile(picname);

          var latetra = 0;
          var setInter = setInterval(function() {
console.log(latetra);
              latetra++;
              //end condition
              if (latetra == 4) {
              clearInterval(setInter);
              previewFile(picname);
console.log("END");
              }
          }, 500);
      }

      function previewFile(picname){
          // Create a reference to the file we want to download
          let picRef = storageRef.child(picname);

          // Get the download URL
          picRef.getDownloadURL().then(function(url) {
console.log(url);
          elems.entrypic.src = url;
            // Insert url into an <img> tag to "download"
          }).catch(function(error) {
console.log("error");
          });

      }
            
    //log out 
    elems.logoutButton.addEventListener("click", function() {
      firebase.auth().signOut().then(function() {
       console.log("Signed out.");
       //go to my page
       location.href = "/index.html";
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
          "entrytext":document.getElementById("entry_text"),
          "entrypic":document.getElementById("entry_pic"),
          "entrynextButton":document.getElementById("entry_nextb"),
          "entryresetButton":document.getElementById("entry_resetb"),
          "entrylogDisFeild":document.getElementById("entrylogdis"),
          "entrytextDis":document.getElementById("entrylogdis_text"),
          "entrypicDis":document.getElementById("entrylogdis_pic"),
          "entrybackButton":document.getElementById("entrylogdis_backb"),
          "entrysubmitButton":document.getElementById("entrylogdis-submitb"),
          "displaylogdis":document.getElementById("displaylogdis"),
          "dislogDate":document.getElementById("logdis_date"),
          "dislogText":document.getElementById("logdis_text"),
          "dispdeleteButton":document.getElementById("logdis_deb"),
          "logoutContainer": document.getElementById("container-logout"),
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


