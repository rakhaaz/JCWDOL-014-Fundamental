//convert celcius to fahrenheit
let celcius = 60
let fahrenheit

fahrenheit = (9/5 * celcius) + 32
console.log(fahrenheit);

//check number odd atau even

let nmb = 6

if (nmb%2 == 0) {
    console.log("Angka genap");
}
else {
    console.log("Angka ganjil");
}

//prime number
let angka = 7

if (angka%2 == 0) {
    console.log(angka + " is not a prime number");
}
else {
    console.log(angka + " is a prime number");
}

//sum of numbers
let sum = 5
let i = 1
let total = 0

while (i<=sum) {
    total += i
    i++
}
console.log(total);

//faktorial
let input = 4
let k = 1
let jml = 1

while (k<=input) {
    jml *= k
    k++
}
console.log(jml);

//fibonaci
let ang = 15
let a = 0
let b = 1
let c
let j
for(j=2 ; j<=ang; j++) {
    c = a + b
    a = b
    b = c
}
console.log(c);




