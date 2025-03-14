
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Troca os elementos
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); //[ 11, 12, 22, 25, 34, 64, 90 ]