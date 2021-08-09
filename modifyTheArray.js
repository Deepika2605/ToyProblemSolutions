function modifyArray(arr)
{
    var gradient = arr[1] - arr[0]
    var prevDirection = getDirection(gradient)
    var currDirection = prevDirection
    var cost = 0

    for(let i=1; i<arr.length - 1; i++)
    {
        gradient = arr[i+1] - arr[i]
        currDirection = getDirection(gradient)
        if(currDirection != prevDirection && prevDirection != 0 && currDirection != 0)
        {
            if(currDirection === 1 && prevDirection === -1)
            {
                cost = Math.abs(arr[i] - arr[i+1])
            }
            if(currDirection === -1 && prevDirection === 1)
            {
                cost = Math.abs(arr[i] - arr[i-1])
            }
            prevDirection = currDirection
            
            break
        }
        if(prevDirection != currDirection)
        {}
    }
    return cost
}

function getDirection(gradient)
{
    return (gradient === 0) ? 0 : (gradient > 0) ? 1 : -1
}

//console.log(modifyArray([0,1,2,5,6,5,7]))

console.log(modifyArray([9,5,3,3,4,3,2]))