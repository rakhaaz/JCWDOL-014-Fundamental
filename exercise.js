// var baris =1
// var input =5 
// var t
// var total =0

//  for (baris ; baris <= input ; baris++){
//         for (t=1 ; t<= baris ; t++) {
//            total += 1
//         } total += "\n"
        
//     }

//     console.log(typeof(total))
//     console.log(total);

// 2
// let x
// let hasil = ""

// let gantiNama = function (nomor) {
//     for (x=1;x<=nomor;x++){
//         if (x%3 == 0 && x%5 == 0) {
//            hasil += "FizzBuzz";
//         }
//         else if (x%3 == 0){
//             hasil += "Fizz";
//         }
//         else if (x%5 == 0){
//            hasil += "Buzz";
//         }
//         else {
//             hasil += (x);
//         }
       
//     }
//     return hasil
// }

// console.log(gantiNama(15));

//3 BMI Calculator
let calculate

let bmi = function (weight, height) {
calculate = weight / height / height
if (calculate < 18.5) {
    return "less weight"
}
else if (calculate >= 18.5 && calculate < 25) {
    return "ideal"
}
else if (calculate >= 25 && calculate < 30 ){
    return "overweight"
}
else if (calculate >= 30 && calculate < 40){
    return "very overweight"
}
else {
    return "obesity"
}
}

console.log(bmi(65,1.69));


// //array --> remove odd numbers
let data = [1,2,3,4,5,6,7,8,9,10]
let data2 = data.filter(function (x) {
    return y = x%2 == 0
})

console.log(data2);