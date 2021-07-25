var str = "1234"
const permutation = function (perm, str)
{
    if(str.length == 0)
    {
        console.log(perm)
    }
    else
    {
        for(let i=0; i<str.length; i++)
        {
            permutation(perm+str[i], str.substring(0,i)+str.substring(i+1))
        }
    }
}

permutation("", str)