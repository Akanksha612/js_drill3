const obj= require ('../map.js');

const items = [1, 2, 3, 4, 5, 5]; 

function cb(element)
{
    return (2*element);
}


console.log(obj.map(items,cb));