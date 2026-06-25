import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { authContext } from "../context/authContext";

const useSignUp = () => { 
    const [loading, setLoading] = useState(false); 
    const { setAuthUser } = useContext(authContext);
    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        if(loading) return;
        const isValid = handleError({fullName, username, password, confirmPassword, gender});
        if(!isValid) return;
        setLoading(true);
        try{  
            const res = await fetch("/api/auth/signup", {
                method: "POST", 
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender}),
         }) 
            const data = await res.json(); //returns js object
            if(data.error){
                throw new Error(data.error);
            }
            // local storage
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

        } catch(error){
            toast.error(error.message);
        } finally{
            setLoading(false);
        } 
    }
    return {loading, signup};
} 

const handleError = ({fullName, username, password, confirmPassword, gender}) => {
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("All fields are required");
        return false;
    }
    if(password.length < 6){
        toast.error("Password should be atleast 6 characters long");
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Password do not match");
        return false;
    }
    return true;
}

export default useSignUp;