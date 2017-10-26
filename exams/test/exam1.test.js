const student = require('../exam1/sergey.zotenko');

describe('Exam 1', () => {
    it(`Exam1 of ${student.firstName} ${student.secondName}`, () => {
        const { task: func } = student;

        /* Correct input */
        expect(func(1, 1)).toEqual([]);
        expect(func(1, 300)).toEqual([[220, 284]]);

        /* Not correct input */
        expect(func(-1, 300)).toBe(false);
        expect(func(300, 1)).toBe(false);
        expect(func('1', '300')).toBe(false);
    });
});

