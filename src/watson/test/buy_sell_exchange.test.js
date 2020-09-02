const testWatson = require('./testWatson');

watsonText = 'Aceptan dolares'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
