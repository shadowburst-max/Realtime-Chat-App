import { useContext } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { conversationContext } from "../../context/conversationContext";
import { authContext } from "../../context/authContext";
import { FaArrowLeftLong } from "react-icons/fa6";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useContext(conversationContext);

	// If no chat is selected, show the placeholder (Desktop only, as Mobile hides this container via Home.jsx)
	if (!selectedConversation) {
		return <NoChatSelected />;
	}

	return (
		<div className="flex flex-col h-full w-full border-l border-slate-500">
			{/* Header */}
			<div className="bg-gray-800 pl-2 py-4 md:py-2 mb-2 flex items-center gap-2">
				<FaArrowLeftLong 
					className='md:hidden '
					onClick={() => setSelectedConversation(null)}
				/>

				<div className="avatar placeholder px-2">
					<div className="rounded-full w-9">
						<img src={selectedConversation.profilePic} alt="user avatar" />
					</div>
				</div>
				<span className="text-shadow-white">{selectedConversation.fullName}</span>
			</div>
			<Messages />
			<MessageInput />
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useContext(authContext);
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser?.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
	);
};