const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeaders = req.get('Authorization');
    if (!authHeaders) {
        return res.status(401)
            .json({message: 'Not Authenticated'})
    }

    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecret')
    } catch (error) {
        return res.status(401)
            .json({message: 'Token Is Invalid', error});
    }

    if (!decodedToken) {
        return res.status(401)
            .json({message: 'Not Authenticated'});
    }

    req.userId = decodedToken.userId;
    next();
};