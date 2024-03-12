function reverseString(word){
    return word.split('').reverse().join('').replace(",", "")
}
module.exports = reverseString