import { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { conversationContext } from '../context/conversationContext'

const useGetConversations = () => {
    const [loading, setLoading] = useState(false); 
    const {setConversations} = useContext(conversationContext);
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try{
                const res = await fetch("/api/users");
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch(error){
                toast.error(error.message);
            } finally{
                setLoading(false);
            }
        }
        getConversations();
    }, []);
    return { loading };
}

export default useGetConversations