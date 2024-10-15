// responseLogger.js
const ENABLE_RESPONSE_LOGGING = process.env.ENABLE_LOGGING === 'true';
const ENABLE_RESPONSE_BODY_LOGGING = process.env.ENABLE_RESPONSE_BODY_LOGGING === 'true';
const log = require('../utils/log');

// 응답 및 에러 로깅 미들웨어
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
        if (res.statusCode >= 400 && ENABLE_LOGGING) {
            log(`[에러] ${res.statusCode}`, '에러');
            log(`[요청]: ${req.method} ${req.url}`)
        }
    });

    next();
};

module.exports = responseLogger;