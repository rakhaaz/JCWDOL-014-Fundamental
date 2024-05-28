// //triangle
// let segitiga = function (tinggi){

// let bentuk = ''

// for (let x = 1; x<=tinggi ; x++){
//     for (let y = 1 ;y<=x; y++){
//         bentuk += y
//     }
//     bentuk += "\n"

// }return bentuk
// }

// console.log(segitiga(5));

//find maximum value in a array
let arr = [10, 55, 79, 32]
let max = arr[0]

arr.forEach (function(e,i){
    if(arr[i] > max){
        max = arr[i]
    }
    }
) 
console.log(max);