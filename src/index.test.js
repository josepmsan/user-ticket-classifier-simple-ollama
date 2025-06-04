import OllamaClassifierController from './ollama_controller';
// const {Classifier} = require("./classifier");


test('Classifier says hello', () => {
  expect(new OllamaClassifierController().say_hello()).toBe("say hello");
});

test('Classifier processes ticket 1', async () => {
  expect(await new OllamaClassifierController().classify_ticket("When would it be my next payment?")).toBe("dummy");
}, 100000);

test('Classifier processes ticket 2', async () => {
  expect(await new OllamaClassifierController().classify_ticket("I wasn't happy with the attention received by Norbert, I demand compensation!")).toBe("dummy");
}, 100000);

test('Classifier processes ticket 3', async () => {
  expect(await new OllamaClassifierController().classify_ticket("When will there be again dotted socks?")).toBe("dummy");
}, 100000);

test('Classifier processes ticket 4', async () => {
  expect(await new OllamaClassifierController().classify_ticket("I can't see where to generate all my prvious invoices, my accountant is urgently asking me for them!")).toBe("dummy");
}, 100000);