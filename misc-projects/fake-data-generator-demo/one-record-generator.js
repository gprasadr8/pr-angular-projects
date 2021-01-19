var faker = require('faker');

var randomName = faker.name.findName(); 
var randomEmail = faker.internet.email(); 
var randomJobTitle = faker.name.jobTitle();
console.log("Name: "+randomName +" Email: "+ randomEmail +" Job: "+ randomJobTitle);
