import { createContext, useState } from "react"; 
 
function getStoredUser(){
    try{
        const user = JSON.parse(localStorage.getItem("chat-user")) || null; //  || null:- if JSON returns empty string 
        return user;
    } catch(error){
        return null; // if parsing fails
    }
}

const authContext = createContext(); //Creating context;
//wrapper function taking component as input ex:- <AuthProvider> <App /> <AuthProvider>
function AuthProvider({children}) {
    const [authUser, setAuthUser] = useState(getStoredUser());
    return (
        <authContext.Provider value={{authUser, setAuthUser}}>  {/*providing context*/}
            {children}
        </authContext.Provider>
    ) 
} 
 
export default AuthProvider;
export {authContext};
