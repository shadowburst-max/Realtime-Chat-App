import { get } from "mongoose";
import Conversation from "../models/conversationmodel.js";
import Message from "../models/messagemodel.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js"

const sendMessage = async (req, res) => {
    try{
        const {id: receiverId} = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({participants: {$all : [senderId, receiverId]}});  //Use $all when order does not matter
        if(!conversation)
        {
           conversation = await Conversation.create({
            participants: [senderId, receiverId],
           });
        }
        const { message } = req.body;
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });
        
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // await newMessage.save();
        // await conversation.save();
        await Promise.all([newMessage.save(), conversation.save()]); //handling multiple asynchronous operations simultaneously

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        return res.status(201).json(newMessage); 
    } catch(err) {
        console.log("Error in MessageController", err);
        return res.status(500).json({message: "Internal server error"});
    }
}
const getMessages = async (req, res) => {
    try{
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({participants: {$all : [senderId, userToChatId]}}).populate("messages"); //automaticall replaces message field(id) with actual messages
        if(!conversation)
        {
            return res.status(200).json([]);
        }
        return res.status(200).json(conversation.messages);
    } catch(err){
        console.log("Error in MessageController", err);
        return res.status(500).json({message: "Internal server error"});
    }
}
export {sendMessage, getMessages};