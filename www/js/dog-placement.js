	firebase.auth().onAuthStateChanged(function(user_) {
        if (user_) {
              dogPictureCheck();       
          } else {
			   console.log("nouser");
          } 
    });

	function dogPictureCheck(){
		//get a user who is logging in
	    let currentUser = firebase.auth().currentUser;

	    //get a userid
	    let userId = currentUser.uid 
	    let dbRefUserInfo = firebase.database().ref("users/" + userId);

		dbRefUserInfo.once("value", function(snapshot) {
        let userDetails = snapshot.val();
        let dogpicnum = userDetails.dogpicture;
		showdogPic(dogpicnum);
	    });
	}

	function showdogPic(dogpicnum) {
		let dogpictureid = dogpicnum;

		switch (dogpictureid) {
			case 0:
				document.getElementById("dogplacement").src = "img/dog-01.png";
				break;
			case 1:
				document.getElementById("dogplacement").src = "img/dog-hat.png";
				break;
			case 2:
				document.getElementById("dogplacement").src = "img/dog-scarf.png";
				break;
			case 3:
				document.getElementById("dogplacement").src = "img/dog-flower-crown-purple.png";
				break;	
		}
	}

