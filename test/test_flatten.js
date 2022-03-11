


const obj= require('../flatten.js')

const nestedArray = [1, [2], [[3]], [[[4]]]]; 

console.log(obj.flatten(nestedArray,3));