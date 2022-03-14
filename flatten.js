

    function flatten(nestedArray, depth) 
    {
        return depth > 0 ? nestedArray.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, depth- 1) : val), []) : nestedArray.slice();

                     return nestedArray;
     };


     module.exports.flatten=flatten;