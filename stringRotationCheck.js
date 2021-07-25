const shiftedDiff = (first, second) => {
    if(first.length === second.length)
      {
        var str = first + first
        for(let i=0; i<str.length; i++)
          {
            let substr = str.substring(i, second.length+i)
            
            if(substr === second)
              {
                if(second.length - i === second.length)
                    return 0 
                else
                    return second.length - i
              }
          }
        return -1
      }
    else
      {
        return -1
      }
  };

//console.log(shiftedDiff('eecoff', 'coffee'))
console.log(shiftedDiff('asdfgh', 'eecoff'))