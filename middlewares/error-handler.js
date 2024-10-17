const { HttpError, ValidationError } = require('../utils/custom-error');

const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    const response = {
      message: err.message,
    };

    // ValidationError의 경우 errors 배열을 포함
    if (err instanceof ValidationError) {
      response.errors = err.errors;
    }

    // 스택 정보를 응답에 포함
    response.stack = err.stack; // 스택 정보 추가

    return res.status(err.statusCode).json(response);
  } else {
    console.error(err); // 에러를 콘솔에 출력
    // 일반 에러의 경우 스택 정보를 포함
    res.status(500).json({ 
      message: 'Internal Server Error',
      stack: err.stack // 스택 정보 추가
    });
  }
};

module.exports = errorHandler;
