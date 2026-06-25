import User from "../models/usermodel.js";

const getUsersForSidebar = async (req, res) => {
    try{
        const loggedInUserID = req.user._id;
        const filteredUsers = await User.find({_id: {$ne : loggedInUserID}}).select("-password"); //Find all user except the loggedInUser
        return res.status(200).json(filteredUsers);
    } catch (err){
        console.log("Error in userController", err);
        return res.status(500).json({error: "Internal server error"});
    }
}

export default getUsersForSidebar;