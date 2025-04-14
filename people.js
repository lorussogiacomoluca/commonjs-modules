const fullNameFunction = require('./names')
const hobbiesFunction = require('./hobbies')

function createPerson(){
    const fullName = fullNameFunction('Mario','Rossi')
    const hobbies = hobbiesFunction('Swim', 'Run', 'Gym')
    return{
        fullName,
        hobbies
    }
}

console.log(createPerson())