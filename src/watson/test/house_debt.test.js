const testWatson = require('./testWatson');

watsonText = 'Prestamos de vivienda'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
