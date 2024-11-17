declare global {
  interface BigInt {
    toJSON(): string;
  }
}

export const initBigIntJson = (): void => {
  BigInt.prototype.toJSON = function() {
    return this.toString()
  }
}