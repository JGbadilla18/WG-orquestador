const testWatson = require('./testWatson');

watsonText = 'cuales son los montos maximos'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});


watsonText2 = 'maximos montos mobiles'

it(watsonText2, () => {
  expect.assertions(1);
  return testWatson(watsonText2).then(data => expect(data).toMatchSnapshot());
});

watsonText3 = 'maximos montos al exterior'

it(watsonText3, () => {
  expect.assertions(1);
  return testWatson(watsonText3).then(data => expect(data).toMatchSnapshot());
});

watsonText4 = 'montos maximos a terceros'

it(watsonText4, () => {
  expect.assertions(1);
  return testWatson(watsonText4).then(data => expect(data).toMatchSnapshot());
});

watsonText5 = 'montos maximos a otros bancos'

it(watsonText5, () => {
  expect.assertions(1);
  return testWatson(watsonText5).then(data => expect(data).toMatchSnapshot());
});

watsonText6 = 'montos maximos propios'

it(watsonText6, () => {
  expect.assertions(1);
  return testWatson(watsonText6).then(data => expect(data).toMatchSnapshot());
});

