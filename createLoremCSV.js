const faker = require('faker');
const ObjectsToCSV = require('objects-to-csv');

const createFakeDesc = (id) => ({
  user_id: id,
  title: faker.commerce.productName(),
  description: faker.lorem.paragraphs(1),
  price: faker.commerce.price(),
  rating: faker.random.number(4) + 1,
});


const makeCSV = async function () {
  // Deletes ALL existing entries
  const fakeUsers = [];
  const desiredFakeUsers = 10000000;
  for (let i = 9000000; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeDesc(i));
  }
  await new ObjectsToCSV(fakeUsers).toDisk('./csvFolder/lorem.csv', { append: true });
};
makeCSV();

// CREATE INDEX titleIndex ON description(title);
// SELECT pg_size_pretty( pg_database_size('description') );
