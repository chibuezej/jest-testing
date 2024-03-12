const isPalindrome = require('./isPalindrome')
test('Tacocat returns true', () => {
    expect(isPalindrome("Tacocat")).toBe(true)
})
test('Henry returns false', () => {
    expect(isPalindrome("Henry")).toBe(false)
})