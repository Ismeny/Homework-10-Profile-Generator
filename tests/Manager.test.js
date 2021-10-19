const Manager = require('../lib/Manager');

describe ('Manager', () => {
    describe('Init', () => {
        it("should create an instance of an manager when we call it with the new keyword", () => {
            const manager = new Manager("Ismeny", 222, "meny2@gmail.com", 512);
            expect(manager.name).toEqual("Ismeny")
            expect(manager.id).toEqual(222)
            expect(manager.email).toEqual("meny2@gmail.com")
            expect(manager.officeNum).toEqual(512)
        })
    })

    describe('getName', () =>{
        it('should return the name of the manager instance that was created', () => {
            const manager2 = new Manager("Ismeny", 222, "meny2@gmail.com", 512);
            const result = manager2.getName();
            expect(result).toEqual("Ismeny")
        }
        )
    })

    describe('getId', () =>{
        it('should return the id of the manager instance that was created', () => {
            const manager3 = new Manager("Ismeny", 222, "meny2@gmail.com", 512);
            const result = manager3.getId();
            expect(result).toEqual(222)
        }
        )
    })

    describe('getEmail', () =>{
        it('should return the email of the manager instance that was created', () => {
            const manager4 = new Manager("Ismeny", 222, "meny2@gmail.com", 512);
            const result = manager4.getEmail();
            expect(result).toEqual("meny2@gmail.com")
        }
        )
    })

    describe('getRole', () =>{
        it("should return 'manager' ", () => {
            const manager5 = new Manager("Ismeny", 222, "meny2@gmail.com", 512);
            const result = manager5.getRole();
            expect(result).toEqual("Manager")
        }
        )
    })

    describe("getOfficeNum", () => {
        it("should return the office number of the manager instance that was created", () => {
            const manager6 = new Manager("Ismeny", 222, "meny2@gmail.com", 512);
            const result = manager6.getOfficeNum();
            expect(result).toEqual(512);
        })
    })
})