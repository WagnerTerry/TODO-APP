Backend Todo

dependencias

- npm init -y
- npm i --save -E body-parser express mongoose node-restful pm2 --- -E > Exata
- npm i --save-dev -E nodemon
- npm i pm2 -g

package.json{
"main": "src/loader.js",
"scripts": {
"dev": "nodemon",
"production": "pm2 start src/loader.js --name todo-app"
},
}

npm run production
pm2 monit
pm2 status

precisa estar rodando:
no terminal: mongod
backend: npm run dev
frontend: npm run dev
