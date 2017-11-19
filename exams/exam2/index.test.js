const student = require('./exam2/kovalyova');

describe('Dev-Pro OpenJS - Exam 2', () => {
    const { task: project } = student;

    describe('Default state', () => {
        it('Flag isBusy should be false by default', () => {
            expect(project.isBusy).toBe(false);
        });
    
        it('It should has empty array of participants by default', () => {
            expect(project.participants.length).toBe(0);
        });
    
        it('It should has empty object of pricing by default', () => {
            expect(Object.keys(project.pricing).length).toBe(0);
        });
    });

    describe('Method init', () => {
        it('It should set participants array on init call', () => {
            const participants = [{ seniorityLevel: 'intermediate' }];
            project.init(participants, project.pricing);
            expect(project.participants).toEqual(participants);
        });
    
        it('It should set pricing on init call', () => {
            const pricing = { 'junior': 10 };
            project.init(project.participants, pricing);
            expect(project.pricing).toEqual(pricing);
        });

        it('It shouldn\'t change participants if arguemnts are wrong', () => {
            const participants = project.participants;
            project.init();
            expect(project.participants).toEqual(participants);
        });

        it('It shouldn\'t change pricing if arguemnts are wrong', () => {
            const pricing = project.pricing;
            project.init();
            expect(project.pricing).toEqual(pricing);
        });
    });

    describe('Method findParticipant', () => {
        it('It should execute callback with found participant by given functor', (done) => {
            const participant = { seniorityLevel: 'intermediate', firstName: 'Sergey', lastName: 'Zotenko' };
            project.init([participant], {});
            project.findParticipant((item) => item.lastName === 'Zotenko', (result) => {
                expect(result).toEqual(participant);
                done();
            });
        });

        it('It should execute callback with null as first argument if participant wasn\'t found', (done) => {
            const participant = { seniorityLevel: 'intermediate', firstName: 'Sergey', lastName: 'Zotenko' };
            project.init([participant], {});
            project.findParticipant((item) => item.lastName === 'Doe', (result) => {
                expect(result).toBeNull();
                done();
            });
        });
    });

    describe('Method findParticipants', () => {
        it('It should execute callback with array of found paticipants by given functor', (done) => {
            const participants = [
                { seniorityLevel: 'intermediate', firstName: 'Sergey', lastName: 'Zotenko' },
                { seniorityLevel: 'intermediate', firstName: 'Dmitriy', lastName: 'Zotenko' }
            ];

            project.init([...participants, { seniorityLevel: 'intermediate', firstName: 'Neil', lastName: 'Armstrong' }], {});
            project.findParticipants((item) => item.lastName === 'Zotenko', (result) => {
                expect(result).toEqual(participants);
                done();
            });
        });


        it('It should execute callback with empty array as first argument if participants weren\'t found', (done) => {
            const participants = [
                { seniorityLevel: 'intermediate', firstName: 'Sergey', lastName: 'Zotenko' },
                { seniorityLevel: 'intermediate', firstName: 'Dmitriy', lastName: 'Zotenko' },
                { seniorityLevel: 'intermediate', firstName: 'Neil', lastName: 'Armstrong' }
            ];

            project.init(participants, {});
            project.findParticipants((item) => item.lastName === 'Doe', (result) => {
                expect(result).toEqual([]);
                done();
            });
        });
    });

    describe('Method addParticipant', () => {
        beforeEach(() => {
            project.init([], {});
        });

        it('It should add new participant on addParticipant call with correct arguments', (done) => {
            const participant = { seniorityLevel: 'intermediate' };
            project.addParticipant(participant, (err) => {
                expect(project.participants).toEqual([participant]);
                expect(err).toBe(undefined);
                done();
            });
        });

        it('It shouldn\'t add new participant on addParticipant call with incorrect arguments', (done) => {
            const participant = { firstName: 'Sergey', lastName: 'Zotenko' };
            project.addParticipant(participant, (err) => {
                expect(project.participants).toEqual([]);
                expect(err).not.toBe(undefined);
                done();
            });
        });
    });

    describe('Method removeParticipant', () => {
        const participant = { seniorityLevel: 'intermediate' };

        it('It should remove participant and execute callback with removed participant on removeParticipant method call', (done) => {
            project.init([ participant ], {});
            project.removeParticipant(participant, (removedParticipant) => {
                expect(project.participants).toEqual([]);
                expect(removedParticipant).toEqual(participant);
                done();
            });
        });

        it('It shouldn\'n remove any participant and execute callback with null on removeParticipant method call', (done) => {
            const participants = [{ seniorityLevel: 'intermediate' }];
            project.init(participants, {});
            project.removeParticipant(participant, (removedParticipant) => {
                expect(project.participants).toEqual(participants);
                expect(removedParticipant).toBeNull();
                done();
            });
        });
    });

    describe('Method setPricing', () => {
        beforeEach(() => {
            project.init([], {});
        });

        it('It should set pricing object on setPricing method call', (done) => {
            const pricingObject = { 'intermediate': 100 };
            project.setPricing(pricingObject, () => {
                expect(project.pricing).toEqual(pricingObject);
                done();
            });
        });
    });

    describe('Method calculateSalary', () => {
        it('It should calculate salary of participans be given perioud', () => {
            project.init([ 
                { 
                    seniorityLevel: 'junior'
                },
                {
                    seniorityLevel: 'junior'
                },
                {
                    seniorityLevel: 'intermediate'
                }
            ], { 'junior': 40, 'intermediate': 100 });
            expect(project.calculateSalary(1)).toBe(1440);
        });

        it('It should throw error if pricing wasn\'t found', () => {
            project.init([ 
                { 
                    seniorityLevel: 'junior'
                },
                {
                    seniorityLevel: 'junior'
                },
                {
                    seniorityLevel: 'intermediate'
                }
            ], { 'junior': 40 });
            expect(() => {
                project.calculateSalary(1);
            }).toThrow();
        });
    });
});