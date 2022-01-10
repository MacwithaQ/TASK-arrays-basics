const emptyArray=[];

const hobbies=[
    "musicProduction",
    "fishing",
    "coding",
    "videoEditing",
    "cooking",
    "reading"
];

const numbers=[
    7,
    9,
    3,
    1,
    6
];

console.log(numbers[1]);

console.log(hobbies[hobbies.length-1]);

hobbies.push(["skiing"]);

console.log(hobbies[hobbies.length-1]);

console.log(hobbies.length);

hobbies.splice(hobbies.length-2);

console.log(hobbies.length);

console.log(hobbies);

hobbies.length=0;
