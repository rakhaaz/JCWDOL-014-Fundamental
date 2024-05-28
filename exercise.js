// //triangle
// let segitiga = function (tinggi){

//     let bentuk = ''
    
//     for (let x = 1; x<=tinggi ; x++){
//         for (let y = 1 ;y<=x; y++){
//             bentuk += y
//         }
//         bentuk += "\n"
    
//     }return bentuk
//     }
    
//     console.log(segitiga(5));

// //2
// //find maximum value in a array
// let arr = [10, 55, 79, 32]
// let max = arr[0]

// arr.forEach (function(e,i){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     }
// ) 
// console.log(max);

// // 3
// //segitiga angka
let k =1
let i =1
let bentuk = ""
let segitiga = function (baris) {
    for (i;i<=baris;i++){
        for (let j = 1 ;j<=i; j++){
            
            bentuk += k
            k++
        }
        bentuk += "\n"
    }
    return bentuk
}

console.log(segitiga(4));

// //fizzbuzz
// let jejeran = ''
// let fb = function (jmlAng) {
//     for (let a =1 ; a <= jmlAng; a++){
//         if (a%3==0 && a%5==0){
//             if (a == jmlAng){
//                 jajaran += "FizzBuzz"
//             }
//             else {
//             jejeran += "FizzBuzz, "
//             }
//         }
//         else if (a%3 == 0) {
//             if (a == jmlAng) {
//                 jejeran += "Fizz"
//             }
//             else{
//                 jejeran += "Fizz, "
//             }
//         }
//         else if (a%5 == 0) {
//             if (a == jmlAng){
//                 jejeran += "Buzz"
//             }
//             else {
//                 jejeran += "Buzz, "
//             }
//         }
//         else {
//             if (a == jmlAng){
//                 jejeran += a
//             }
//             else {
//             jejeran += a + ", "
//             }
//         }
//     }
//     return jejeran
// }

// console.log(fb(17));


// //3 BMI Calculator
// let calculate

// let bmi = function (weight, height) {
// calculate = weight / height / height
// if (calculate < 18.5) {
//     return "less weight"
// }
// else if (calculate >= 18.5 && calculate < 25) {
//     return "ideal"
// }
// else if (calculate >= 25 && calculate < 30 ){
//     return "overweight"
// }
// else if (calculate >= 30 && calculate < 40){
//     return "very overweight"
// }
// else {
//     return "obesity"
// }
// }

// console.log(bmi(65,1.69));


// //arr --> remove odd number
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arrBaru = []

// arr.forEach (function(i, e){
//     if (e%2 == 0){
//         arrBaru.push (arr[i]) 
//     }
// }
// )

// console.log(arrBaru);


// //Split word --> array

// let cvt = function (kata) {
//     console.log(kata.split (' '))
// }

// cvt ("Hello World")