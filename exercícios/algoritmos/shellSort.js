function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2);  // Inicializa o gap com metade do tamanho do array

    // Vai diminuindo o gap até chegar a 1
    while (gap > 0) {
        // Faz o insertion sort com o gap atual
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;

            // Compara os elementos distantes por 'gap' e os rearranja
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Coloca o valor na posição correta
            arr[j] = temp;
        }

        // Diminui o gap
        gap = Math.floor(gap / 2);
    }
    return arr;
}

// Testando o algoritmo
let arr = [12, 34, 54, 2, 3];
console.log("Array ordenado:", shellSort(arr));  // Saída: [2, 3, 12, 34, 54]