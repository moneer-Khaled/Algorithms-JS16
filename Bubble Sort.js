function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let x = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = x;
            }
        }
    }

    return arr;  
}

console.log(bubbleSort([5, 1, 4, 2, 55, 634, 575, 553, 66]));

console.log(bubbleSort([7,5,2,4,3,9]));
