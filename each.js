
function each(elements, cb)

{
   for(var i=0;i<elements.length;i++)
   {
       cb(elements[i],i);
   }

}

module.exports.each=each;

