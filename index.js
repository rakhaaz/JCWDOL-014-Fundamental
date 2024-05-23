// let total = ""

// let bintang = function(tinggi, baris){
//     for (let x = 1;x<=tinggi;x++){
//     for(let y=1 ;y<=baris; y++){
//         total += "*"
//     } total += "\n"
// }
// console.log(total);
// }

// bintang (3,5)

//segitiga terbalik
let ting =5
let leb = 5
let bintang = ""

for(let t = 1;t <= ting; t++){
    for (let a = leb ; a >= 1 ; a--){
        bintang += "*"
    }
    leb --
    bintang += "\n"
}

console.log(bintang);