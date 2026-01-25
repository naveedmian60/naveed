// // for(i=1; i<=10; i++){
// //  console.log(i);
// // }


// let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

// let j = 1;
// do {
//     console.log(j);
//     j++;
// } while (j<= 20);

// for (let i = 1; i <= 10; i++) {
//    if (i == 8) {
//     breai;
//    }
//    console.log(i);
    
// }


// for (let i = 1; i <= 15; i++) {
//    if (i == 8) {
//     continue;
//    }
//    console.log(i);
    
// }

let i = 1;

while (i<=10) {
    if (i == 5) {
        i++;
        continue;
    }
    if (i == 7) {
        break;
    }
    console.log(i);
    i++;
}

function add(a,b) {
    return a+b;
}
let sum = add(60,70);
console.log("sum:", sum);

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
let result = isEven(4);
console.log("Is 4 even", result);


function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
let anyResult = isEven(5);
console.log("Is 5 even",anyResult);


const product = (a,b)=>{
  return a*b;
}
 let  bestresult = product(10,15);
console.log(bestresult);


const divid = (c,d)=>{
    return c/d;
}
let divresult = divid(150,5);
console.log(divresult);

const modulecs = (f,g) => f%g;

let resultway = modulecs(15,15);
console.log(resultway);


