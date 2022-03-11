
var arr= new Array();

function map(elements,cb)
{

for(var i=0;i<elements.length;i++)
{
    var num= cb(elements[i]);
    arr.push(num);
}

return arr;

}

module.exports.map=map;