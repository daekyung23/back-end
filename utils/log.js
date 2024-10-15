// utils/log.js

require('dotenv').config();

/**
 * Logs messages to the console if ENABLE_LOGGING is true.
 * @param {string} message - The message to log.
 * @param {string} level - The level of the log ('info', 'error', etc.).
 */
const log = (message, level = 'info') => {
    if (process.env.ENABLE_LOGGING === 'true') {
        const timestamp = new Date().toISOString();
        switch (level) {
            case 'error':
                console.error(`[${timestamp}] [ERROR]: ${String(message)}`);
                break;
            case 'warn':
                console.warn(`[${timestamp}] [WARN]: ${String(message)}`);
                break;
            case 'info':
            default:
                console.log(`[${timestamp}] [INFO]: ${String(message)}`);
                break;
        }
    }
};

module.exports = log;