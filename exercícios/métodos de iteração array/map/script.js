const array = [0, 2, 4, 6];

const data = array.map((item, index, array) => console.log(item, index, array))
// 0 0 [ 0, 2, 4, 6 ]
// 2 1 [ 0, 2, 4, 6 ]
// 4 2 [ 0, 2, 4, 6 ]
// 6 3 [ 0, 2, 4, 6 ]

const double = array.map((item) => item*2)
console.log({double});
//{ double: [ 0, 4, 8, 12 ] }

