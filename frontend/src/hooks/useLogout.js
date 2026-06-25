import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { authContext } from '../context/authContext'

const useLogout = () => {
    const [loading, setLoading] = useState(false); 
    const {setAuthUser} = useContext(authContext);
    const logout = async () => {
        if(loading) return;
        setLoading(true);
        try{
                const res = await fetch("/api/auth/logout", {
                method: "POST", 
                headers: {"Content-Type" : "application/json"},
                });
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                localStorage.removeItem("chat-user");
                setAuthUser(null);
                toast.success("LoggedOut Successfully");
            } catch(error){
                toast.error(error.message);
            } finally{
                setLoading(false);
            }
    }
    return {loading, logout}; 
}
 
export default useLogout;
