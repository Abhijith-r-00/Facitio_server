//require json-server in index.js

const jsonServer= require('json-server')

//create server

const myServer=jsonServer.create()

//setup path for db.json file

const router=jsonServer.router('./db.json')

//create a middleware

const middleware=jsonServer.defaults()

//mention  the port for runninhg the server

const PORT=3000||process.env.PORT

//use middleware ,router
myServer.use(middleware)
myServer.use(router)

//run server in givetn port to  resolve client request

myServer.listen(PORT,()=>{
    console.log(`myServer is running in port ${PORT}`);
    
})