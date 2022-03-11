const obj= require('../each.js');

const items = [1, 2, 3, 4, 5, 5];


function cb(element,index)
{

    console.log("element:",element,"index:",index);

}


obj.each(items,cb);