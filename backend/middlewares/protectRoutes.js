import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

const protectRoutes = async (req, res, next) => {
    try{
        const token = req.cookies.jwtCookie; //Get the cookie using cookieParser as middleware;
        if(!token){
            return res.status(401).json({error: "Unauthorized:- No token provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  
        if(!decoded){
            return res.status(401).json({error: "Invalid Token"});
        }
        const userId = decoded.userID;
        const user = await User.findById(userId); //Get the user using the userId from the token
        if(!user) {
            return res.status(401).json({error: "User does not exist!"});
        }
        req.user = user; // save user to req.user
        next();
    } catch(err) {
        console.log("Error in ProtectRoutes MiddleWare", err);
        return res.status(500).json({error: "Internal Server Error"});
    }  
}

export default protectRoutes;