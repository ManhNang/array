const engDictionary = ["Hello", "Good", "Sure", "Baby", "Stupid"];
const viDictionary = ["Chào", "Tốt", "Đồng ý", "Em bé", "Ngu ngốc"];
const result = document.getElementById("result");

function searchDictionary(){
    const keyword = document.getElementById("searchBox").value;
    
    for(let i = 0; i < engDictionary.length; i++){
        if(engDictionary[i].toLowerCase() === keyword.toLowerCase()){
            return result.innerText = engDictionary[i] + " là " + viDictionary[i];
        }
        result.innerText = "Không tìm thấy";
    }
}

