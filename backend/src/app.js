import express from 'express';

import {createServer} from 'node:http';

import {Server} from 'socket.io';

import mongoose from 'mongoose';

import cors from 'cors';

import {connectToSocket} from './controllers/socketManager.js'
import userRoutes from './routes/users.route.js'

const app = express();

const server = createServer(app);

const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:true}))

app.use("/api/v1/users", userRoutes)

const start = async () => {
    app.set("mongo_user");
    const connectionDB = await mongoose.connect("mongodb+srv://princeprajapati3848:kqAdK815FnCDrRE3@cluster0.hnnsa.mongodb.net/")
    console.log(`connected to DB ${connectionDB.connection.host}`)
    server.listen(app.get("port"), ()=> {
        console.log("listenning on port 8000")
    })
}

start()