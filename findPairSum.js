var twoSum = function(nums, target) {
    
    var mapEle = new Set();
    var res = [];
    
    for(let i in nums)
        {
            if(mapEle.has(nums[i]))
            {
               res.push(i)
            }
            else
                {
                    mapEle.add(Math.abs(nums[i] - target))
                }
        }
    return res
};