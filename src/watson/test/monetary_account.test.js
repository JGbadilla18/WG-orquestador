const testWatson = require('./testWatson');

watsonText = 'cuenta monetaria.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});

watsonText2 = 'cuenta monetaria super cuenta.'

it(watsonText2, () => {
  expect.assertions(1);
  return testWatson(watsonText2).then(data => expect(data).toMatchSnapshot());
});

watsonText3 = 'cuenta monetaria corriente.'

it(watsonText3, () => {
  expect.assertions(1);
  return testWatson(watsonText3).then(data => expect(data).toMatchSnapshot());
});

watsonText4 = 'cuenta monetaria oro.'

it(watsonText4, () => {
  expect.assertions(1);
  return testWatson(watsonText4).then(data => expect(data).toMatchSnapshot());
});

watsonText5 = 'cuenta monetaria oro dolares.'

it(watsonText5, () => {
  expect.assertions(1);
  return testWatson(watsonText5).then(data => expect(data).toMatchSnapshot());
});