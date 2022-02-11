import calculator from '../code/calculator';
test('Calculation', () => {
    expect(calculator().add(2, 2)).toBe(4);
    expect(calculator().subtract(5, 3)).toBe(2);
    expect(calculator().multiply(5, 5)).toBe(25);
    expect(calculator().divide(100, 2)).toBe(50);
});