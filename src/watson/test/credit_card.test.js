const testWatson = require('./testWatson');

watsonText = 'requisitos tarjeta de credito visa.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});

watsonText2 = 'requisitos tarjeta de credito mastercard.'

it(watsonText2, () => {
  expect.assertions(1);
  return testWatson(watsonText2).then(data => expect(data).toMatchSnapshot());
});

watsonText3 = 'requisitos tarjeta de credito.'

it(watsonText3, () => {
  expect.assertions(1);
  return testWatson(watsonText3).then(data => expect(data).toMatchSnapshot());
});