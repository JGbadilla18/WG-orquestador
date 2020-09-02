const testWatson = require('./testWatson');

watsonText = 'Plan mi apoyo'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
