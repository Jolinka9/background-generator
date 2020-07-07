const initialArr = [1, 2, 3];
const targetArr = [];

const findTargetSum = (arr, targetSum) => {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                tempArr.push(arr[i], arr[j]);
                targetArr.push(tempArr);
                tempArr = [];
            }
        }
    }

    console.log(targetArr);
}

findTargetSum(initialArr, 4);