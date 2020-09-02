const testWatson = require('./testWatson');

watsonText = 'Donde me puedo quejar..'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
