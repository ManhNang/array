/**
 * HỆ THỐNG PHÂN TÍCH DỮ LIỆU DATASTREAM - LEGACY CODE
 * Nhiệm vụ: Lấy email của khách VIP và tính tổng doanh thu từ họ.
 */

const rawUsers = [
    {
        "id": 1,
        "name": "Nguyễn Văn A",
        "role": "VIP",
        "email": "vana@example.com",
        "totalSpent": 500000
    },
    {
        "id": 2,
        "name": "Trần Thị B",
        "role": "vip",
        "totalSpent": 250000
    },
    {
        "id": 3,
        "name": "Lê Văn C",
        "role": "VIP",
        "email": "vanc@example.com",
        "totalSpent": -100000
    },
    {
        "id": 4,
        "name": "Phạm Văn D",
        "role": "VIP",
        "email": "vand@example.com"
    },
    {
        "id": 5,
        "name": "Hoàng Thị E",
        "role": "VIP",
        "email": "",
        "totalSpent": null
    }
];

// --- KHU VỰC THỰC HÀNH CỦA HỌC VIÊN ---
// NHIỆM VỤ: Hãy xóa bỏ hoàn toàn vòng lặp `for` và các biến `let` tạm thời ở trên.
// 1. Tạo hằng số `modernVipEmails` sử dụng kết hợp `.filter()` và `.map()`.
const modernVipEmails = rawUsers?.filter(user => user.role === "VIP").map(user => user.email);

// 2. Tạo hằng số `modernTotalRevenue` sử dụng `.filter()` và `.reduce()`.
const modernTotalRevenue = rawUsers?.filter(user => user.role === "VIP").reduce((total, user) => 
    {
        const spent = user.totalSpent ?? 0;
        return total + spent;
    }, 0);

console.log("Emails:", modernVipEmails.join(", "));
console.log("Total Revenue:", modernTotalRevenue);