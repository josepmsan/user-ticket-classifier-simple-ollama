const Classifier = require('./classifier');

test('Classifier says hello', () => {
  expect(new Classifier().say_hello()).toBe("say hello");
});