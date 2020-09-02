const testWatson = require('./testWatson');

watsonText = 'Pagos servicio'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});

watsonText2 = 'Pagos servicio app'

it(watsonText2, () => {
  expect.assertions(1);
  return testWatson(watsonText2).then(data => expect(data).toMatchSnapshot());
});

watsonText3 = 'Pagos servicio web'

it(watsonText3, () => {
  expect.assertions(1);
  return testWatson(watsonText3).then(data => expect(data).toMatchSnapshot());
});