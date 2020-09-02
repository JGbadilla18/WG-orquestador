const testWatson = require('./testWatson');

watsonText = 'Quiero hacer una transferencia movil.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
