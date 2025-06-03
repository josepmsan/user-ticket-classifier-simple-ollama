const Classifier = require('./classifier');

test('Classifier says hello', () => {
  expect(new Classifier().say_hello()).toBe("say hello");
});

test('Classifier processes ticket 1', () => {
  expect(new Classifier().classify()).toBe("dummy");
});