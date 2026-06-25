import User from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import generateJWTAndSetCookie from "../utils/jwt.js";
 
const signup = async (req, res) => {
    try{
        const { fullName, username , password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({error: "Password do not match"});
        }
        const user = await User.findOne({username}); // retrieve a single document from a collection based on condition
        if(user) {
            return res.status(400).json({error: "User already exist"});
        }
        const getProfilePic = username =>
        `https://ui-avatars.com/api/` +
        `?name=${encodeURIComponent(username)}` +
        `&size=200` +
        `&background=random` +
        `&color=ffffff` +
        `&bold=true` +
        `&font-size=0.5` +
        `&rounded=true` +
        `&format=png`;

        // usage
        const boyProfilePic  = getProfilePic(username);
        const girlProfilePic = getProfilePic(username);
        //Password Hash
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
            if(err){
                console.log("Error Hashing Password ", err);
            } else{
                const newUser = new User ({
                fullName, 
                username,
                password: hashedPassword, 
                gender,
                profilePic: (gender === "male" ? boyProfilePic : girlProfilePic),
                });
                if(newUser){
                    await newUser.save();
                    generateJWTAndSetCookie(newUser._id, res);
                    return res.status(201).json({
                        _id: newUser._id,
                        fullName: newUser.fullName,
                        username: newUser.username,
                        profilePic: newUser.profilePic
                    });
                } else{
                    return res.status(400).json({error: "Invalid User data;"});
                }
            }
        });  
    } catch(err){
        console.log("Error in Signup", err);
        res.status(500).json({error: "server side error in signup"});
    }
}
const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        var isPasswordCorrect = false;
        if(user) isPasswordCorrect = bcrypt.compare(password, user.password); //Compare given password with the hashedpassword in database
        if(!user || !isPasswordCorrect){
            res.status(400).json({error: "Invalid username or password"});
        } else {
            generateJWTAndSetCookie(user._id, res); 
            return res.status(201).json({
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                profilePic: user.profilePic
            });
        }

    } catch(err) {
        console.log("Error in Login", err);
        res.status(500).json({error: "server side error in login"});
    }
}
const logout = async (req, res) => {
    try{
        // res.cookie("jwtCookie", "", {maxAge: 0}); 
        res.clearCookie("jwtCookie"); 
        res.status(200).json({message: "Logged out successfully"});
    } catch(err) {
        console.log("Error in Logout", err);
        res.status(500).json({error: "Server Error"});
    }
}

export {login, logout, signup}; 