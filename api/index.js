import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

// mongoose.connect(process.env.MONGO)
mongoose.connect("mongodb+srv://skokitkar500:OK2-CsKvsMI@real-estate.3g5npmp.mongodb.net/real-estate?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})


const app = express()
app.use(express.json());
const port = 3000
 
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!!`)
    }
)