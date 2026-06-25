import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST"]
    }
});

const userSocketMap = {}; //{userId: socketId}

io.on("connection", (socket)=> {
    console.log("Server: New connection", socket.id);
    const userId = socket.handshake.query.userId;
    userSocketMap[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); //To sockets
    socket.on("disconnect", ()=>{
        console.log("Server: user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export const getReceiverSocketId = (receiverId)=>{
    return userSocketMap[receiverId];
}

export {app, io, server};