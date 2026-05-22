/**
 * HỆ THỐNG BÁO CÁO DATAMART (LEGACY CODE - IMPERATIVE PROGRAMMING)
 * Vấn đề: Code dài, nhiều biến tạm, khó đọc, dễ gây lỗi side-effect.
 */

const orders = [
    { id: 1, status: "Delivered", price: 100, tax: "abc" },
    { id: 2, status: "Cancelled", price: 200, tax: 20 },
    { id: 3, status: "Delivered", tax: 30 }
];

function calculateTotalRevenueLegacy(orderList) {
    let successfulOrders = orderList.filter(item => item.status === "Delivered").map(item => item.price + item.tax);
    let totalRevenue = successfulOrders?.reduce((sum, item) => sum += item, 0);
    return totalRevenue;
}

console.log(calculateTotalRevenueLegacy(orders));