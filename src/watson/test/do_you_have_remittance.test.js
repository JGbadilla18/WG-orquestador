const testWatson = require('./testWatson');

watsonText = 'Necesito enviar un remes'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
