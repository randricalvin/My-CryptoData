// find avergae of array
function average(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
    }
    const arr = [1, 2, 3, 4, 5];
    console.log(average(arr));
    