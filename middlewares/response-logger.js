// middleware/response-logger.js
const ENABLE_RESPONSE_LOGGING = process.env.ENABLE_LOGGING === 'true';
const ENABLE_RESPONSE_BODY_LOGGING = process.env.ENABLE_RESPONSE_BODY_LOGGING === 'true';
const log = require('../utils/log');

// Response and error logging middleware
const responseLogger = (req, res, next) => {
    const originalSend = res.send;

    res.send = function (body) {
        if (ENABLE_RESPONSE_LOGGING) {
            log(`[응답] ${res.statusCode}`);
            if (ENABLE_RESPONSE_BODY_LOGGING){
              log(`[내용]: ${body}`);
            }
        }
        return originalSend.apply(this, arguments);
    };

    res.on('finish', () => {
        if (res.statusCode >= 400 && res.statusCode < 500 && ENABLE_RESPONSE_LOGGING) {
            // Log only client errors (4xx)
            log(`[에러] ${res.statusCode}`, '에러');
            log(`[요청]: ${req.method} ${req.url}`);
        }
        // Do not log server errors (5xx)
    });

    next();
};

module.exports = responseLogger;
