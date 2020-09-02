const testWatson = require('./testWatson');

watsonText = 'Extrafinanciamiento.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
