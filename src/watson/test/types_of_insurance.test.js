const testWatson = require('./testWatson');

watsonText = 'Tipos de seguros.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
