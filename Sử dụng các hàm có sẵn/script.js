//Bài 1: Nối các phần tử trong mảng thành chuỗi
const myColor = ["Red", "Green", "White", "Black"];
let result = myColor.join(", ");
console.log(result);

//Bài 2: Chèn dấu "-" giữa các số chẵn
const rawString = "025468";
const rawArr = rawString.split("");
let resultString = "";

for(let i = 0; i < rawArr.length; i++){
    if(parseInt(rawArr[i]) % 2 == 0 && parseInt(rawArr[i + 1]) % 2 == 0){
        resultString += rawArr[i] + "-";
    }
    else resultString += rawArr[i];
}
console.log(resultString);

//Bài 3: Chuyển đổi chữ thường sang chữ hoa và ngược lại
const inputString = "The Quick Brown Fox";
let fixedString = "";

for(let i = 0; i < inputString.length; i++){
    if(inputString[i] === inputString[i].toLowerCase()){
        fixedString += inputString[i].toUpperCase();
    }
    else fixedString += inputString[i].toLowerCase();
}
console.log(fixedString);
