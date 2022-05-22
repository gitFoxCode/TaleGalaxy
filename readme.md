# Tale Galaxy 
**Galaktyka Bajek** - stary projekt PHP przepisany na Vue i Express. 

<img src="https://i.imgur.com/Upa2l3j.png" alt="Project preview">
Check out the screenshots of the app on my behance: [click here!](https://www.behance.net/foxcode)


## About project
This is my old project rewritten from PHP to Vue.js and Express. Netflix but with fairy tales and cartoons, not just for kids.

## Features
  - Authorization, Login and Registration
- Different types of accounts: 
  > **Administrator** - Ability to manage users, series, episodes, comments, access codes and so on<br>
  > **Moderator** - Ability to manage series, episodes and comments <br>
  > **Premium** - Subscription User. Possibility to watch any episode available on the platform. <br>
  > **User** - Regular user. He doesn't have too many possibilities, he can change his password, check his viewing history (if he had a premium account before), and of course he can buy a premium account. <br>
  > **Banned** - Blocked access to parts of the site, blocked comments. 
- Bilingual API
- Series rating system 
- Administration panel 

### Instalation
For client:
```bash
npm install
npm run dev
```
For server:
```bash
npm install
#npm run seed (if there is no database)
npm run start
```

## To do:
General refactoring, some things have gone out of fashion and can be written better.