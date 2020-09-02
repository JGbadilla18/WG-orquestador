const testWatson = require('./testWatson');

watsonText = 'Que es bi club'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});