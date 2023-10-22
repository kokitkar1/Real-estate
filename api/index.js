import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// mongoose.connect(process.env.MONGO)
mongoose.connect("mongodb+srv://skokitkar500:OK2-CsKvsMI@real-estate.3g5npmp.mongodb.net/real-estate?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})


const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!!`)
    }
)