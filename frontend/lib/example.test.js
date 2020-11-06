function add (a, b) {
  return a + b;
}

test('it works', () => {
  expect(add(1,2)).toBe(3);
})