// For Objects
var user = {
    firstName: "V",
    lastName: "RK",
    age: 23,
    walk: function () { return; }
};
console.log("user: ", user);
//we can't re assign value for age property because it's a readonly property
//user.age = 120;
//for Classes
var Employee = /** @class */ (function () {
    function Employee() {
        this.firstName = 'PR';
        this.age = 50;
    }
    Employee.prototype.walk = function () {
        return;
    };
    return Employee;
}());
