export class Calculator {
  multiply(x: number, y: number): number {
    return x * y;
  }
  
  divide(x: number, y: number): number | null {
    if (y === 0) {
      return null;
    }
    return x / y;
  }
}
