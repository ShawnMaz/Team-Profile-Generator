const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern ('Spiderman', 2000, 'spiderman@fakemail.com', 'UofT');

    expect(intern.name).toBe('Spiderman');
    expect(intern.id).toBe(2000);
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toBe('UofT');
});

test("get intern's school as a string", () => {
    const intern = new Intern ('Spiderman', 2000, 'spiderman@fakemail.com', 'UofT');

    expect(intern.getSchool()).toBe('UofT');
});

test("get intern's role as a string", () => {
    const intern = new Intern ('Spiderman', 2000, 'spiderman@fakemail.com', 'UofT');

    expect(intern.getRole()).toBe('Intern');
});