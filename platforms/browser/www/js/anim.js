let pizza = getDOMElements();


//get elements 
function getDOMElements() {
    return {
      "linkSignUp": document.getElementById("link-signup"),
      "linkSignIn": document.getElementById("link-signin")
      
    };
}

pizza.linkSignUp.addEventListener("click", function() {
  console.log("Is Clicked");
  $("#container-login").addClass("anim-up");
  $(".container-signup").addClass("anim-up");
});

pizza.linkSignIn.addEventListener("click", function() {
  console.log("Is Clicked");
  $("#container-login").removeClass("anim-up");
  $(".container-signup").removeClass("anim-up");
});

