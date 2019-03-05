const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/tenMillion', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to the db @ /localhost/tenMillion!');
});

let descSchema = new mongoose.Schema({
  user_id: { type: Number, unique: true, required: true },
  title: String,
  description: String,
  price: Number,
  rating: Number,
});

let Description = mongoose.model('Description', descSchema);

const createFakeDesc = (id) => new Description({
  user_id: id,
  title: faker.commerce.productName(),
  description: faker.lorem.paragraphs(1),
  price: faker.commerce.price(),
  rating: faker.random.number(4) + 1,
});

const seedDescDatabase = async () => {
  let absouluteLimit = 10000000
  // let currStart = 0
  // let currLimit = 100000
  // while (currLimit < absouluteLimit) {
  // let descArr = [];
  for (let i = 0; i < absouluteLimit; i++) {
    // descArr.push(createFakeDesc(i));
    await createFakeDesc(i).save().then(data => {

    }).catch(err => {
      console.log(err);
    });
  }
  // Description.collection.insert(descArr, (err, res) => {
  //   if (err) {
  //     //handle err
  //   } else {
  //     console.log(`${currLimit} Descriptions were successfully stored.`);
  //   }
  // });
  //   currStart += 100000;
  //   currLimit += 100000;
  // }
}
seedDescDatabase();


/*
var Potato = mongoose.model('Potato', PotatoSchema);

var potatoBag = [/* a humongous amount of potato objects *//*];

Potato.collection.insert(potatoBag, onInsert);

function onInsert(err, docs) {
    if (err) {
        // TODO: handle error
    } else {
        console.info('%d potatoes were successfully stored.', docs.length);
    }
}
*/