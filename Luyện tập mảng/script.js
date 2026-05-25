//Bài 1
let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

console.log("Bài 1");
for(let i = 0; i < a.length; i++){
    console.log("row " + i);
    for(let j = 0; j < a[i].length; j++){
        console.log(a[i][j]);
    }
}

//Bài 2
let b = [ 'c', 's', 'c', '2', '6', '1' ];
let result = "";

console.log("Bài 2");
for(let i = b.length - 1; 0 < i; i--){
    result += b[i];
}
console.log(result);

//Bài 3
let c = [0, 1, "a", 2, 3, 4, 5, "b", 6, 7, 8, "c" ,9]

console.log("Bài 3");
console.log("Kích thước mảng: " + c.length);
let count = 0;
for(let i = 0; i < c.length; i++){
   if(typeof c[i] === 'number') count++;
}
console.log("Số kí tự số trong mảng: " + count);

//Bài 4
let d = "abcd2ef`., g3h4i56";
let tmp = '';
count = 0;

console.log("Bài 4");
console.log("Kích thước mảng: " + d.length);
for(let i = 0; i < d.length; i++){
    if((d.charCodeAt(i) > 64 && d.charCodeAt(i) < 91) || (d.charCodeAt(i) > 96 && d.charCodeAt(i) < 123)) count++;
}
console.log("Số từ trong chuỗi: " + count);

//Bài 5
let chuoiA = prompt("Nhập chuỗi thứ 1: ", "");
let chuoiB = prompt("Nhập chuỗi thứ 2: ", "");

ifchuoiA === chuoiB ? console.log("Chuỗi giống nhau") : console.log("Chuỗi không giống nhau");

//Bài 6
let chuoiKyTu = "df-pod,;'-vcb-cvbc-x";

console.log(chuoiKyTu.replaceAll('-', '_'));