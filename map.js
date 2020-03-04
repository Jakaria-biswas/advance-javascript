const number = [2,4,6,8,10,12];

/* You can choose any way */


// const output =[];
// for(let i = 0; i<number.length; i++){
//          const element = number[i];
//          const result = element * element ;
//          output.push(result)

// }
// console.log(output);

// const result = number.map( x => {
//   const double =   x * x;
//   return double;
// } );
// console.log(result);

const result = number.map(y => y * y);
console.log(result);

// const result = number.map(function(x){
//     total = x*x;
//     return total;
// });
// console.log(result);