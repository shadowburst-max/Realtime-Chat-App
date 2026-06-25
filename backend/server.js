import express from "express"; 
import dotenv from "dotenv"; 

import authroutes from "./routes/authroutes.js";
import messageroutes from "./routes/messageroutes.js";
import userroutes from "./routes/userroutes.js";

import connectToMongoDB from "./database/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import {app, server} from "./socket/socket.js" ;

dotenv.config();
const port = 3000;

app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);
app.use("/api/users", userroutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

const startServer = async () => {
    try {
        await connectToMongoDB();
        server.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        });
    } catch (error) {
        process.exit(1);
    }
};
startServer();