class Person{
    //longer syntax for declaring variables and assigning values in constructor
    // firstName: String;
    // lastName: String;
    // age:number;

    // constructor(firstName: String, lastName: String, age:number){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.age = age;
    // }

    //shorter syntax for creating and assigning properties in constructer
    //Below as we are using private access modifier it will declare variables at class level
    // as we are passing values from constructor it will assign the values to those variables
    constructor(protected firstName: String, protected lastName: String, private age:number){}

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

class Employee extends Person {

    constructor(
        private Id:number,
        firstName:string,
        private middleName:string,
        lastName: string,
        age: number ){
            super(firstName,lastName,age);
        }

    getFullName(){
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }   
    
    get employeeId():number{
        console.log("get employeeId() called....")
        return this.Id;
    }

    set employeeId(employeeId:number){
        console.log("set employeeId() called....");
        this.Id = employeeId;
    }

}

let person: Person = new Person("Vivek","RK",23);
console.log(`Person Full Name:`,person.getFullName());

let developer: Employee = new Employee(10,"vivek","ram","Krishna",23);
console.log(`Developer Full Name:`,developer.getFullName());
console.log(`Employee Id: ${developer.employeeId}`);
developer.employeeId = 250;
console.log(`Employee Id: ${developer.employeeId}`);
