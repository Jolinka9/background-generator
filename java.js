const resultArr = [];
const initialArr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
initialArr.sort(function(a, b) { return a - b });
console.log(initialArr);

const modifyArr = (arr) => {
    let tempArr = [];
    let firstEl = arr[0];
    tempArr.push(firstEl);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === firstEl) {
            tempArr.push(arr[i]);
        } else {
            if (tempArr.length > 1) {
                resultArr.push(tempArr);
            } else {
                resultArr.push(...tempArr);
            }
            tempArr = [];
            firstEl = arr[i];
            tempArr.push(firstEl);

        }
    }
    if (tempArr.length > 1) {
        resultArr.push(tempArr);
    } else {
        resultArr.push(...tempArr);
    }
    //console.log(tempArr);

}

modifyArr(initialArr);


//console.log("result: ", resultArr);

const resultArr2 = [];
const initialArr2 = [1, "2", 3, "3", 5, 2, "4"];
initialArr2.sort();
//console.log(initialArr2);

const modifyArrByType = (arr) => {
    let stringArr = [];
    let numberArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            numberArr.push(arr[i]);
        } else {
            stringArr.push(arr[i]);
        }
    }
    resultArr2.push(numberArr);
    resultArr2.push(stringArr);

}


modifyArrByType(initialArr2);
//console.log('result: ', resultArr2);