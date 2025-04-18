let chatClient;

function startChat() {
    if (!chatClient) {
        chatClient =
        new CozeWebSDK.WebChatClient({
            /**
            * Agent configuration information.
            * @param config.bot_iad - Agent ID.
            */
            config: {
              bot_id: '7488536864048234503',
            },
            componentProps: {
              title: 'Rockship',
            },
            /**
            * The auth property is used to configure the authentication method.
            * @param type - Authentication method, default type is 'unauth', which means no authentication is required; it is recommended to set it to 'token', which means authentication is done through PAT (Personal Access Token) or OAuth.
            * @param token - When the type is set to 'token', you need to configure the PAT (Personal Access Token) or OAuth access key.
            * @param onRefreshToken - When the access key expires, a new key can be set as needed.
            */
           
            /**
            * The userInfo parameter is used to set the display of agent user information in the chat box.
            * @param userInfo.id - ID of the agent user.
            * @param userInfo.url - URL address of the user's avatar.
            * @param userInfo.nickname - Nickname of the agent user.
            */
            userInfo: { 
              id: 'user', 
              url: 'https://cdn-icons-png.flaticon.com/512/7891/7891470.png', 
              nickname: 'Nhân viên', 
            }, 
            ui: { 
              base: { 
                icon: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/375870137_805051611316382_3794892702467179472_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lRBawH86neIQ7kNvwHVR7su&_nc_oc=Admyhvb9dyezGNElTf3lw2FUPJZcLZnTKpH7165KRdXxV1LK0nRD7-JLouW4mcPYtbh0EdfrQtiTIzGChTz8z7eV&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=DZIiXGZd3bfJq3QhUsr8gA&oh=00_AfEREeToB0dDNODA5SsPOVSVuWA4PjY9Fs2AW2TU_UddIw&oe=6807D80B', 
                lang: 'vi',
              },
              chatBot: {
                title: 'Rockship',
                uploadable: false,
              }, 
              /**
              * Controls whether to display the floating ball at the bottom right corner of the page.
              */
              asstBtn: { 
                isNeed: true, 
              }, 
              footer: {
                  isShow: false,
                  
              }
          },
          });
    }
}

// Khởi động chat bot ngay khi trang được tải
window.onload = startChat; 

