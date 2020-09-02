const testWatson = require('./testWatson');

watsonText = 'Acerca de BI.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
