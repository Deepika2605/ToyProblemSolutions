// function orderWeight(str)
// {
//     str = str.split(' ').sort().map(Number)
//     str.sort(sortByWeights)
//     console.log(str)
// }

// function getWeights(num, weight = 0)
// {
//     if(num){
//         return getWeights(Math.floor(num / 10), weight + (num % 10));
//      };
//      return weight;
// }

// function sortByWeights(a, b)
// {
//     let diff = getWeights(a) - getWeights(b)
//     if(diff === 0)
//         return a - b
//     return diff
// }

// function orderWeight(str) {
//     console.log(str.split(' ').sort(function(a, b) {
//         a.split('').reduce(function(p, c) {Number(p) + Number(c)}) -
//         b.split('').reduce(function(p, c) {Number(p) + Number(c) })
//     }).join(' '))
//   }

function orderWeight (string)
{
var array = string.split(' ').sort(),
        mapped = array.map(function (a, i) {
            return { 
                index: i, 
                value: +a.split('').reduce(function (a, b) { return +a + +b; }) 
            };
        });
        
return mapped.sort(function (a, b) 
{
    return a.value - b.value   
}).map(function (a) 
    {
        return array[a.index];
    }).join(' ');
}

console.log(orderWeight('1 2 200 4 4 6 6 7 7 27 18 81 9 72 91 425 31064 7920 67407 96488 34608557 71899703'))

//console.log(orderWeight("2000 11 11 10003 22 123 1234000 44444444 9999"))