const dbConnect= require('./src/database/db');
const app = require('./app');

dbConnect();
app.listen(5000,()=>{
    console.log("Server is running");
    
})