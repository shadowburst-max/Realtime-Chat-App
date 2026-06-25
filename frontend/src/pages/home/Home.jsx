import { useContext } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import ConversationProvider, { conversationContext } from "../../context/conversationContext";
import SocketProvider from "../../context/socketContext";

const Home = () => {
    return (
        <ConversationProvider>
            <SocketProvider>
                <HomeLayout />
            </SocketProvider>
        </ConversationProvider>
    );
};

const HomeLayout = () => {
    const { selectedConversation } = useContext(conversationContext);

    return (
        <div className='flex h-full w-full'>
            <div className={`
                ${selectedConversation ? "hidden md:flex" : "flex"} 
                flex-col w-full md:w-[300px]
            `}>
                <Sidebar />
            </div>
            <div className={`
                ${!selectedConversation ? "hidden md:flex" : "flex"} 
				w-full
            `}>
                <MessageContainer />
            </div>

        </div>
    );
};

export default Home;