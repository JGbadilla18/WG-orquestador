const testWatson = require('./testWatson');

watsonText = 'Plazo fijo'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});

watsonText2 = 'Plazo fijo dolar'

it(watsonText2, () => {
  expect.assertions(1);
  return testWatson(watsonText2).then(data => expect(data).toMatchSnapshot());
});

watsonText3 = 'Plazo fijo quetzales'

it(watsonText3, () => {
  expect.assertions(1);
  return testWatson(watsonText3).then(data => expect(data).toMatchSnapshot());
});