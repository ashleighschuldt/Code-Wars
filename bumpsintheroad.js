// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! 
// Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 
// 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

//My Answer:
function bump(x){
    if(x.split('').filter(flat => flat==='n').length > 15){
        return 'Car is Dead'
    } else {
        return 'Woohoo!'
    }
}
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'));
console.log(bump('_nnnnnnnn__n_n____n_n____n_n__n_'))

//Best Solution:
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"