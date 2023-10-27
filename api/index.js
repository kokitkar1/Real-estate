import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
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
app.use(cookieParser())
const port = 3000
 
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!!`)
    }
)