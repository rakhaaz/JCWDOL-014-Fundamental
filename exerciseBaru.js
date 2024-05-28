//triangle
let segitiga = function (tinggi){

let bentuk = ''

for (let x = 1; x<=tinggi ; x++){
    for (let y = 1 ;y<=x; y++){
        bentuk += y
    }
    bentuk += "\n"

}return bentuk
}

console.log(segitiga(5));