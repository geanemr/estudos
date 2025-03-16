function quickSort(arr) {
    // Caso base: se o vetor tem 0 ou 1 elemento, ele já está ordenado
    if (arr.length <= 1) return arr;
  
    // Escolher o pivô (aqui escolhemos o último elemento do vetor)
    const pivot = arr[arr.length - 1];
  
    // Arrays para armazenar os elementos menores e maiores que o pivô
    let left = [];
    let right = [];
  
    // Percorre os elementos (exceto o pivô)
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);  // Adiciona aos elementos menores que o pivô
      } else {
        right.push(arr[i]); // Adiciona aos elementos maiores que o pivô
      }
    }
  
    // Chama recursivamente o quickSort nas sublistas e retorna a lista ordenada
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Exemplo de uso:
  const arr = [29, 10, 14, 37, 13];
  console.log("Array original:", arr); //Array original: [ 29, 10, 14, 37, 13 ]
  console.log("Array ordenado:", quickSort(arr)); //Array ordenado: [ 10, 13, 14, 29, 37 ]