//General Function

function greetUser(name:string){
    console.log(`General Hello  ${name}`);
};

// Anonymous function

let greetUserByName = function(name: string){
    console.log(`Anonymous Hello  ${name}`);
};

//Arrow function

let greetUserByNameArrow = (name: string)=> console.log(`Arrow Hello ${name}`);

greetUser("Horstmann");
greetUserByName("Horstmann");
greetUserByNameArrow("Horstmann");


// Usages with Arrays

const edibles = [
    {
        edible:"Pizza",
        isVegan:false
    },
    {
        edible:"Burger",
        isVegan:true
    },
    {
        edible:"Chocos",
        isVegan:true
    }
];

console.log("Normal:",edibles.filter(function(item){
    return item.isVegan;
}));
// Arrow function shortens the code
console.log("Arrow:",edibles.filter(item => item.isVegan));

// rescoping of this keyword

// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     lazyGreet: function(){
//         setTimeout(function(){
//             // Here this keyword is pointing to Window object not the user object
//             //That's why we get undefined
//             console.log("Lazy Hello ",this.firstName);
//         },1000);
//     }
// };





// Solving by creating a new variable
// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     lazyGreet: function(){
//         const that = this;
//         setTimeout(function(){
//             // Here this keyword is pointing to Window object not the user object
//             //That's why we get undefined
//             console.log("Lazy Hello ",that.firstName);
//         },1000);
//     }
// };




//sovling By Array function
let user = {
    firstName: "John",
    lastName: "Doe",
    lazyGreet: function(){
        //instead of creating a ananymous function for callback using arrow function
        setTimeout(()=>{console.log("Lazy Hello ",this.firstName);},1000);
    }
};
user.lazyGreet();