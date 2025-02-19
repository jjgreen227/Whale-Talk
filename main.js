import { loop } from "./for-loop.js";
import { pokemons } from "./for-loop.js";

const convertToWhale = phrase => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let newArray = [];
    for (let i = 0; i < phrase.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            // If the phrase has any vowels...Add it to a new array.
            // Compare the phrase index to the vowels
            if (phrase[i] === vowels[j]) {
                // Put and double the vowels into new array.
                newArray.push(phrase[i]);
                newArray.push(vowels[j]);
            }
        }
    }
    console.log(newArray.join('').toUpperCase());
} 
let string = 'Normal Classes and Turtles be Turtling';

convertToWhale(string);
convertToWhale(pokemons.toString());
// loop();