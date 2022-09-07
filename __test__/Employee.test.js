const Employee = require('../lib/Employee');

test('Checks the Employee class for name, id, email and role', () => {
    const employee = new Employee('Employee1', 88, 'employee@fakemail.com');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
    expect(employee.getRole()).toBe('Employee');
});