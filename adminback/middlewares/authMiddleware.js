const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        /* Get token from header "react - userend axiosInstance" */
        const token = req.header("authorization")?.split(" ")[1];
        const decryptedToken = jwt.verify(token, process.env.jwt_secret_key);
        req.body.userId = decryptedToken.userId;
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        // Pass the error to the next middleware for error handling
        next(error);
    }
};
