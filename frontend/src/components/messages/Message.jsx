import { useContext } from "react";
import { authContext } from "../../context/authContext";
import { conversationContext } from "../../context/conversationContext";
import formatDate from "../../utils/formatDate";

const  Message = ({message}) => {
    const {authUser} = useContext(authContext);
    const {selectedConversation} = useContext(conversationContext);
    const mine = authUser._id === message.senderId;
    const profilePic = mine ? authUser.profilePic : selectedConversation?.profilePic;
    const chatClassName = mine ? 'chat-end' : 'chat-start';
    const name = mine ? authUser.fullName : selectedConversation?.fullName;
    const formattedTime = formatDate(message.createdAt);
    const bgColor = mine ? 'bg-blue-500' : "";
    return (
        <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
        {/* <div className="w-10 md:w-8 rounded-full"> 
            <img
            alt="chat bubble component"
            src={profilePic}/>
        </div> */}
        </div>
        <div className={`chat-bubble ${bgColor} text-xl md:text-xs`}>{message.message}</div>
        <time className="text-xs md:opacity-70 text-cyan-200 ">{formattedTime}</time>
        </div> 
    )
} 

export default Message;