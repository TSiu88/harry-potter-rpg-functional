// Attempt to convert to functional programming paradigm
// Eventually replace code from other files with these

// FUNCTION FACTORIES
const storeState = (initialState) => {
  let currentState = initialState;
  return (statechangeFunction) => {
    const newState = statechangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const changeNumberState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

const changeStringState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: value
    })
  }
}

const gryffindorTraits = ["brave", "determined", "stubborn", "self-righteous", "daring", "arrogant", "chivalrous"];
const hufflepuffTraits = ["loyal", "fair", "kind", "modest", "dedicated", "boring", "meek"];
const ravenclawTraits = ["intelligent", "wise", "creative", "quirky", "eccentric", "snobby", "independent"];
const slytherinTraits = ["cunning", "ambitious", "resourceful", "elitist", "ruthless", "exclusive", "respected"];

const changePersonalityState = (house) => {
  let traitsArray = eval(`${house.toLowerCase()}Traits`);
  let num = (Math.floor(Math.random() * traitsArray.length));
  let newTrait = traitsArray[num];
  let newArray = [];
  return (state) => { 
    let array = state["personality"];
    if (!state["personality"].includes(newTrait)) {
      array.forEach(el => newArray = newArray.push(el));
      newArray.push(newTrait);
    }
    return ({
      ...state,
      house,
      ["personality"]: newArray
    }) 
  }
}


// CONNECT TO UI
let userName1 = "Harry";
let userName2 = "Cho Chang";

let houseName1 = "Gryffindor";
let houseName2 = "Ravenclaw";

// CREATING PLAYERS
const initialValues = { level: 1, health: 2, spells: ["miss", "hit"], personality: [], inventory: [] };
const player1 = storeState(initialValues);
const player2 = storeState(initialValues);

// Assign Names
const assignName1 = changeStringState("name");
const newName1 = assignName1(userName1);
const assignedNamePlayer1 = player1(newName1);
// { level: 1, health: 2, spells: ["miss", "hit"], inventory: [], name: "Harry" }

const assignName2 = changeStringState("name");
const newName2 = assignName2(userName2);
const assignedNamePlayer2 = player2(newName2);

// Assign House & Personality Traits
const assignPersonality1 = changePersonalityState(houseName1);
const newTraitPlayer1 = player1(assignPersonality1);

const assignPersonality2 = changePersonalityState(houseName2);
const newTraitPlayer2 = player2(assignPersonality2);

console.log(newTraitPlayer1);
console.log(newTraitPlayer2);
