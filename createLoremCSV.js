const faker = require('faker');
const ObjectsToCSV = require('objects-to-csv');

const createFakeUser = (id) => ({
  user_id: id,
  title: faker.commerce.productName(),
  description: faker.lorem.paragraphs(1),
  price: faker.commerce.price(),
  rating: faker.random.number(4) + 1,
});


const makeCSV = async function () {
  // Deletes ALL existing entries
  const fakeUsers = [];
  const desiredFakeUsers = 100;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser(i));
  }
  await new ObjectsToCSV(fakeUsers).toDisk('./csvFolder/lorem.csv', { append: true });
};
makeCSV();

