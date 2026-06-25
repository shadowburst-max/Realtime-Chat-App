import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { authContext } from '../context/authContext';

const useLogin = () => {   
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useContext(authContext);
    const login = async (username, password) => {
        if(loading) return;
        const isValid = handleError(username, password);
        if(!isValid) {
            return;
        }
        setLoading(true);
        try{
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({username, password}),
            })
            const data = await res.json();
            if(data.error){
                
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            toast.success("Logged In Successfully") 
        } catch(error){
            toast.error(error.message);
        } finally {
			setLoading(false);
		}
    }
    return {loading, login};
}

export default useLogin;

const handleError = (username, password) => {
    if(!username || !password){
        toast.error("All fields are required");
        return false;
    }
    return true;
}