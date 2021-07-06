const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should Multiply two floating point numbers correctly", () => {
        const result = multiply(2.5, 8);
        expect(result).toBe(20);
      });
    
});
