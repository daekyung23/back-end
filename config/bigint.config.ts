// BigInt prototype 확장을 위한 타입 선언
declare global {
  interface BigInt {
    toJSON(): string;
  }
}

export const initBigIntJson = () => {
  BigInt.prototype.toJSON = function() {
    return this.toString()
  }
}