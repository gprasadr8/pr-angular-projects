var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
//spread(...) examples:
console.log("spread(...) examples:");
//Array
var fruits = ['Apple', 'Mango', 'Grapes'];
var food = ['Pizza', 'Burger', 'chocos'];
var edibles = fruits.concat(food);
console.log("edibles:", edibles);
//Object
var user = {
    "firstName": "Vivek",
    "lastName": "RK"
};
var userDetails = __assign({}, user, { "username": "vrk", "email": "vrk@gmail.com" });
console.log("User Details: ", userDetails);
//Functions
//here ? is for Optional params
function add(x, y, z) {
    return x + y + z;
}
var numbers = [10, 20, 30];
console.log("sum", add(numbers[0], numbers[1], numbers[2]));
console.log("sum", add.apply(void 0, numbers));
//Backticks(``)
console.log("Without Backticks:");
console.log("First Name:" + user.firstName + " and Second Name: " + user.lastName);
console.log("With Backticks:");
console.log("First Name:" + user.firstName + " and Second Name: " + user.lastName);
//Backticks will stringfy Arrays & Objects
console.log("with backticks");
console.log("fruits: " + fruits);
console.log("user: " + user);
console.log("without backticks");
console.log("fruits:", fruits);
console.log("user:", user);
// Destructure {}
var firstName = userDetails.firstName, lastName = userDetails.lastName;
console.log("First Name:" + firstName + " and Last Name: " + lastName);
//destructre with alias
var fname = user.firstName, lname = user.lastName;
console.log("fname:" + firstName + " and lname: " + lastName);
// object destructuring will be done based on the property name 
var username = userDetails.username, email = userDetails.email;
console.log("username: " + username + " and email: " + email);
// below gives an error because there is no property with name a and b
//let {a, b} = userDetails;
// For array elements will be destructured based on index
var x = fruits[0], y = fruits[1];
console.log("x: " + x);
console.log("y: " + y);
// rest params (...args)
//Arrays
console.log("Before rest params edibles: " + edibles);
// first value will be assigned to p which is Apple
// rest of the array values are assigned to variable to q
var p = edibles[0], q = edibles.slice(1);
console.log("p:" + p);
console.log("q:" + q);
// Objects 
console.log("Before rest params User Details:", userDetails);
var mailId = userDetails.email, restUser = __rest(userDetails, ["email"]);
// email:mailId email is property name and mailId is alias name for property
// destructures the object by setting email property value to mailId alias variable and 
// rest of the object properties will be created an object and assign it to restUser variable
console.log("mail Id: " + mailId);
console.log('restUserDetails', restUser);
// Functions:
console.log("Before function rest params Edible:", edibles);
function getEdibles(firstEdible) {
    var restEdibles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restEdibles[_i - 1] = arguments[_i];
    }
    console.log("getEdibles function with rest params:");
    console.log("firstEdible: " + firstEdible);
    console.log("restEdibles: " + restEdibles);
}
// spreading the edibles to functional args
// first index value will be assigned to firstEdible
// rest of the array elements will be assigned to restEdibles
getEdibles.apply(void 0, edibles);
