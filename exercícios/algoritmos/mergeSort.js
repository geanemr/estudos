function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Caso base: array com um único elemento já está ordenado
  
    const meio = Math.floor(arr.length / 2); // Divide o array ao meio
    const esquerda = mergeSort(arr.slice(0, meio)); // Chamada recursiva para a metade esquerda
    const direita = mergeSort(arr.slice(meio)); // Chamada recursiva para a metade direita
  
    return merge(esquerda, direita); // Intercala as metades ordenadas
  }
  
  function merge(left, right) {
    let resultado = [], i = 0, j = 0;
  
    // Combina os arrays ordenados
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        resultado.push(left[i]);
        i++;
      } else {
        resultado.push(right[j]);
        j++;
      }
    }
  
    // Adiciona os elementos restantes, se houver
    return resultado.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Exemplo de uso
  const array = [7, 2, 9, 4, 3, 8, 6, 1];
  console.log(mergeSort(array)); // Saída: [1, 2, 3, 4, 6, 7, 8, 9]