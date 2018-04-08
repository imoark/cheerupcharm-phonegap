	let domelems = getDOMElements();

	function playShow(){
		firebase.auth().onAuthStateChanged(function(user_) {
	    if (user_) {
	          playCheck();       
	      } else {
			   console.log("nouser");
	      } 
	    });
	};

	function playCheck(){
		//get a user who is logging in
	    let currentUser = firebase.auth().currentUser;

	    //get a userid
	    let userId = currentUser.uid 
	    let dbRefUserInfo = firebase.database().ref("users/" + userId);

	    dbRefUserInfo.once("value", function(snapshot) {
        let userDetails = snapshot.val();
        let dogpicnum = userDetails.dogpicture;
        let pointnum = userDetails.playtimes;

        //show post points
	    domelems.postnum.innerHTML = pointnum;

		showPlayPic(dogpicnum, pointnum);
	    });
	}

	function showPlayPic(dogpicnum, pointnum) {
			let dogpictureid = dogpicnum;
			let point = pointnum;
			if(( 10 <= point) && (point < 20)) {
				domelems.hatdoggy.src = "img/shop-2.png";
			} else if ((20 <= point) && (point < 30)) {
				domelems.hatdoggy.src = "img/shop-2.png";
				domelems.scarfdoggy.src = "img/shop-3.png";
			} else if ((30 <= point) && (point < 40)) {
				domelems.hatdoggy.src = "img/shop-2.png";
				domelems.scarfdoggy.src = "img/shop-3.png";
				domelems.fcrowndoggy.src = "img/shop-4.png";
			}

			showSticker(dogpicnum)
	}

	function showSticker(dogpicnum) {
		let dogpictureid = dogpicnum;

		if(dogpicnum == 0) {
			$("#normaldog").addClass("dog-selected");
		} else if (dogpicnum == 1) {
			$("#hatdog").addClass("dog-selected");
		} else if (dogpicnum == 2) {
			$("#scarfdog").addClass("dog-selected");
		} else if (dogpicnum == 3) {
			$("#fcrowndog").addClass("dog-selected");
		}
	}

	function normaldogClick() {
		//get a user who is logging in
	    let currentUser = firebase.auth().currentUser;

		//get a userid
	    let userId = currentUser.uid 
	    let dbRefUserInfo = firebase.database().ref("users/" + userId);
	    dbRefUserInfo.once("value", function(snapshot) {
	    	let userDetails = snapshot.val();
	        let dogpicnum = userDetails.dogpicture;
	        if(dogpicnum != 0){
	        	$( function() {
	        		$( "#dialog-confirm" ).html("Do you wanna set?");
				    $( "#dialog-confirm" ).dialog({
				      resizable: false,
				      title: "Set Normal Doggy!",
				      height: "auto",
				      width: 400,
				      modal: true,
				      buttons: {
				        "Yes": function(event) {
				        		if(dogpicnum == 1) {
				        			$("#hatdog").removeClass("dog-selected");
				        		}else if (dogpicnum == 2) {
				        			$("#scarfdog").removeClass("dog-selected");
				        		} else if (dogpicnum == 3) {
				        			$("#fcrowndog").removeClass("dog-selected");
				        		}
								dbRefUserInfo.update({
			          				dogpicture: 0
			        			});

			        			$("#normaldog").addClass("dog-selected");

			        			domelems.dogplacementimage.src = "img/dog-01.png";			
				          $( this ).dialog( "close" );			          
				        },
				        "No": function(event) {
				          $( this ).dialog( "close" );
				        }
				      }
				    });
			    });
	        } 
	    });
	}

	function hatdogClick(evt) {
		evt.stopImmediatePropagation();
	    evt.preventDefault();
		//get a user who is logging in
	    let currentUser = firebase.auth().currentUser;

		//get a userid
	    let userId = currentUser.uid 
	    let dbRefUserInfo = firebase.database().ref("users/" + userId);
	    dbRefUserInfo.once("value", function(snapshot) {
	    	let userDetails = snapshot.val();
	        let dogpicnum = userDetails.dogpicture;
	        let pointnum = userDetails.playtimes;
	        if((dogpicnum != 1) && (pointnum >= 10)){
	        	$( function() {
	        		$( "#dialog-confirm" ).html("Do you wanna set?");
				    $( "#dialog-confirm" ).dialog({
				      resizable: false,
				      title: "Set Hat Doggy!",
				      height: "auto",
				      width: 400,
				      modal: true,
				      buttons: {
				        "Yes": function(event) {
				        		if(dogpicnum == 0) {
				        			$("#normaldog").removeClass("dog-selected");
				        		}else if (dogpicnum == 2) {
				        			$("#scarfdog").removeClass("dog-selected");
				        		} else if (dogpicnum == 3) {
				        			$("#fcrowndog").removeClass("dog-selected");
				        		}

								dbRefUserInfo.update({
			          				dogpicture: 1
			        			});

			        			$("#hatdog").addClass("dog-selected");

			        			domelems.dogplacementimage.src = "img/dog-hat.png";		
				          $( this ).dialog( "destroy" );
				          $( event.target ).remove();
				          $( "#dialog-confirm" ).empty();
				        },
				        "No": function(event) {
				          $( this ).dialog( "destroy" );
				          $( event.target ).remove();
				          $( "#dialog-confirm" ).empty();
				        }
				      }
				    });
			  });
			} 
	    });
	}


	function scarfdogClick() {
		//get a user who is logging in
	    let currentUser = firebase.auth().currentUser;

		//get a userid
	    let userId = currentUser.uid 
	    let dbRefUserInfo = firebase.database().ref("users/" + userId);
	    dbRefUserInfo.once("value", function(snapshot) {
	    	let userDetails = snapshot.val();
	        let dogpicnum = userDetails.dogpicture;
	        let pointnum = userDetails.playtimes;
	        if((dogpicnum != 2) && (pointnum >= 20)){
	        	$( function() {
	        		$( "#dialog-confirm" ).html("Do you wanna set?");
				    $("#dialog-confirm").dialog({
				      resizable: false,
				      title: "Set Scarf Doggy!",
				      height: "auto",
				      width: 400,
				      modal: true,
				      buttons: {
				        "Yes": function(event) {
				        		if(dogpicnum == 0) {
				        			$("#normaldog").removeClass("dog-selected");
				        		}else if (dogpicnum == 1) {
				        			$("#hatdog").removeClass("dog-selected");
				        		} else if (dogpicnum == 3) {
				        			$("#fcrowndog").removeClass("dog-selected");
				        		}

								dbRefUserInfo.update({
			          				dogpicture: 2
			        			});

								$("#scarfdog").addClass("dog-selected");

			        			domelems.dogplacementimage.src = "img/dog-scarf.png";		
				          $( this ).dialog("destroy");
				          $( event.target ).remove();
				          $( "#dialog-confirm" ).empty();
				        },
				        "No": function(event) {
				          $( this ).dialog("destroy");
				          $( event.target ).remove();
				          $( "#dialog-confirm" ).empty();
				         }
				      }
				    });
			  });
	        }
	    });
	}

	function fcrowndogClick() {
		//get a user who is logging in
	    let currentUser = firebase.auth().currentUser;

		//get a userid
	    let userId = currentUser.uid 
	    let dbRefUserInfo = firebase.database().ref("users/" + userId);
	    dbRefUserInfo.once("value", function(snapshot) {
	    	let userDetails = snapshot.val();
	        let dogpicnum = userDetails.dogpicture;
	        let pointnum = userDetails.playtimes;
	        if((dogpicnum != 3) && (pointnum >= 30)){
	        	$( function(e) {
	        		$( "#dialog-confirm" ).html("Do you wanna set?");
				    $( "#dialog-confirm" ).dialog({
				      resizable: false,
				      title: "Set flower crown Doggy!",
				      height: "auto",
				      width: 400,
				      modal: true,
				      buttons: {
				        "Yes": function(event) {
				        		if(dogpicnum == 0) {
				        			$("#normaldog").removeClass("dog-selected");
				        		}else if (dogpicnum == 1) {
				        			$("#hatdog").removeClass("dog-selected");
				        		} else if (dogpicnum == 2) {
				        			$("#scarfdog").removeClass("dog-selected");
				        		}

								dbRefUserInfo.update({
			          				dogpicture: 3
			        			});

								$("#fcrowndog").addClass("dog-selected");

			        			domelems.dogplacementimage.src = "img/dog-flower-crown-purple.png";		
				          $( this ).dialog( "destroy" );
				          $( event.target ).remove();
				          $( "#dialog-confirm" ).empty();
				        },
				        "No": function(event) {
				          $( this ).dialog( "destroy" );
				          $( event.target ).remove();
				          $( "#dialog-confirm" ).empty();
				        }
				      }
				    });
			  });
	        }
	    });
	}

	domelems.normaldoggy.addEventListener("click", normaldogClick, false);
	domelems.hatdoggy.addEventListener("click", hatdogClick, false);
	domelems.scarfdoggy.addEventListener("click", scarfdogClick, false);
	domelems.fcrowndoggy.addEventListener("click", fcrowndogClick, false);


	//get elements 
    function getDOMElements() {
        return {
          "postpoint": document.getElementById("points"),
          "postnum": document.getElementById("pointsnum"),
          "normaldoggy": document.getElementById("normaldog"),
          "hatdoggy": document.getElementById("hatdog"),
          "scarfdoggy": document.getElementById("scarfdog"),
          "fcrowndoggy": document.getElementById("fcrowndog"),
          "dogplacementimage": document.getElementById("dogplacement")
        }
    }