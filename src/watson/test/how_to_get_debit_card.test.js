const testWatson = require('./testWatson');

watsonText = 'Como adquirir una tarjeta de debito.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
