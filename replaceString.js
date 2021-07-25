function DNAStrand(dna){
    //your code here
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
 
  }

  console.log(DNAStrand('ACFTRG'))