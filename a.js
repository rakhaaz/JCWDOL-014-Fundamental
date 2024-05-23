// //nomor 1
// let arr = [12 , 5 , 23 , 18 , 4 , 45 , 32]
// let low = 1000
// let hi = 0
// let avg = 0
// let sum = 0

// let angka = function(){
//     for (let i =0 ; i < arr.length ; i++) {
//     sum += arr[i]
//     if (arr[i]<low){
//          low = arr[i]
//     }
//     if (arr[i]>hi){
//          hi = arr[i]
//     }
// }
// }

// angka()
// avg = sum / arr.length

// console.log("minimum: "+ low+" maksimum: "+ hi+" average: "+avg);


//Nomor 2
// let buah = ["apple", "banana", "cherry", "date"]
// let a
// let b
// let c
// let d

// let cvtToString = function (){
//      a = buah[0]
//      b =buah [1]
//      c = buah [2]
//      d = buah [3]
// }

// cvtToString ()
// console.log(a,b,c,d);

// //nomor 3
// const kata = function (str) {
//      return str.split (' ')
// }

// console.log(kata('Hello World'));

// //nomor 4
// let arr1 = [1,2,3]
// let arr2 = [1,2,1]
// let arrJml = []

// let arrBaru = function () {
//      for (let i=0;i<arr2.length;i++){ 
//     arrJml.push (arr1[i] + arr2[i])
// }
// return arrJml
// }

// console.log(arrBaru());


// //nomor 5
// let tmb = [1, 2, 3, 4]
// let bar

// let nambah = function (bar){
// if (bar != tmb[0] && bar != tmb[1] && bar != tmb[2] && bar != tmb[3]){
//      return tmb.push (bar)
// } else {
//      return tmb
//      }
// }

// nambah (3)

// console.log(tmb);


// //nomor 6
// let arr = [1,2,3,4,5,6]
// let arr3 = []

// let genap = function (){
//      for (let x=0; x< arr.length ; x++){
//      if (arr[x]%2 == 0){
//           arr3.push (arr[x])
//      } 
// } 
// return arr3}

// genap()
// console.log(arr3);

// //nomor 7
// let int = [5, 10, 24, 3, 6, 7, 8]
// let newArray = []

// let arrNew=function (){
//      for (let g = 0; g <= 4; g++){
//      newArray[g] = int [g]
// }
// return newArray
// }

// arrNew()
// console.log(newArray);

// //nomor 9
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// for (let x=0;x<arr2.length;x++){

//    arr1.push(arr2[x])}


// console.log(arr1);


//nomor 10
let arr = [1, 2, 2, 2, 3, 3, 4, 5, 5]
let arrB = []
let y

for (x=0;x<arr.length;x++){
    if (arr[x] == arr [x+1]){
        arrB.push (arr[x])
    }
}

for (y=0;y<arrB.length;y++){
    if (arrB[y] == arrB [y+1]){
        arrB.shift()
    }
}

console.log(arrB);