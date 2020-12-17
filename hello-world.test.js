const getHello = require('./hello-world')

test('getHello is hello', () => {
    console.log(getHello())
    expect(getHello()).toBe('hello')
})
