/**
 * HỆ THỐNG ĐẶT VÉ CINECODE - LEGACY CODE
 * Vấn đề: Dữ liệu rời rạc, không thể mở rộng, không thể duyệt qua bằng vòng lặp.
 */

// 1. Quản lý ghế ngồi (Cách làm sai lầm)
let row0_col0 = 0; // 0 là trống, 1 là đã đặt
let row0_col1 = 1; 
let row0_col2 = 0;
// ... cứ thế kéo dài đến 50 biến cho 50 ghế.

// Hàm kiểm tra ghế (cực kỳ thủ công)
function checkSeatLegacy(row, col) {
    if (row === 0 && col === 0) return row0_col0 === 0 ? "Trống" : "Đã đặt";
    if (row === 0 && col === 1) return row0_col1 === 0 ? "Trống" : "Đã đặt";
    // ... phải viết hàng trăm lệnh if cho các ghế khác
    return "Không tìm thấy ghế";
}

// 2. Quản lý danh sách chờ (Dùng chuỗi thay vì mảng 1 chiều)
let waitlistString = "NguyenVanA,TranThiB,LeVanC";

// --- KHU VỰC THỰC HÀNH CỦA HỌC VIÊN ---
// NHIỆM VỤ 1: Khai báo `cinemaSeats` là một mảng 2 chiều (ví dụ 3x3 hoặc 5x10) chứa số 0 và 1.
let cinemaSeats = [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
]

// NHIỆM VỤ 2: Khai báo `waitlistArray` là một mảng 1 chiều chứa tên khách hàng.
let waitlistArray = ["NguyenVanA","TranThiB","LeVanC"]

// NHIỆM VỤ 3: Viết hàm bookSeat(row, col) để chuyển giá trị từ 0 sang 1 tại vị trí tương ứng trong mảng 2 chiều.
function bookSeat(row, col){
    if( !Number.isInteger(row) || !Number.isInteger(col) || row < 0 || row >= cinemaSeats.length || col < 0 || col >= cinemaSeats[row].length) return "Không tìm thấy ghế";
    if(cinemaSeats[row][col] === 0){
        cinemaSeats[row][col] = 1;
        return "Bạn đã đặt ghế thành công";
    }
    return "Ghế đã bị người khác đặt";
}

// NHIỆM VỤ 4: Viết hàm addCustomerToWaitlist(name) để thêm tên vào mảng 1 chiều.
function addCustomerToWaitlist(name){
    waitlistArray.push(name);
}

console.log(cinemaSeats);
console.log(bookSeat(2, 1));
console.log(bookSeat(2, 1));
console.log(bookSeat(-1, 1));
console.log(bookSeat(3, 4));
console.log(bookSeat(2, "abc"));
console.log(cinemaSeats);
