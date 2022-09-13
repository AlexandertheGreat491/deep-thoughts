// require statement for jsonwebtoken
const jwt = require('jsonwebtoken');


const secret = 'mysecretsshhhhh';
const expiration = '2h';


module.exports = {
    

    authMiddleware: function({req}) {
        // allows the token to be sent through the req.body, req.query, or the headers
        let token = req.body.token || req.query.token || req.headers.authorization;
    
        // separates "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token
            .split('')
            .pop()
            .trim();
        }
    
        // if there isn't a token, return request object as is
        if (!token) {
            return req;
        }

        try {
            // decode and attach the user data to request object
            const {data} = jwt.verify(token, secret, {maxAge: expiration});
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // returns the updated request object
        return req;
    },
    // the signToken() function expects user object & will add that user's username, email, & id properties to the token.
    signToken: function({username, email, _id}) {
        const payload = {username, email, _id};

        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    }
}