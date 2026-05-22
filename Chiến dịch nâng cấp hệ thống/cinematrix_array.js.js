/**
 * HỆ THỐNG ĐẶT VÉ CINEMATRIX (LEGACY CODE - CẤU TRÚC TỒI)
 * Vấn đề: Không dùng mảng, không thể mở rộng, code lặp lại (WET - Write Everything Twice)
 */

// Bảng giá đang lưu bằng các biến rời rạc
const  ticketPrices = [
    {ticket: "Normal", price: 50000},
    {ticket: "VIP", price: 90000},
    {ticket: "Couple", price: 120000}
]

// Sơ đồ ghế lưu bằng biến rời rạc. 0: Trống, 1: Đã đặt
let seatMap = [
    [0, 1, 0],
    [0, 0, 0],
    [1, 0, 1]
]
// Thử tưởng tượng rạp có 500 ghế thì phải viết bao nhiêu dòng?
function bookSeat(row, col){
    if(row < 0 || col < 0 || row > seatMap.length || col > seatMap[row].length){
        return "Không tìm thấy ghế!";
    }

    if(seatMap[row][col] === 0){
        seatMap[row][col] = 1;
        return "Đã đặt ghế " + ticketPrices[row].ticket + " thành công với giá " + ticketPrices[row].price;
    }

    return "Ghế đã có người đặt!";
}

console.log(bookSeat(0,0));
console.log(bookSeat(0,1));
console.log(bookSeat(-1,0));
console.log(bookSeat(10,0));
console.log(bookSeat(12,-5));
