// Creating Objects
var meals = {breakfast: "oatmeal"};

// Object Constructor
var meals = new Object({breakfast: 'oatmeal'});

const firstMeal = 'breakfast';
var meals = {firstmeal: 'oatmeal'};
var meals = { [firstmeal]: 'oatmeal' };

// Adding to an Object
var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

meals.snack = 'yogurt';
meals['second breakfast'] = 'bagel'

var sweetMeal = 'dessert';
meals[sweetMeal] = 'cake';

meals.dessert // 'cake'
meals[sweetMeal] // 'cake'

meals.breakfast = 'cereal';

// Destructively Change Original Object(s)
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  
  return obj
}

const recipe = { eggs: 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups') // returns { eggs: 3, flour: '3 cups' }

// but also:

recipe // { eggs: 3, flour: '3 cups' }

// Update non-destructively
Object.assign({}, { foo: 'bar' }) // { foo: 'bar' }
Object.assign({ eggs: 3 }, { flour: '1 cup' }) // { eggs: 3, flour: '1 cup' }
Object.assign({ eggs: 3 }, { chocolate: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' }) // { eggs: 3, chocolate: '1 cup', flour: '1/2 cup' }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
// We have to merge everything into a new object such as the empty {},
// otherwise, the object obj will be modified.
const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup') // returns `{ eggs: 3, chocolate: '1 cup' }

recipe // { eggs: 3 }

// Make the function even terser
function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

// Deleting a Key-Value Pair
var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };

// the `delete` operator returns `true` if it's successfully deleted, `false` otherwise
delete meals.dinner; // true
meals; // returns { breakfast: "oatmeal", lunch: "turkey sandwich" }

// Changing a Value
var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};
meals.breakfast = ["oatmeal", "banana"];

meals;
// {
//  breakfast: ["oatmeal", "banana"],
//  lunch: "turkey sandwich",
//  dinner: "steak and potatoes"
// }

// Changing a Value Non-Destructively
var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};

Object.assign({}, meals, { breakfast: ['oatmeal', 'banana'] })
// returns {
//  breakfast: ["oatmeal", "banana"],
//  lunch: "turkey sandwich",
//  dinner: "steak and potatoes"
// }

meals
// still {
//  breakfast: "oatmeal",
//  lunch: "turkey sandwich",
//  dinner: "steak and potatoes"
// };

var playlist = {
  artistName: 'song title'
}

function updatePlaylist([playlist], artistName, songTitle) {
  
}