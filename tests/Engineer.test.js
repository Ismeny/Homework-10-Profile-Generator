const Engineer = require('../lib/Engineer');

describe ('engineer', () => {
    describe('Init', () => {
        it("should create an instance of an engineer when we call it with the new keyword", () => {
            const engineer = new Engineer("Ismeny", 222, "meny2@gmail.com", "meny2");
            expect(engineer.name).toEqual("Ismeny")
            expect(engineer.id).toEqual(222)
            expect(engineer.email).toEqual("meny2@gmail.com")
            expect(engineer.github).toEqual("meny2")
        })
    })

    describe('getName', () =>{
        it('should return the name of the engineer instance that was created', () => {
            const engineer2 = new Engineer("Ismeny", 222, "meny2@gmail.com", "meny2");
            const result = engineer2.getName();
            except(result).toEqual("Ismeny")
        }
        )
    })

    describe('getId', () =>{
        it('should return the id of the engineer instance that was created', () => {
            const engineer3 = new Engineer("Ismeny", 222, "meny2@gmail.com", "meny2");
            const result = engineer3.getId();
            except(result).toEqual(222)
        }
        )
    })

    describe('getEmail', () =>{
        it('should return the email of the engineer instance that was created', () => {
            const engineer4 = new Engineer("Ismeny", 222, "meny2@gmail.com", "meny2");
            const result = engineer4.getEmail();
            except(result).toEqual("meny2@gmail.com")
        }
        )
    })

    describe('getRole', () =>{
        it("should return 'engineer' ", () => {
            const engineer5 = new Engineer("Ismeny", 222, "meny2@gmail.com", "meny2");
            const result = engineer5.getRole();
            except(result).toEqual("engineer")
        }
        )
    })

    describe('getGithub', () =>{
        it('should return the github username of the engineer instance that was created', () => {
            const engineer6 = new Engineer("Ismeny", 222, "meny2@gmail.com", "meny2");
            const result = engineer6.getGithub();
            except(result).toEqual("meny2@gmail.com")
        }
        )
    })
})