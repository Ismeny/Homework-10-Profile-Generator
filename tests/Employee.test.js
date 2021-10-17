const Employee = require('../lib/Employee');

describe ('Employee', () => {
    describe('Init', () => {
        it("should create an instance of an employee when we call it with the new keyword", () => {
            const employee = new Employee("Ismeny", 222, "meny2@gmail.com");
            expect(employee.name).toEqual("Ismeny")
            expect(employee.id).toEqual(222)
            expect(employee.email).toEqual("meny2@gmail.com")
        })
    })

    describe('getName', () =>{
        it('should return the name of the employee instance that was created', () => {
            const employee2 = new Employee("Ismeny", 222, "meny2@gmail.com");
            const result = employee2.getName();
            expect(result).toEqual("Ismeny")
        }
        )
    })

    describe('getId', () =>{
        it('should return the id of the employee instance that was created', () => {
            const employee3 = new Employee("Ismeny", 222, "meny2@gmail.com");
            const result = employee3.getId();
            expect(result).toEqual(222)
        }
        )
    })

    describe('getEmail', () =>{
        it('should return the email of the employee instance that was created', () => {
            const employee4 = new Employee("Ismeny", 222, "meny2@gmail.com");
            const result = employee4.getEmail();
            expect(result).toEqual("meny2@gmail.com")
        }
        )
    })

    describe('getRole', () =>{
        it("should return 'Employee' ", () => {
            const employee5 = new Employee("Ismeny", 222, "meny2@gmail.com");
            const result = employee5.getRole();
            expect(result).toEqual("Employee")
        }
        )
    })
})