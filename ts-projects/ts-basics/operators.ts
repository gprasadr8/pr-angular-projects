//spread(...) examples:
console.log("spread(...) examples:")
//Array
let fruits: Array<string> = ['Apple','Mango','Grapes'];
let food: string[] = ['Pizza','Burger','chocos'];
let edibles: string[] = [...fruits,...food];

console.log("edibles:",edibles);

//Object
let user = {
    "firstName":"Vivek",
    "lastName":"RK"
}

let userDetails = {
    ...user,
    "username":"vrk",
    "email":"vrk@gmail.com"
}

console.log("User Details: ",userDetails);

//Functions
//here ? is for Optional params
function add(x?:number,y?:number,z?:number){
    return x+y+z;
}

let numbers: number[] = [10,20,30]
console.log("sum",add(numbers[0],numbers[1],numbers[2]));
console.log("sum",add(...numbers));

//Backticks(``)

console.log("Without Backticks:");
console.log("First Name:"+user.firstName+" and Second Name: "+user.lastName);

console.log("With Backticks:");
console.log(`First Name:${user.firstName} and Second Name: ${user.lastName}`);


//Backticks will stringfy Arrays & Objects

console.log(`with backticks`);
console.log(`fruits: ${fruits}`);
console.log(`user: ${user}`)

console.log(`without backticks`);
console.log(`fruits:`, fruits);
console.log(`user:`, user);

// Destructure {}

let {firstName, lastName} = userDetails;
console.log(`First Name:${firstName} and Last Name: ${lastName}`);
//destructre with alias
let {firstName: fname, lastName:lname} = user;
console.log(`fname:${firstName} and lname: ${lastName}`);
// object destructuring will be done based on the property name 
let {username, email} = userDetails;
console.log(`username: ${username} and email: ${email}`)
// below gives an error because there is no property with name a and b
//let {a, b} = userDetails;

// For array elements will be destructured based on index
let [x, y] = fruits;
console.log(`x: ${x}`);
console.log(`y: ${y}`);


// rest params (...args)
//Arrays
console.log(`Before rest params edibles: ${edibles}`);
// first value will be assigned to p which is Apple
// rest of the array values are assigned to variable to q
let [p, ...q] = edibles;
console.log(`p:${p}`);
console.log(`q:${q}`);

// Objects 

console.log(`Before rest params User Details:`, userDetails);
let {email:mailId, ...restUser} = userDetails;
// email:mailId email is property name and mailId is alias name for property
// destructures the object by setting email property value to mailId alias variable and 
// rest of the object properties will be created an object and assign it to restUser variable
console.log(`mail Id: ${mailId}`);
console.log('restUserDetails',restUser);

// Functions:
console.log(`Before function rest params Edible:`, edibles);
function getEdibles(firstEdible?, ...restEdibles){
    console.log(`getEdibles function with rest params:`);
    console.log(`firstEdible: ${firstEdible}`);
    console.log(`restEdibles: ${restEdibles}`);
}

// spreading the edibles to functional args
// first index value will be assigned to firstEdible
// rest of the array elements will be assigned to restEdibles

getEdibles(...edibles);