function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Troca os elementos
    }
    return arr;
}

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90])); //[ 11, 12, 22, 25, 34, 64, 90 ]