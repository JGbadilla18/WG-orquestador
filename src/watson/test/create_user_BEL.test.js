const testWatson = require('./testWatson');

watsonText = 'Crear usuario de banco en linea.'

it(watsonText, () => {
  expect.assertions(1);
  return testWatson(watsonText).then(data => expect(data).toMatchSnapshot());
});
