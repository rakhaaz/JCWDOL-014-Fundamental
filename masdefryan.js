//koreksi versi mas deryan
// 02
function ConcateningByCommaAndByAnd(arrStr){
    return arrStr.slice(0, arrStr.length-1).join(', ') + ' and ' + arrStr[arrStr.length-1]
}

console.log(ConcateningByCommaAndByAnd(['Banana', 'Cherry', 'Melon', 'Apple']))

//slide 2 np. 4
// 04
function FindDifferenceElementInTwoArray(arr1, arr2){
    const differentElement = []

    arr1.forEach(number => {
        if(!arr2.includes(number)){
            if(!differentElement.includes(number)){
                differentElement.push(number)
            }
        }
    })

    arr2.forEach(number => {
        if(!arr1.includes(number)){
            if(!differentElement.includes(number)){
                differentElement.push(number)
            }
        }
    })

    return differentElement
}

console.log(FindDifferenceElementInTwoArray([1, 3, 5], [2, 4, 5]))