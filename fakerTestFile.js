const faker = require('faker');

function testFaker() {
  return {
    user_id: id,
    title: faker.commerce.productName(),
    description: faker.lorem.paragraphs(1),
    price: faker.commerce.price(),
    rating: faker.random.number(4) + 1,
  }
}

console.log(testFaker());