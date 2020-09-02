const testWatson = require('./testWatson');

watsonText = 'Ayudame con mi gestion.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
