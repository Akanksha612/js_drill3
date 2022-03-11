function reduce(elements, cb, startingValue)
 {
     
  var startingValue=elements[0];


  for(var i=1;i<elements.length;i++)
  {
      var startingValue= cb(startingValue,elements[i])
  }
 
return startingValue;

}


module.exports.reduce=reduce;