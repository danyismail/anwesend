class MiddlewareAuth {
    static Auth =  (req, res, next) => {
            if (!req.header('API_KEY') || req.header('API_KEY') !== process.env.API_KEY) {
                return res.status(401).json({ status: 'error', message: 'Unauthorized.' })
            }
            next()
        };

}



module.exports = MiddlewareAuth.Auth