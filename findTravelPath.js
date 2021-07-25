function findRoutes(routes)
{
    // var routeMap = new Map()
    // for(let i=0; i<routes.length; i++)
    // {
    //     routeMap.set(routes[i][0], routes[i][1])
    // }
    var routeMap = new Map(routes)
    //find the start node
    var node
    var completeRoute = ""
    for(let k of routeMap.keys())
    {
        var values = [...routeMap.values()]
        if(!(values.indexOf(k) > -1))
        {
            node = k
        }
    }
    while(routeMap.has(node))
    {
        completeRoute+= node + ", "        
        node = routeMap.get(node)
        
    }
    completeRoute += node
    console.log(completeRoute)
}


findRoutes([["USA","BRA"],["JPN","PHL"],["BRA","UAE"],["UAE","JPN"]])