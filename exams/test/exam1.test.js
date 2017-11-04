// const students = [
//     require('../exam1/aleksandr.luchaninov'),
//     require('../exam1/aleksii.komendantov'),
//     require('../exam1/alena.makarova'),
//     require('../exam1/alexey.derepa'),
//     require('../exam1/andrei.zuikov'),    
//     require('../exam1/anna.kuznietsova'),
//     require('../exam1/arthor.serdyuk'),
//     require('../exam1/artyom.seleznyov'),
//     require('../exam1/bohdan.breslavets'),
//     require('../exam1/dmitry.mezerny'),
//     require('../exam1/igor.vaskonyan'),
//     require('../exam1/katerina.baychurina'),
//     require('../exam1/kyrylo.shtokolov'),
//     require('../exam1/maxim.shevjakov'),
//     require('../exam1/maxim.sobetsky'),
//     require('../exam1/natalia.podolyaka'),
//     require('../exam1/sofya.tavrovskaya'),
//     require('../exam1/svyatoslav.kotlyar'),
//     require('../exam1/valeriya.lisovaya'),
//     require('../exam1/yamkooi.alexei'),
//     require('../exam1/yevhenii.nazarchuk')
// ]


const students = [
    require('../exam1/aleksii.komendantov')
]


describe('Exam 1', () => {
    students.forEach((student) => {
        it(`Empty array`, () => {
            const { task: func } = student;
    
            expect(func(1, 100)).toEqual([]);
        });

        it(`1 - 300`, () => {
            const { task: func } = student;
    
            expect(func(1, 300)).toEqual([[220, 284]]);
        });


        it(`1 - 100`, () => {
            const { task: func } = student;
    
            expect(func(1, 100)).toEqual([]);
        });

        it(`1 - 1300`, () => {
            const { task: func } = student;
    
            console.log('!!!!!!', func(5000, 10000));

            expect(func(1, 1300)).toEqual([[220, 284], [1184, 1210]]);
        });

        it(`undefined`, () => {
            const { task: func } = student;
    
            expect(func()).toEqual(false);
        });

        it(`string number`, () => {
            const { task: func } = student;
    
            expect(func('1', 1)).toEqual(false);
        });

        it(`-1 - 100`, () => {
            const { task: func } = student;
    
            expect(func(-1, 100)).toEqual(false);
        });

        it(`500 - 1`, () => {
            const { task: func } = student;
            
            expect(func(500, 1)).toEqual(false);
        });
    });
});

