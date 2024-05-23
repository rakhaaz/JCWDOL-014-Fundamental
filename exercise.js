const input = "9"
const totalKali = 10
let i

//Multiplication table
parseFloat (input)
for(i=1;i<=totalKali;i++){
    console.log(input + " x " + i + " = " + (input*i));
}

//palindrome
function Palindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return "bukan palindrom";
        }
        j--;
    }
    return "palindrome";
}
 
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
 
console.log(Palindrome(str1));
console.log(Palindrome(str2));
console.log(Palindrome(str3));