import jwt from 'jsonwebtoken'

class JsonWebToken {
    /**
     *
     * @param {*} options JWT options
     */
    constructor(options) {
        this.options = options;
    }

    /**
     * Sign JWT token
     * @param {*} token Instance of Token class
     */
    sign(token) {
        return new Promise((resolve, reject) => {
            console.log(token.exp)
            jwt.sign(token.payload, process.env.JWT_SECRET, { expiresIn: token.exp }, function (err, token) {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        })
    }

    /**
     * Verify JWT token
     * @param {} jwtToken JWT token in String format
     */
    verify(jwtToken) {
        return new Promise((resolve, reject) => {
            jwt.verify(jwtToken, "GSdAJufwEhkgakfWvQnE", function (err, decoded) {
                if (err) {
                    if (err.name === 'TokenExpiredError') {
                        reject(new Error('JWT token has expired'));
                    } else {
                        resolve(false)
                    }
                } else {
                    resolve(decoded)
                }
            });
        })
    }
}

export default JsonWebToken;