import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'
import { connect } from 'mongoose'  
import mongoose from 'mongoose'

// app config
const app = express()
const port = process.env.PORT || 4000

mongoose.connect(process.env.MONGODB_URI)

.then(()=> console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));
connectCloudinary();


// middlewares
app.use(express.json())
app.use(cors())

// api end point
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)


app.get('/', (req, res) => {
  res.send('Api working...')
})

app.listen(port, () => console.log('Server started', port)) 
