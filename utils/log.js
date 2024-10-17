require('dotenv').config();

const log = (message, level = '정보') => {
    const { NODE_ENV } = process.env;
    const timestamp = new Date().toISOString();

    if (message instanceof Error) {
        // 에러 객체인 경우
        const errorMessage = `${message.stack}`;
        if (NODE_ENV === 'development') {
            // 개발 환경에서는 전체 스택 트레이스를 출력
            console.error(`[${level}] - ${timestamp}: ${errorMessage}`);
        } else {
            // 배포 환경에서는 에러 메시지만 출력
            console.error(`[${level}] - ${timestamp}: ${message.message}`);
        }
    } else {
        // 일반 메시지인 경우
        if (NODE_ENV === 'development' || process.env.ENABLE_LOGGING === 'true') {
            switch (level) {
                case '에러':
                    console.error(`[${level}] - ${timestamp}: ${message}`);
                    break;
                case '경고':
                    console.warn(`[${level}] - ${timestamp}: ${message}`);
                    break;
                case '정보':
                default:
                    console.log(`[${level}] - ${timestamp}: ${message}`);
                    break;
            }
        }
    }
};

module.exports = log;
