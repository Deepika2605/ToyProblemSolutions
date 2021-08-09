function triangle(row) {
    // Return the answer
      row = row.split('')
      for(let j = 0; row.length != 1; j++)
      {
      for(let i = 0; i < row.length; i++)
        {
          if((row[i] === 'G' && row[i+1] === 'B') || (row[i] === 'B' && row[i+1] === 'G'))
            {
              row[i] = 'R'
            }
          else if((row[i] === 'G' && row[i+1] === 'R') || (row[i] === 'R' && row[i+1] === 'G'))
            {
              row[i] = 'B'
            }
          else if((row[i] === 'R' && row[i+1] === 'B') || (row[i] === 'B' && row[i+1] === 'R'))
            {
              row[i] = 'G'
            }
          else if(row[i] === row[i+1])
            {
              row[i] = row[i]
            }
        }
        row.pop()
        }
      console.log(row.join(''))
    }

    triangle('RBRGBRBGGRRRBGBBBGG')