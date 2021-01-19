var faker = require('faker');

var users = [];

for(i=1;i<=1000;i++){
    users.push({
        id: i,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email:faker.internet.email(),
        salary:"$"+faker.commerce.price()
    });
}

console.log(JSON.stringify(users));