function filter(elements, cb) 
{
    
     var count=0;
     var arr= new Array();

    for(var i=0;i<elements.length;i++)
    {
        var result= cb(elements[i]);

        if(result===true)
        {
            arr.push(elements[i]);
            count++;

        }

    }


    if(count==0)
    return 'undefined';

    else
    return arr;


}


module.exports.filter=filter;