import { useContext, useEffect, useRef } from "react";
import Message from "./Message";
import { conversationContext } from "../../context/conversationContext";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages  from "../../hooks/useListenMessages.js";

const Messages = () => {
	const {messages} = useContext(conversationContext);
	const messagesEndRef = useRef(null); // Ref for scrolling
    // Scroll to bottom whenever messages change
    useEffect(() => {
		setTimeout(() => {
			messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 500);
    }, [messages]);
	useGetMessages(); 
	useListenMessages();
	return (
		<div className="flex-1 overflow-y-auto px-2 md:px-4 py-4 space-y-4 max-h-[calc(100vh-100px)]">
			{messages?.length > 0 ? (
				messages.map((message, idx) => <Message key={idx} message={message} />)
			) : (
				<p className="text-center text-gray-600">No messages yet</p>
			)}
			 <div ref={messagesEndRef} />
		</div>
	);
};
 
export default Messages;

