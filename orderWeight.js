function orderWeight(strng) {
    // your code
   //first sort by string to preserve the order then sort by weight
   if(strng === "") return ""
   var array = strng.split(' ').sort(),
        mapped = array.map(function (a, i) {
            return { 
                index: i, 
                value: +a.split('').reduce(function (a, b) { return +a + +b; }) 
            };
        });
        
  return mapped.sort(function (a, b) 
  {
    //sort by weights
    if(a.value > b.value) return 1
    if(a.value < b.value) return -1
    
    //sort by keys
    if(a.index > b.index) return 1
    if(a.index < b.index) return -1 
  }).map(function (a) 
    {
        return array[a.index];
    }).join(' ');
}

//console.log(orderWeight('1 2 200 4 4 6 6 7 7 18 27 81 9 72 91 425 31064 7920 67407 96488 34608557 71899703'))
console.log(orderWeight('2000 342 4 6 6 7 7 18 27 11 11 81 9 11 72 91 425'))
