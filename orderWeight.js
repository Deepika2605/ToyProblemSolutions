function orderWeight (string)
{
    const weights = new Map()
    var array = string.split(' ').map(
        function(a)
        {
            weights.set(a, a.split('').reduce(function (a, b) { return +a + +b; }))
            
        }
    )
    var sorted = new Map([...weights.entries()].sort(function(a, b)
    {
        if(a[1] > b[1]) return 1;
        if(a[1] < b[1]) return -1;
        
        if(a[0] > b[0]) return 1;
        if(a[0] < b[0]) return -1;
    }))
    
    array = [...sorted.keys()]
    return array.join(' ')
}


console.log(orderWeight("11 11 56 65 11 74 100 99 68 86 180 90"))
