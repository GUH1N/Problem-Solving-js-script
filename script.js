//array deduplication
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5,];
let arr1=[];
for(let i=0; i<arr.length; i++){
    if(!arr1.includes(arr[i])){
        arr1.push(arr[i]);
    }
}
console.log(arr1);

//intersection of two arrays
let first_array = [1, 3, 5, 7, 9];
let second_array = [2, 3, 4, 5, 6, 9];

let res_arr = (first_array, second_array) => {
    let new_array = [];
    for (let i = 0; i < first_array.length; i++) {
        for (let j = 0; j < second_array.length; j++) {
            if (first_array[i] === second_array[j]) {
                new_array.push(first_array[i]);
            }
        }
    }
    return new_array;
};
console.log(res_arr(first_array, second_array));

//difference between two arrays
let arr3 = [1, 3, 5, 7, 9];
let arr4 = [2, 3, 4, 5, 6,];
let res_arr2 = (arr3, arr4) => {
    let new_array = [];
    for (let i = 0; i < arr3.length; i++) {
        for (let j = 0; j < arr4.length; j++) {
            if (arr3[i] !== arr4[j]) {
                new_array.push(arr3[i]);
            }
        }
    }
    return new_array;
}
console.log(res_arr2(arr3, arr4));

//array manipulation with slice()
function func() {
    let arr = [23, 56, 87, 32, 75, 13];
    let new_arr = arr.slice(2, 4);
    console.log(arr);
    console.log(new_arr);
}
func();

//creating array with given length
let arr5 = new Array(5);
console.log(arr5.length);