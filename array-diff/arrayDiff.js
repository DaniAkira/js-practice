const array1 = [4, 5, 7, 3, 4, 5, 27, 13, 23, 9, 8, 7, 5, 5, 5, 5, 5, 8, 8, 8, 3];
const array2 = [2, 5, 7, 13, 4, 8];

function difArrays(array){
    let newArray = array1;
    for(let numberArray2 of array){
        for(let i =0; i < array1.length; i++){
            if(numberArray2 == array1[i]){
                newArray.splice(i,1);
                i--;
            }
        }
    }

    return console.log(newArray);
}


difArrays(array2);

