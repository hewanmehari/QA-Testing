 const{add,subtract,multiply,divide}=require('./math');

test('add 2+3 to equal 5', () => {     
    expect(add(2, 3)).toBe(5);       
});
test('subtract 8-4 to equal 4', () => {     
    expect(subtract(8, 4)).toBe(4);       
});
test('multiply 8*3 to equal 24', () => {     
    expect(multiply(8, 3)).toBe(24);       
});
test('divide 16/8 to equal 2', () => {     
    expect(divide(16, 8)).toBe(2);       
});