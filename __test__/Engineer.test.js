const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('Tony Stark', 3000, 'tony.stark@fakemail.com', 'TonyStarkGithub');

    expect(engineer.name).toBe('Tony Stark');
    expect(engineer.id).toBe(3000);
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toBe('TonyStarkGithub');
});

test("get engineer's github username as a string", () => {
    const engineer = new Engineer('Tony Stark', 3000, 'tony.stark@fakemail.com', 'TonyStarkGithub');

    expect(engineer.getGithub()).toBe('TonyStarkGithub');
});

test("get engineer's role as a string", () => {
    const engineer = new Engineer('Tony Stark', 3000, 'tony.stark@fakemail.com', 'TonyStarkGithub');

    expect(engineer.getRole()).toBe('Engineer');
});