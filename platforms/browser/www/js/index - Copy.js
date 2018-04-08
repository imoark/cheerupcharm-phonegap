var botui = new BotUI('chat');

startChat();

function startChat(){
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
                value: 'I_am_tired...'
            }
        ]
    });
}).then(function(res){
   if(res.value === 'i_am_good!'){
       botui.message.add({
           delay: 800,
           loading: true,
           content: 'Glad to hear that!'
        });
    }else{
        botui.message.add({
            delay: 800,
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
        if(res.value == 'yes') {
            return botui.action.text({
                delay: 1000,
                action: {
                  placeholder: 'Enter here!'
                }
            }).then(function (res) {
              botui.message
                .bot({
                  delay: 500,
                  content: 'Oh You did ' + res.value + '. Well done!![cat wink image](cat_wink.jpg)'
                })
            });
        } else {
            botui.message.add({
               delay: 800,
               loading: true,
               content: 'Ok. Have a rest.![cat relax image](cat_relax.jpg)'
            });
        }
    });
});
});
};