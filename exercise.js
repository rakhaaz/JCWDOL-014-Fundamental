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

// //2 - array sepate by comma and "and" at the end
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

// let string = ""

// let gabung = function (arr) {
//      for (let i = 0 ; i<arr.length ; i++) {
//           if (i == arr.length-1){
//               string += "and " + arr[i]
//           }
//           else {
//                string += `${arr[i]}, `;
//           }
//      }
//      return string
// }

// console.log (gabung (["apple", "banana", "cherry", "date", "pear"] ))

// 3 split a string and convert to array

// a. Example : “Hello World” → [“Hello”, “World”]
// let str = function (kata) {
//      return kata.split (" ")
// }

// console.log(str("Hello World"));

// //4. sum two array
// Assume both arrays are of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// let sum = []

// let tambah = function (arr1, arr2) {
//      for (let i=0 ; i<arr1.length ; i++){
//           for (j=0 ; j<arr2.length ; j++){
//                if (i==j){
//                     sum.push (arr1[i] + arr2[j])
//                }
//           }
//      }
//      return sum
// }

// console.log(tambah ([1, 2, 3], [3,2,1]));

// 5. 
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : c, newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

// let nambah = function (arr, baru){
// if (!arr.includes(baru)) {arr.push(baru)}      //PERHATIAN!!! --> method baru = ".includes"

//      return arr
// }
// console.log(nambah([1, 2, 3, 4] , 10));


//6
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
// let numbers = [1, 2, 3, 4, 5, 6, 8]


//      let nmb = numbers.filter (function(e) {
//           return e%2 == 0
//      })


// console.log(nmb);


//7
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

// let arr = []

// let jadiArr = function (angka,jml){
//      let baru = angka.split (", ")
//      for (let i = 0 ; i<jml ; i++) {
//           arr.push (baru[i])
//      }
//      return arr
// }

// console.log(jadiArr("5, 10, 24, 3, 6, 7, 8", 3));


//8
// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

// let gabung = function (arr1,arr2){
//      for (let i=0 ; i<arr2.length ; i++) {
//           arr1.push (arr2[i])
//      }
//      return arr1
// }

// console.log(gabung ([1,2,3],[4,5,6]));


//9
// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// let duplicateArr = []
// let duplicateArr2 = []

// let ganda = function (arr) {
//      for (let i = 0 ; i <arr.length ; i++){
//           if (arr[i] == arr[i+1]) {
//                duplicateArr.push (arr[i])
//           }
//      }
//      for (let x = 0 ; x<duplicateArr.length ; x++){
//           if (duplicateArr[x] == duplicateArr[x+1]) {
//                duplicateArr.splice (x, 1)}
//           }      
//           return duplicateArr   
//      }
   

// console.log(ganda ([1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6, 6, 6]));

// //solusi lain yg benar

// function FindDuplicate(arrNumbers){
//      const arrResult = []
//      arrNumbers.forEach(number => {
//          if(arrNumbers.indexOf(number) !== arrNumbers.lastIndexOf(number)){
//              if(!arrResult.includes(number)){
//                  arrResult.push(number)
//              }
//          } 
//      })
 
//      return arrResult
//  }
 
//  console.log(FindDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6, 6, 6]))


// //10
// // Write a function to find the difference in 2 given array
// // a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

// let findDifferent = function (arr1, arr2){
//      let arrTotal = []
//      for (let i =0 ; i<arr2.length ; i++){
//           arr1.push(arr2[i])
//      }
//      arr1.sort()
//      for (let x = 0 ; x<arr1.length ; x++){
//           if (arr1[x] != arr1[x+1] && arr1[x] != arr1[x-1]){
//                arrTotal.push (arr1[x])
//           }
//      }
//      return arrTotal
// }

// console.log(findDifferent([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//11
// Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

// let tipe = function (arr) {
//      let arrPrmitive = []
//      for (let x =0 ; x<arr.length ; x++){
//           if (typeof(arr[x]) !== "object"){
//                arrPrmitive.push(arr[x])
//           } 
//      }
//      return arrPrmitive
// }

// console.log(tipe([1, [], undefined, {}, "string", {}, []]));


//12
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

let secondSmallest = function (arr) {
     arr.sort ()
     arr.forEach((element, index) => {
          if (arr[index] !== arr[index+1] || arr[index] !== arr[index-1]) {
               return arr [1]
          }
          
     });
}

console.log(secondSmallest([5, 3, 1, 7, 2, 6]));