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