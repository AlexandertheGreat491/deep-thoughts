// require statement for jsonwebtoken
const jwt = require('jsonwebtoken');


const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    // the signToken() function expects user object & will add that user's username, email, & id properties to the token.
    signToken: function({username, email, _id}) {
        const payload = {username, email, _id};

        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    }
}