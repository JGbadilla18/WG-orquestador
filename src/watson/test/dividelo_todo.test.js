const testWatson = require('./testWatson');

watsonText = 'dividelo todo'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});