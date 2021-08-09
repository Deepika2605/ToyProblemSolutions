function preprocessDate(dates) {
    // Write your code here
    var newdate = []
    for(let i in dates)
    {
        var d = dates[i].split(' ')
        newdate.push(getYear(d[2])+"-"+getMonth(d[1])+"-"+getDay(d[0]))
    }
    return newdate
}

function getDay(d)
{
    var day = d.replace(/(\d+)(st|nd|rd|th)/, "$1")
    if(Number(day) < 10)
        return "0"+day
    else
        return day 
}
function getMonth(m)
{
    var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var index = monthArray.indexOf(m)+1
    if(index < 10)
        return "0"+index.toString()
    else
        return index.toString()
    
}
function getYear(y)
{
    return y.toString()
}

preprocessDate(["20th Oct 2052", "6th Jun 1933", "26th May 1960", "20th Sep 1958", "16th Mar 2068", 
"25th May 1912", "16th Dec 2018", "26th Dec 2061", "4th Nov 2030", "28th Jul 1963"])