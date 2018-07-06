// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// DNAStrand ("ATTGC") # return "TAACG"

// DNAStrand ("GTAT") # return "CATA"

//My Solution:

function DNAStrand(dna){
    const arr = [];
    const dnaArr = dna.split('')
    dnaArr.map((e) => {
        if (e === 'A'){
            arr.push('T')
        } 
        else if (
            e === 'C'
        ){
            arr.push('G')
        } else if ( e === 'T'){
            arr.push('A')
        } else if (e === 'G'){
            arr.push('C')
        }
    })
    return arr.join('')
}

console.log(DNAStrand("ATTGC"))

//Best Solution:

function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }