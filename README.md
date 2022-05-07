# °º¤ø,¸¸,ø¤º°°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°°º¤ø,¸°º¤ø,¸¸,ø¤º°°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸

Thanks for purchasing uLicense! <3

JOIN TO OUR DISCORD TO GET YOUR LICENSE KEY AND GET SUPPORT FOR
THIS VERSION: https://discord.gg/3bPF2GkeN5

OPEN TICKET IN #SUPPORT-TICKETS CHANNEL AND ASK FOR A LICENSE KEY!
Also remember to tell your Polymart name !

# BEFORE INSTALL

1.  Make sure you have Node.js installed in your system. You can check your node version using
    "node -v" and node package manager using npm -v. Node version must be 16.xx or higher!
    We recommend using the current LTS version! You can check what is current LTS from:
    https://nodejs.org/en/

    When you have Nodejs in your system you should update NPM(node package manager) to latest.
    => npm install -g npm@latest

    If you dont have Node.js installed, you should check out these tutorials. (debian guide works on almost any linux distro)
    I recommend following installation guide under "Installing Using NVM" so you can easily select the wanted version!

    Linux: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-debian-10
    Windows: https://nodejs.org/en/download/

2.  Setup MongoDB in your system OR use MongoDB Atlas, which is free!
    If you decide to use MongoDB Atlas it means you DONT NEED TO INSTALL MONGODB IN YOUR SYSTEM!
    Linux: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/
    Windows: https://www.mongodb.com/try/download/community

    MongoDB Atlas: https://www.mongodb.com/try/atlas/

3.  TMUX/Screen is preferred for linux. You can have 2 instances (one for Discord-bot, and one for dashboard)
    If you havent use screen or tmux before I recommend using tmux since its more user friendly :)

    TMUX GUIDE: https://phoenixnap.com/kb/tmux-tutorial-install-commands

4.  Remember that you can get support from our Discord. Link is on top of this readme file.
    There are no stupid questions. You can ask literally anything!

# DASHBOARD GUIDE

1.  Make sure you have Node installed in your system. Check: https://nodejs.org/en/
    => type "node -v" on your terminal. This version MUST be at least 16.xx

2.  Fill in the .env config file before installing anything!

3.  Navigate inside dashboard-folder and type "npm i" into your terminal.

4.  Run "npm start" in your terminal. Panel should be running after that.

5.  Remeve your first login password from .env or change your password from dashboard
    for security reasons!

6.  Optional: Setup a solid firewall on your VPS & get domain + SSL certificate.

7.  You can access your dashboard via https://your_ip:your_port or http://your_domain.com

# DISCORD BOT GUIDE

1.  Make sure you have Node installed in your system. Check: https://nodejs.org/en/
    => type "node -v" on your terminal. This version MUST be at least 16.xx

2.  Fill in the .env config file before installing anything!

3.  Install dashboard before installing Discord bot.

4.  Add these intents under "OAuth2"-tab in Discord-developers: https://i.imgur.com/yC3KeSb.png

5.  Make sure you have these scopes when inviting your bot or reinvite your bot with these scopes if its already on your server!
    Otherwise it will throw DiscordAPIerror: https://i.imgur.com/JiSyVM5.png

6.  Add redirect to /discord/oauth under "OAuth2"-tab in Discord-developers: CHECK EXAMPLE => https://i.imgur.com/gxLkP5b.png

7.  Navigate inside discord-folder and type "npm i" into your terminal.

8.  Run "npm start" and bot should be running.

9.  Link your Discord-account on dashboard in order to use the uLicense bot!
