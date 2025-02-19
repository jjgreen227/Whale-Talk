export const pokemons = ["Charmander", "Pikachu", "Garchomp", "Darkrai"];

export function loop() {
    for (let i = 0; i < pokemons.length; i++) {
        console.log(`I have caught ${pokemons[i]}!`);
    }
    for (const pokemon of pokemons) {
        console.log(`I have caught ${pokemon}!`);
    }
}