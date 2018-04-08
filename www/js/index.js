let botui = new BotUI('chat');
let yourmusic = "";



function firstbot() {

    botui.message.add({
        content: 'How are you?'
        
    }).then(function () {
        return botui.action.button({
            action: [
                {
                    text: 'I am Good!',
                    value: 'i_am_good!'
                },
                {
                    text: 'I am tired...',
                    value: 'I_am_tired...',
                }
            ]
        });
    }).then(function(res){
       if(res.value === 'i_am_good!'){
           happy();
           botui.message.add({
               delay: 900,
               loading: true,
               content: 'Glad to hear that!'
            });
        }else{
            relax();
            botui.message.add({
                delay: 900,
                loading: true,
                content: 'Oh...![cat shock image](cat_shock.jpg)'
            });
        }
    }).then(function (res) {
      return botui.message.bot({
        delay: 2000,
        content: 'Do you wanna me tell what you did today?'
      }).then(function () {
        return botui.action.button({
            action: [
                {
                    text: 'Yes',
                    value: 'yes'
                },
                {
                    text: 'No',
                    value: 'no'
                }
            ]
        }).then(function(res){
            if(res.value ==='yes') {
                return botui.action.text({
                    delay: 1000,
                    action: {
                      placeholder: 'Enter here!'
                    }
                }).then(function (res) {
                  return botui.message.add({
                      delay: 500,
                      content: 'Oh You did ' + res.value + '. Well done!![cat wink image](cat_wink.jpg)The following is my recommended music for you.'
                    }).then(function(res){
                        return botui.message.add({
                          delay: 1200,
                          type:'embed',
                          content: yourmusic
                         })
                    });
                });
            } else {
                return botui.message.add({
                   delay: 800,
                   loading: true,
                   content: 'Have a relax![cat relax image](cat_relax.jpg)The following is my recommended music for you.'
                }).then(function(res){
                         return botui.message.add({
                          delay: 1200,
                          type:'embed',
                          content: yourmusic
                         })
                });

            }
        }).then(function(res){
          triviabot();
        })
      });
    });

}


function triviabot(){

    botui.message.add({
        delay: 1500,
        loading: true,
        content: 'Wanna hear something neat?'
        
    }).then(function () {
        return botui.action.button({
            action: [
                {
                    text: 'Yes',
                    value: 'yes'
                },
                {
                    text: 'No',
                    value: 'no'
                }
            ]
        }).then(function(res){
            if(res.value === 'yes'){
                return botui.message.add({
                    delay: 500,
                    content: triviapools()
                  }).then(function (res) {
                      triviabot();
                  });
            } else {
              return botui.message.add({
                    delay: 500,
                    content: 'See you then!'
                  })
            }
        });
    });

}

let relax = function relaxmusic(){

  let request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: "music+relax",
            maxResults: 20,
            order: "viewCount",
       }); 

       // execute the request
       request.execute(function(response) {
          let rannum = Math.floor(Math.random() * 21)
console.log(response);
console.log("rannum:" + rannum);
          let mymusic = response.items[rannum].id.videoId;
console.log("mymusic:" + mymusic);

          pass(mymusic);
       });
};

let happy = function happymusic(){
    let request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: "music+happy",
            maxResults: 20,
            order: "viewCount",
       }); 

       // execute the request
       request.execute(function(response) {
          let rannum = Math.floor(Math.random() * 20)
console.log(response);
console.log("rannum:" + rannum);
          let mymusic = response.items[rannum].id.videoId;
console.log("mymusic:" + mymusic);

          pass(mymusic);
       });
};



function init() {
    gapi.client.setApiKey("AIzaSyB54gHFoCICkOQZ-lcdc1m1jVi-EW3NNOc");
    gapi.client.load("youtube", "v3", function() {
    });
} 


function pass(mymusic) {
    yourmusic = "https://www.youtube.com/embed/" + mymusic;
    console.log("yourmusic: " + yourmusic);
}

function triviapools() {
    let rannum = Math.floor(Math.random() * 15);
    let tribialarray = [
        "The world's coffee is made from Arabica beans",
        "For centuries, tea was used only as a medecine. It took almost 3,000 years for it to become an everyday drink.",
        "The name “Canada” comes from the word “Kanata” used by the Iroquois, a native American tribe who lived in Quebec in the 16th century",
        "Canada has more doughnut shops per capita than anywhere else",
        "Canada’s literacy rate is over 99%",
        "University of Victoria in Canada offers a \"Science of Batman\" course",
        "In Japan, sometimes the trains are so crowded that railway staff are employed to cram passengers inside.",
        "Noodles, especially soba (buckwheat), are slurped somewhat loudly when eaten. It has been said slurping indicates the food is delicious.  The slurping also serves to cool down the hot noodles for eating.",
        "The term karaoke means empty \"orchestra\" in Japanese.",
        "In Japan, there are rectangle watermelons.",
        "Some Japanese companies conduct a morning exercise session called \"Radio taiso\" for the workers to prepare them for the day's work.",
        "Marco Polo was the first European to visit Indonesia, in 1292.",
        "Indonesia is one of the world’s largest producers of nutmeg, which is native to its Banda Islands.",
        "The word “ketchup” in English comes from the Indonesian word kecap, which is a sweet soy sauce.",
        "Indonesian children on Bali are traditionally always given at least four names."
    ]; 
    return  tribialarray[rannum];
}

// firstbot();

