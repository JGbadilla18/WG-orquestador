const testWatson = require('./testWatson');

watsonText = 'Cero Riesgo.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
