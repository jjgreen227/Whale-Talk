import { loop } from "./for-loop.js";

let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    }
    if (input[i] === 'u') {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(vowels[j]);
        }
    }
}

loop();

// console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
// console.log(resultString);

const testVowels = ['a', 'e', 'i', 'o', 'u'];
const newArray = [];

const convertToWhaleTalk = testInput => {
    testInput.array.forEach(test => {
        console.log(test);
    })
}

let subject = ['Test'];

// convertToWhaleTalk(subject);