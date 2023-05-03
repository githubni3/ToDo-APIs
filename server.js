import app from './app.js'
import { connectBD } from "./data/database.js"; 

connectBD();
app.listen(process.env.PORT,()=>{
    console.log("Server is working");
})