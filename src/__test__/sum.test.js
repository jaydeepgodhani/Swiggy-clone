import sum from "../app/sum";

test("sum function test", () => {
  const result = sum(3,4);
  expect(result).toBe(7);
})