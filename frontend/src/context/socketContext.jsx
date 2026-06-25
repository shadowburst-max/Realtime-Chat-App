import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./authContext";
import io from "socket.io-client";

const socketContext = createContext();
export {socketContext};

const socketURL = import.meta.env.MODE === "development" 
    ? "http://localhost:3000" 
    : "/";

const SocketProvider = ({children}) =>{
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useContext(authContext);

    useEffect(()=>{
        if(authUser){ 
            const socket = io(socketURL, {
                query:{
                    userId: authUser._id
                }
            });
            setSocket(socket); 
            socket.on("getOnlineUsers", (onlineUsers)=>{ 
                setOnlineUsers(onlineUsers);
            })
            return ()=>{
                socket.close();
            }
        }
        else{
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    }, [authUser]);

    return <socketContext.Provider value={{socket, setSocket, onlineUsers, setOnlineUsers}} >
        {children}
    </socketContext.Provider>
}

export default SocketProvider;