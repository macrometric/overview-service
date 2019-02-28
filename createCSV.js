const faker = require('faker');
const ObjectsToCSV = require('objects-to-csv');

const createFakeUser = (id) => ({
  user_id: id,
  email: faker.internet.email(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName()
});


const makeCSV = async function () {
  // Deletes ALL existing entries
  const fakeUsers = [];
  const desiredFakeUsers = 10000000;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser(i));
  }
  await new ObjectsToCSV(fakeUsers).toDisk('./csvFolder/testUserCSV.csv');
};
makeCSV();

