const testWatson = require('./testWatson');

watsonText = 'Contacto del banco'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
