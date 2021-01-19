var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
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
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(Id, firstName, middleName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.Id = Id;
        _this.middleName = middleName;
        return _this;
    }
    Employee.prototype.getFullName = function () {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    };
    Object.defineProperty(Employee.prototype, "employeeId", {
        get: function () {
            console.log("get employeeId() called....");
            return this.Id;
        },
        set: function (employeeId) {
            console.log("set employeeId() called....");
            this.Id = employeeId;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}(Person));
var person = new Person("Vivek", "RK", 23);
console.log("Person Full Name:", person.getFullName());
var developer = new Employee(10, "vivek", "ram", "Krishna", 23);
console.log("Developer Full Name:", developer.getFullName());
console.log("Employee Id: " + developer.employeeId);
developer.employeeId = 250;
console.log("Employee Id: " + developer.employeeId);
