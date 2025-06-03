import Classifier from './classifier';

test('Classifier says hello', () => {
  expect(new Classifier().say_hello()).toBe("say hello");
});

test('Classifier processes ticket 1', async () => {
  expect(await new Classifier().classify()).toBe("dummy");
});