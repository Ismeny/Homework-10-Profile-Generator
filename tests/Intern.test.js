const Intern = require('../lib/Intern');

describe ('intern', () => {
    describe('Init', () => {
        it("should create an instance of an intern when we call it with the new keyword", () => {
            const intern = new Intern("Ismeny", 222, "meny2@gmail.com", "TXST");
            expect(intern.name).toEqual("Ismeny")
            expect(intern.id).toEqual(222)
            expect(intern.email).toEqual("meny2@gmail.com")
            expect(intern.school).toEqual("TXST")
        })
    })

    describe('getName', () =>{
        it('should return the name of the intern instance that was created', () => {
            const intern2 = new Intern("Ismeny", 222, "meny2@gmail.com", "TXST");
            const result = intern2.getName();
            expect(result).toEqual("Ismeny")
        }
        )
    })

    describe('getId', () =>{
        it('should return the id of the intern instance that was created', () => {
            const intern3 = new Intern("Ismeny", 222, "meny2@gmail.com", "TXST");
            const result = intern3.getId();
            expect(result).toEqual(222)
        }
        )
    })

    describe('getEmail', () =>{
        it('should return the email of the intern instance that was created', () => {
            const intern4 = new Intern("Ismeny", 222, "meny2@gmail.com", "TXST");
            const result = intern4.getEmail();
            expect(result).toEqual("meny2@gmail.com")
        }
        )
    })

    describe('getRole', () =>{
        it("should return 'intern' ", () => {
            const intern5 = new Intern("Ismeny", 222, "meny2@gmail.com", "TXST");
            const result = intern5.getRole();
            expect(result).toEqual("Intern")
        }
        )
    })

    describe('getSchool', () =>{
        it('should return school of the intern instance that was created', () => {
            const intern6 = new Intern("Ismeny", 222, "meny2@gmail.com", "TXST");
            const result = intern6.getSchool();
            expect(result).toEqual("TXST")
        }
        )
    })
})