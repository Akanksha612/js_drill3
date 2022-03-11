function find(elements, cb) 
{
    
     var count=0;
     var arr= new Array();

    for(var i=0;i<elements.length;i++)
    {
        var result= cb(elements[i]);

        if(result===true)
        {
           return elements[i];
            count++;

        }

    }


    if(count==0)
    return 'undefined';

    

}


module.exports.find=find;