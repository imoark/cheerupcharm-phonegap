let donut = getDOMElements();



//get elements 
function getDOMElements() {
    return {
      "viewButton": document.getElementById("view-button"),
      "uploadButton": document.getElementById("upload-button"),
      "homeButton": document.getElementById("home-button"),
      "postalt": document.getElementById("post-alt"),
      "chatalt": document.getElementById("chat-alt"),
      "playalt": document.getElementById("play-alt"),
      "viewalt": document.getElementById("view-alt"),
      "closebutton": document.getElementById("close-button-all"),
      "closebuttonplay": document.getElementById("close-button-play")
    };
}

// assign an Event Listener to the View/List down button
donut.viewButton.addEventListener("click", sliderightbar, false);
donut.viewalt.addEventListener("click", sliderightbar, false);

function sliderightbar(){
  console.log("viewButton Is Clicked");
  $(".displaylog-container").toggleClass("slide-in");
}

donut.uploadButton.addEventListener("click", uploadstuff, false);
donut.postalt.addEventListener("click", uploadstuff, false);

function uploadstuff(){
  console.log("uploadButton Is Clicked");
  $(".botui-app-container").addClass("hidden");
  $("#entrybox-wrapper").removeClass("hidden");
  $("#intro-wrapper").addClass("hidden");
  $(".view-title").addClass("hidden");
  $(".displaylog-container").removeClass("slide-in");
  $("#displaylogbig").addClass("hidden");
  $("#play-menu").addClass("hidden");
  // elems.dislogBig.style.opacity = "0";
  while(elems.dislogBig.firstChild) {
            elems.dislogBig.removeChild(elems.dislogBig.firstChild);
        };
  elems.entrylogField.style.display = "inline";
  // elems.displaylogdis.style.display = "inline";
      };


donut.homeButton.addEventListener("click", goHome, false);
donut.closebutton.addEventListener("click", goHome, false);
donut.closebuttonplay.addEventListener("click", goHome, false);


function goHome(){
  $(".botui-app-container").addClass("hidden");
  $("#play-menu").addClass("hidden");
  $("#entrybox-wrapper").addClass("hidden");
  $("#intro-wrapper").removeClass("hidden");
  $(".view-title").addClass("hidden");
  $(".displaylog-container").removeClass("slide-in");
  $("#displaylogbig").addClass("hidden");
  // elems.dislogBig.style.opacity = "0";
  while(elems.dislogBig.firstChild) {
      elems.dislogBig.removeChild(elems.dislogBig.firstChild);
  }
};

donut.chatalt.addEventListener("click", chatstuff, false);

function chatstuff(){
  console.log("chatButton Is Clicked");
  $(".botui-app-container").removeClass("hidden");
  $("#entrybox-wrapper").addClass("hidden");
  $("#intro-wrapper").addClass("hidden");
  $(".view-title").addClass("hidden");
  $(".displaylog-container").removeClass("slide-in");
  firstbot();
  while(elems.dislogBig.firstChild) {
            elems.dislogBig.removeChild(elems.dislogBig.firstChild);
        };
  elems.entrylogField.style.display = "inline";
  // elems.displaylogdis.style.display = "inline";
      };

donut.playalt.addEventListener("click", playstuff, false);

function playstuff(){
    console.log("PlayButton Is Clicked");
    $("#play-menu").removeClass("hidden");
    $("#entrybox-wrapper").addClass("hidden");
    $("#intro-wrapper").addClass("hidden");
    $(".view-title").addClass("hidden");
    $(".displaylog-container").removeClass("slide-in");
    playShow();
    while(elems.dislogBig.firstChild) {
              elems.dislogBig.removeChild(elems.dislogBig.firstChild);
          };
    elems.entrylogField.style.display = "inline";
  // elems.displaylogdis.style.display = "inline";
}

function fadeIn(element) {
    transition.begin(element, ["opacity 0 1 0.5s ease-in-out 1s", "top 40px 0px 0.5s ease-in-out 1s"], {
        // On successive runs, fadeIn is called from within setTimeout function while fade-out transition is running.
        // Setting beginFromCurrentValue to true makes sure the new fade-in transition will continue the effect from
        // the current opacity calue and not 0.
        beginFromCurrentValue: true,
        onTransitionEnd: function() { 
          transition.begin(optionElement, ["opacity 0 1 0.5s ease-in-out 1s", "top 40px 0px 0.5s ease-in-out 1s"], {
              beginFromCurrentValue: true,
                onTransitionEnd: function() { 
                transition.begin(menuitem, ["opacity 0 1 0.5s ease-in-out 1s", "top 40px 0px 0.5s ease-in-out 1s"], {
                    beginFromCurrentValue: true,
                    
                  })
                    }
            })
              }
    });
}


function submitSuccess(element) {
    transition.begin(success, ["opacity 0 1 0.5s ease-in-out", "top 40px 0px 0.5s ease-in-out"], {
        // On successive runs, fadeIn is called from within setTimeout function while fade-out transition is running.
        // Setting beginFromCurrentValue to true makes sure the new fade-in transition will continue the effect from
        // the current opacity calue and not 0.
        beginFromCurrentValue: true,
        onTransitionEnd: function() { transition.begin(success, ["opacity 1 0 0.5s ease-in-out 1s", "top 0px 40px 0.5s ease-in-out 1s"], {
              beginFromCurrentValue: true})
              }
    });
}

// function fadeOut(element) {
//     // Don't let fade out transition to finish, begin fading-in again in the middle of fade-out transition.
//     window.setTimeout(function() {
//         fadeIn(element);
//     }, 30000);
//     transition.begin(element, "opacity 1 0 10s", {
//         onTransitionEnd: function(element, finished) {
//             // Because we called fadeIn from within setTimeout with 1s, the fade-in transition will be halted
//             // in the middle and this callback will be invoked with finished set to "false".
//             if (finished) {
//                 // This code never runs, because finished is false
//                 element.parentNode.removeChild(element);
//             }
//         }
//     });
// }

let element = document.getElementById("main-display")
let optionElement = document.getElementById("option-box")
let success = document.getElementById("text-success")
let menuitem = document.getElementById("menu-item")

fadeIn(element);
