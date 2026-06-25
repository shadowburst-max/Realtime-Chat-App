import jwt from "jsonwebtoken"

const generateJWTAndSetCookie = (userID, res) => {
    // Generate token using sign method of jwt
    const token = jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });
    // Set the cookie 
    res.cookie("jwtCookie", token, {
        maxAge: 15*24*60*60*1000, // in ms
        httpOnly: true, //Prevent XSS attacks
        sameSite: "strict" //Cross-site request forgery (CSRF) attacks
    });
}
  
export default generateJWTAndSetCookie;