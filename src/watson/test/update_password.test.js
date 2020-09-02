const testWatson = require('./testWatson');

watsonText = 'Actualizar mi contraseña.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
