const testWatson = require('./testWatson');

watsonText = 'Cómo solicito Bi Móvil'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
