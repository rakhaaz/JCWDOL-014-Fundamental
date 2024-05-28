//arr --> remove odd number
let arr = [1,2,3,4,5,6,7,8,9,10]
let arrBaru = []

arr.forEach (function(i, e){
    if (e%2 == 0){
        arrBaru.push (arr[i]) 
    }
}
)

console.log(arrBaru);