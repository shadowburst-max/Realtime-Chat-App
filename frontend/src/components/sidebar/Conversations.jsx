import { useContext, useEffect, useState } from "react";
import Conversation from "./Conversation";
import { conversationContext } from "../../context/conversationContext";
import useGetConversations from "../../hooks/useGetConversation";
import getEmoji from "../../utils/emojis";

const Conversations = () => {
	const {loading} = useGetConversations();
	const {filteredConversations, conversations} = useContext(conversationContext);
	const [emojiMap, setEmojiMap] = useState({});
	useEffect(() => {
		// If new conversations are added, ensure each gets an emoji
		setEmojiMap((prevMap) => {
			const newMap = { ...prevMap };
			conversations.forEach((conversation) => {
				if (!newMap[conversation._id]) {
					newMap[conversation._id] = getEmoji();
				}
			});
			return newMap;
		})
	}, [conversations]);
	return (
		<div className='flex flex-col max-h-144 overflow-y-auto scrollbar-hidden '>.
			{filteredConversations.map((conversation, idx) => (
				<Conversation 
					key={conversation._id}
					conversation={conversation}
					emoji={emojiMap[conversation._id]}
					lastIdx={idx === conversations.length-1}
				/>
			))}
		</div> 
	);
};
export default Conversations;


