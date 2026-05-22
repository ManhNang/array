let x = 0;
let array = [];
const result = document.getElementById("result");

function add_element_to_array(){
     let element = document.getElementById("txtValue").value;
     array[x] = element;
    alert("Đã thêm phần tử " + element + " ở vị trí thứ " + x);
    x++;
    document.getElementById("txtValue").value = "";
}

function display_array(){
    array.forEach((item, index) => result.innerHTML += `<hr/>Element ${index}: ${item}<br/>`);
}