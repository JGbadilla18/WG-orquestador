const cleanTexcInput = require('../utils/cleanTextInput')


it('Clean text input', () => {
    const result = cleanTexcInput('Miren en donde puedo encontrar una agencia cerca de parque las Americas')
    expect(result).toStrictEqual('en una Banco Industrial  de parque las Americas')
  });