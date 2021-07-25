function lcs(str1, str2)
{
    //inistialise the matrix to zero
    var matrix = Array.from({length: (str1.length+1)}, ()=> Array.from({length: (str2.length+1)}, () => 0))
    for(let i=0; i<str1.length; i++)
    {
        for(let j=0; j<str2.length; j++)
        {
            if(str1[i] === str2[j])
            {
                matrix[i+1][j+1] = matrix[i][j] + 1;
            }
            else
            {
                matrix[i+1][j+1] = Math.max(matrix[i][j+1], matrix[i+1][j])
            }
        }
    }
    let traceStr = [];
    (function trace(r, c)
    {
        while(r > 0 && c > 0)
        {
            if(matrix[r][c] === matrix[r][c-1])
            {
                c--;
            }
            else if(matrix[r][c] === matrix[r-1][c])
                r--
            else if(matrix[r][c] === matrix[r-1][c-1] + 1)
            {
                traceStr.push(str1[r-1])
                r-=1
                c-=1
            }
        }
        console.log(traceStr.reverse().join(''))

    })(str1.length, str2.length)
}



//lcs("ABAZDC", "BACBAD")
lcs("AGGTAB", "GXTXAYB")