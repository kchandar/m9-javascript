// Main JavaScript File

// Array to work with
var arr1 = [1,2,3,4,5];
console.log(arr1);

// Write a function to subtract one from a value
var subtractOne = function(x) {
	return x - 1;
}


// Pass each value to the subtractOne function by using the map functionality
var minOne = arr1.map(subtractOne);
console.log(minOne);


// Create a array equal to arr1 times two by using the inline "map" funcitonality
var mulTwo = arr1.map(function(num) {
	return num * 2;
})
console.log(mulTwo);

// Array of strings
var names = ['Tim', 'Nick', 'Grant'];

// Write an introduction function that takes an argument and returns "hello, I'm " + argument
var introFunc = function(arg) {
	return "hello, I'm " + arg;
}



// Array of objects
var people = [
	{name:'Tim', age:22},
	{name:'Jan', age:12},
	{name:'Isabel', age:43}
];

// Create an array of introductions for each name
var intros = [];
for (var i = 0; i < people.length; i++) {
	intros.push("My name is " + people[i]['name'] +" and I'm " + people[i]['age'] +" years old");
}
console.log(intros);

// Use the `.forEach` method to create a new property `intro` for each object in your people array
// The property should say "My name is NAME and I'm AGE years old"
people.forEach(function(object) {
	object['intro'] = "My name is " + object.name +" and I'm " + object.age +" years old";
});

console.log(people);

