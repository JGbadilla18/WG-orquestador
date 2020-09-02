const testWatson = require('./testWatson');

watsonText = 'Oportunidad laboral.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
