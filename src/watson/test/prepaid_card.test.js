const testWatson = require('./testWatson');

watsonText1 = 'tarjeta prepago club bi'

it(watsonText1, () => {
  expect.assertions(1);
  return testWatson(watsonText1).then(data => expect(data).toMatchSnapshot());
});


watsonText2 = 'tarjeta prepago billetera'

it(watsonText2, () => {
  expect.assertions(1);
  return testWatson(watsonText2).then(data => expect(data).toMatchSnapshot());
});


watsonText3 = 'tarjeta prepago tcard'

it(watsonText3, () => {
  expect.assertions(1);
  return testWatson(watsonText3).then(data => expect(data).toMatchSnapshot());
});


watsonText4 = 'tarjeta prepago lago'

it(watsonText4, () => {
  expect.assertions(1);
  return testWatson(watsonText4).then(data => expect(data).toMatchSnapshot());
});

watsonText5 = 'tarjeta prepago'

it(watsonText5, () => {
  expect.assertions(1);
  return testWatson(watsonText5).then(data => expect(data).toMatchSnapshot());
});

