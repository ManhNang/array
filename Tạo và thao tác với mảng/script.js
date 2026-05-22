let x = 0;
let array = [];
const result = document.getElementById("result");

function add_element_to_array(){
    array[x] = document.getElementById("txtValue").value;
    x++;
    document.getElementById("txtValue").value = "";
}

function display_array(){
    array.forEach((item, index) => result.innerHTML += `<hr/>Element ${index}: ${item}<br/>`);
}