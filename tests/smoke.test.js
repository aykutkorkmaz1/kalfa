const test = require("node:test");
const assert = require("node:assert/strict");

test("smoke: basic arithmetic works", () => {
	assert.equal(1 + 1, 2);
});
