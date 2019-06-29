let letters = [
  { name: 'a', type: 'vowel' },
  { name: 'b', type: 'consonant' },
  { name: 'c', type: 'consonant' },
  { name: 'd', type: 'consonant' },
  { name: 'e', type: 'vowel' }
]

let vowels = letters.filter(function (letter) {
  return letter.type === 'vowel';
})

console.log(vowels);

let allLetters = letters.filter(function (letter) {
  return letter.type === 'vowel' || letter.type === 'consonant';
})

console.log(allLetters);

let noCons = letters.filter(function (letter) {
  return letter.type !== 'consonant';
})

console.log(noCons);