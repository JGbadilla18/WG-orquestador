const testWatson = require('./testWatson');

watsonText = 'Como adiciono cuenta en bel.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
