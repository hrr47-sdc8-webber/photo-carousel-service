const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  const id = Faker.random.number({ min: 1, max: 10000000 });
  // add variables to virtual user's context:
  userContext.vars.id = id;
  // continue with executing the scenario:
  return done();
}

module.exports = {
  generateRandomData,
};
