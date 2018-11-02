//We are going to run through a few installs real quick 1-5

// 1. Create Server folder
// 2. run npm init 
        //run -defaults
// 3. run npm install sequlize 
// 3.5. npm install -g sequelize-cli //if cli not installed (sudo if mac)
// 4. run, sequelize init
// 5. Builds : -Config
//             -Config.json
//             -migrations
//             -models
//             -index.js
//             -seeders

//Take some time to go over the files and 

// 6. create index.js @rootfolder
// 7. run npm install express
// 8. in /index.js require express 
      const express = require ('express');
      const app = express();
        app.listen(3000, ()=>{
             console.log('server is listening 3000');
       })
// 9. create start script in package.json after test:
        "start" : "node index.js"

// 10.in the index.js add:--under varibles
         -require('../models') 

// 11. run, npm install pg
// 12. in file config.json change 'mysql' to 'postgres'

// 13. create user model in model folder -user.js
// 14. type in user.js

             module.exports = (sequelize,Datatypes) =>{
                const User = sequelize.define("user",
                {
                    first_name: Datatypes.STRING,
                    last_name: Datatypes.STRING,
                    email: Datatypes.STRING
            
                })
                return User
            }

// 15. in model folder ' index.js' add on line 36
            sequelize.sync();

// 16. in config.json add db credentials in devlopement for the database name use "seederlesson"


// 17. in pgAdmin add db "seederlesson"
            //nodemon should be installed but if not install -g npm nodemon

// 18. You will need to resave before this db is created

// 19. run, sequelize seed:generate --name createusers

// 20. Talk about seeders and what was created--> bulkInsert() and bulkDelete() up and down


// 21. Challenge: 
//         1.create a for loop that counts from 1-100 
//         2.create an object that has the user model props
//         3. then push in the object to an empty array each iteration

//         result :
        let userArr = [];

        for (let i = 1; i < 101; i++) {
          const userObj = {
            id: i,
            first_name: "dave",
            last_name: "whitt",
            email: "dwhitt@elevenfifty.org",
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now())
          };
          userArr.push(userObj);

// 22. Talk about chance.js
// 23. run, npm install chance
// 24. replace with your seeder
//         -->
        'use strict';
        const chance = require('chance')()
        
        module.exports = {
          up: (queryInterface, Sequelize) => {
            let userArr = [];
        
            for (let i = 1; i < 101; i++) {
              const userObj = {
                id: i,
                first_name: chance.first({ gender: "female" }),
                last_name: chance.last(),
                email: chance.email(),
                createdAt: new Date(Date.now()),
                updatedAt: new Date(Date.now())
              };
              userArr.push(userObj);
            }
            return queryInterface.bulkInsert('users', userArr, {});
          
          },
        
          down: (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('users', null, {});
        
          }
        };

// 25. run, sequelize db:seed:all 
// 26. show pgAdmin users table
