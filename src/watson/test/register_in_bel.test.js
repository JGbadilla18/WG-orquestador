const testWatson = require('./testWatson');

watsonText = 'como ingreso banco en linea.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
