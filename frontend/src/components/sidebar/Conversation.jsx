import { useContext } from "react";
import { conversationContext } from "../../context/conversationContext";
import { socketContext } from "../../context/socketContext";

const Conversation = ({conversation, emoji, lastIdx}) => {
	const {setSelectedConversation, selectedConversation} = useContext(conversationContext);
	const {onlineUsers} = useContext(socketContext);
	const isSelected = conversation._id === selectedConversation?._id;
	const isOnline = onlineUsers.includes(conversation._id);
	return (
		<>
			<div className={`flex gap-3 items-center hover:bg-sky-500 hover:bg-opacity-70 rounded-lg p-1 cursor-pointer transition duration-200 ease-in-out
			${isSelected ? "bg-sky-500" : " "} `}
			onClick={()=>{setSelectedConversation(conversation)}} >
				<div className='avatar'>
					<div className={`w-12 md:10 rounded-full avatar-${isOnline ? "online" : " "}`}>
					{/* <div className={`w-12 rounded-full avatar-online`}> */}
						<img
							src={conversation.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex justify-between items-center'>
						<p className='font-semibold text-gray-100'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div> 
			{lastIdx ? null : <div className='divider my-1' />}
		</>
	);
};
export default Conversation;


