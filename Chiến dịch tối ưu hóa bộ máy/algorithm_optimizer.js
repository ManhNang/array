/**
 * HỆ THỐNG TÌM KIẾM MEGASTORE - LEGACY CODE
 * Vấn đề: Thuật toán chậm chạp, hiệu năng kém khi mảng lồng nhau lớn.
 */

// Dữ liệu mô phỏng: Mảng các danh mục, mỗi danh mục là một mảng sản phẩm
const nestedProducts = generateNestedProducts();

// Hàm tìm kiếm và sắp xếp theo giá (Cách tiếp cận thảm họa)
function searchAndSortLegacy(dataArray, price) {
    console.time("LegacyProcess");
    let results = [];
    
    // 1. Tìm kiếm tuyến tính qua mảng lồng nhau O(N*M)
    for (let i = 0; i < dataArray.length; i++) {
        for (let j = 0; j < dataArray[i].length; j++) {
            if (dataArray[i][j].price === price) {
                results.push(dataArray[i][j]);
            }
        }
    }
    console.timeEnd("LegacyProcess");
    //2. Bubble Sort để sắp xếp theo giá O(K^2)
    for (let i = 0; i < results.length - 1; i++) {
        for (let j = 0; j < results.length - 1 - i; j++) {
            if (results[j].price > results[j+1].price) {
                let temp = results[j];
                results[j] = results[j+1];
                results[j+1] = temp;
            }
        }
    }
    
    return results;
}

// --- KHU VỰC THỰC HÀNH CỦA HỌC VIÊN ---
// NHIỆM VỤ 1: Viết hàm "làm phẳng" (flatten) mảng lồng nhau thành mảng 1 chiều tối ưu.
function flattenArray(arr){
    return arr.flat(Infinity);
}
// NHIỆM VỤ 2: Cài đặt một thuật toán sắp xếp hiệu suất cao (Quick Sort / Merge Sort).
function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i].price < right[j].price) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
}

function mergeSortIterative(arr) {
    if (arr.length <= 1) return arr;
    let work = arr.map(val => [val]);
    while (work.length > 1) {
        let nextWork = [];
        for (let i = 0; i < work.length; i += 2) {
            if (i + 1 < work.length) {
                nextWork.push(merge(work[i], work[i + 1]));
            } else {
                nextWork.push(work[i]);
            }
        }
        work = nextWork;
    }
    return work[0];
}
// NHIỆM VỤ 3: Cài đặt thuật toán Binary Search để tìm kiếm sản phẩm theo giá hoặc ID.
function searchAndSortOptimized(arr, targetPrice){
    const sortArr = mergeSortIterative(flattenArray(arr));
    console.time("MyProcess");
    let l = 0;
    let r = sortArr.length - 1;
    let result = [];

    while(l <= r){
        let m = Math.floor((l + r) / 2);

        if(targetPrice === sortArr[m].price){
            let leftIdx = m;
            while (leftIdx >= 0 && sortArr[leftIdx].price === targetPrice) {
                result.push(sortArr[leftIdx]);
                leftIdx--;
            }
            
            let rightIdx = m + 1;
            while (rightIdx < sortArr.length && sortArr[rightIdx].price === targetPrice) {
                result.push(sortArr[rightIdx]);
                rightIdx++;
            }
            
            console.timeEnd("MyProcess");
            return result;
        }
        else if(targetPrice > sortArr[m].price){
            l = m + 1;
        }
        else r = m - 1;
    }

    console.timeEnd("MyProcess");
    return result;
}
// NHIỆM VỤ 4: Dùng console.time() đo lường và so sánh hiệu năng với Legacy Code.

console.log(searchAndSortLegacy(nestedProducts, 50));
console.log(searchAndSortOptimized(nestedProducts, 50));

function generateNestedProducts() {
  
  const TOTAL_PRODUCTS = 500000;
  const MAX_DEPTH = 2; // Độ sâu lồng nhau tối đa (5 cấp)
  
  let currentId = 1;
  
  // Hàm tạo ra 1 sản phẩm ngẫu nhiên chuẩn cấu trúc
  function createProduct() {
    return {
      id: currentId,
      name: `Product Item #${currentId++}`,
      price: Math.floor(Math.random() * (1000 - 10 + 1)) + 10 // Giá từ 10 đến 1000
    };
  }

  // Hàm xây dựng cây thư mục lồng nhau bằng vòng lặp (Bảo vệ bộ nhớ)
  function buildNestedStructure(totalItems, currentDepth) {
    const container = [];
    
    // Điều kiện chặn: Nếu chạm độ sâu tối đa hoặc số lượng item còn lại quá ít,
    // nạp thẳng các sản phẩm (Object) vào mảng này.
    if (currentDepth >= MAX_DEPTH || totalItems <= 10) {
      for (let i = 0; i < totalItems; i++) {
        container.push(createProduct());
      }
      return container;
    }

    // Chia nhỏ số lượng phần tử thành các cụm ngẫu nhiên để lồng vào nhau
    let remainingItems = totalItems;
    while (remainingItems > 0) {
      // Quyết định ngẫu nhiên: Cụm này sẽ chứa Object thuần hay chứa một Mảng lồng tiếp?
      const isNestedArray = Math.random() > 0.4; // 60% tỉ lệ tạo mảng lồng tiếp

      if (isNestedArray && remainingItems > 5) {
        // Cắt một lượng item ngẫu nhiên cho mảng con (tối đa 20% lượng item còn lại)
        const subChunkSize = Math.floor(Math.random() * Math.min(remainingItems * 0.2, remainingItems)) + 1;
        
        // Gọi đệ quy tăng độ sâu để tạo mảng lồng con
        container.push(buildNestedStructure(subChunkSize, currentDepth + 1));
        remainingItems -= subChunkSize;
      } else {
        // Nạp sản phẩm đơn lẻ
        container.push(createProduct());
        remainingItems--;
      }
    }

    return container;
  }

  const result = buildNestedStructure(TOTAL_PRODUCTS, 1);
  return result;
}
