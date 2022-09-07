const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('Batman', 2011, 'batman@fakemail.com', 1234567890);

    expect(manager.name).toBe('Batman');
    expect(manager.id).toBe(2011);
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("get manager's role", () => {
    const manager = new Manager('Batman', 2011, 'batman@fakemail.com', 1234567890);

    expect(manager.getRole()).toBe('Manager');
});

test("get manager's office number", () => {
    const manager = new Manager('Batman', 2011, 'batman@fakemail.com', 1234567890);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});