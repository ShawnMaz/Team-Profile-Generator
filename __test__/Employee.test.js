const Employee = require('../lib/Employee');

test('create Employee object', () => {
    const employee = new Employee('Shawn', 88, 'shawn@fakemail.com');

    expect(employee.name).toBe('Shawn');
    expect(employee.id).toBe(88);
    expect(employee.email).toEqual(expect.stringContaining('@'));
});

test("get employee's name as a string", () => {
    const employee = new Employee('Shawn', 88, 'shawn@fakemail.com');

    expect(employee.getName()).toBe('Shawn');
});

test("get employee's id as a number", () => {
    const employee = new Employee('Shawn', 88, 'shawn@fakemail.com');

    expect(employee.getId()).toBe(88);
});

test("get employee's email as a string", () => {
    const employee = new Employee('Shawn', 88, 'shawn@fakemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});