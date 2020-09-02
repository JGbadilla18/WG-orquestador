const testWatson = require('./testWatson');

watsonText = 'necesito un prestamo'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});