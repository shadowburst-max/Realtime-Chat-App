import { createContext, useEffect, useState } from "react";

const conversationContext = createContext();

function ConversationProvider({children}){ 
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [filteredConversations, setFilteredConversations] = useState([]);
    // Ensure filteredConversations defaults to conversations when no search is active
    useEffect(() => {
        setFilteredConversations(conversations);
    }, [conversations]);
     
    return ( 
        <conversationContext.Provider value={{conversations, setConversations, selectedConversation, setSelectedConversation, messages, setMessages, filteredConversations, setFilteredConversations}}>
            {children}
        </conversationContext.Provider>
    ) 
}
export default ConversationProvider;
export {conversationContext}; 