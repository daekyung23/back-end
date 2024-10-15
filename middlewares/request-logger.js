// middleware/requestLogger.js
const ENABLE_REQUEST_LOGGING = process.env.ENABLE_LOGGING === 'true';
const ENABLE_REQUEST_BODY_LOGGING = process.env.ENABLE_REQUEST_BODY_LOGGING === 'true';
const log = require('../utils/log'); // 실제 로그 유틸리티 경로로 수정하세요

// 요청 로깅 미들웨어
const requestLogger = (req, res, next) => {
    if (ENABLE_REQUEST_LOGGING) {
        const { method, url, headers } = req;
        log(`[요청] ${method} ${url}`);
        //log(`[헤더]: ${JSON.stringify(headers)}`);
        
        if (ENABLE_REQUEST_BODY_LOGGING && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
            log(`[내용]: ${JSON.stringify(req.body)}`);
        }
    }
    next();
};

module.exports = requestLogger;
