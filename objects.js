// Creating Objects
var meals = {}
var meals = new Object(); // Object Contructor

var meals = { breakfast: "oatmeal" }; // breakfast is the key, oatmeal is the value
var meals = new Object({ breakfast: 'oatmeal' });

// all keys in JavaScript objects are strings (!!!)
// {1: 'is the loneliest number'}; // 1 gets turned into string '1'

// keys must be unique (!!!)
var meals = {
  breakfast: 'eggs',
  breakfast: 'bacon'
}

meals // { breakfast: 'bacon'}

// values don't have to be unique
var meals = {
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avocado'
}

const firstMeal = 'breakfast';
var meals = { firstMeal: 'oatmeal' };
meals // { firstMeal: "breakfast" }