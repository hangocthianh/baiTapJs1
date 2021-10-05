
// BÀI 1 TÍNH LƯƠNG
// Mô hình 3 khối
// Khối 1: Có số tiền lương mỗi ngày và số ngày làm việc
// Khối 2:
// - Tạo và lấy giá trị 2 biến số tiền lương mỗi ngày (salaryDay)và số ngày làm việc (workDay)
// - Chuyển thành số bằng hàm Number()
// - Tính tiền lương (salary) = tiền lương mỗi ngày (salaryDay) * số ngày (workDay)
// - Hiện ra kết quả tiền lương
// Khối 3: Tiền lương

function salary(){
    var salaryDay = document.getElementById("salaryPerDay").value;
    var workDay = document.getElementById("workDayNumber").value;
    var salary = (Number(salaryDay) * Number(workDay)).toLocaleString('en');
    document.getElementById("salaryMoney").innerHTML = salary;
}
document.getElementById("btnSalary").onclick = salary;


// BÀI 2 TÍNH TRUNG BÌNH
// Mô hình 3 khối
// Khối 1: Có giá trị 5 số
// Khối 2: 
// - Tạo và lấy giá trị 5 số num1, num2, num3, num4, num5.
// - Chuyển thành số bằng hàm Number
// - Tính giá trị trung bình 5 số (ave) = tổng 5 số (num1 + num2 + num3 + num4 + num5) chia cho 5
// - Hiện ra kết quả trung bình 5 số
// Khối 3: Trung bình 5 số

function average(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var ave = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5))/5;
    document.getElementById("ave").innerHTML = ave;
}
document.getElementById("btnAverage").onclick = average;


// BÀI 3 QUY ĐỔI
// Mô hình 3 khối
// Khối 1: Có số tiền USD và tỷ giá quy đổi là 23500VND
// Khối 2: 
// - tạo và lấy giá trị số tiền usd (usdMoney)
// - tạo biến hằng tỷ giá quy đổi (exchangeRate)
// - tính số tiền Việt (vndMoney) = số tiền USD (usdMoney) * tỷ giá (exchangeRate)
// - Hiện ra số tiền Việt
// Khối 3: Số tiền Việt

function exchange(){
    var usdMoney = document.getElementById("usdMoney").value;
    const exchangeRate = 23500;
    var vndMoney = (Number(usdMoney) * exchangeRate).toLocaleString('en');
    document.getElementById("vndMoney").innerHTML = vndMoney;
}
document.getElementById("btnExchange").onclick = exchange;


// BÀI 4 TÍNH CHU VI DIỆN TÍCH HÌNH CHỦ NHẬT
// Mô hình 3 khối
// Khối 1: Có chiều dài và chiều rộng
// Khối 2: 
// - Tạo và lấy giá trị chiều dài (length) và chiều rộng (width)
// - Chuyển thành số bằng hàm Number()
// - Tính diện tích (area) = chiều dài (length)* chiều rộng (width)
// - Tính chu vi (perimeter)= (chiều dài (length) + chiều rộng (width))*2
// - Hiện ra kết qủa diện tích chu vi
// Khối 3: Diện tích chu vi HCN


function rectangle(){
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var area = Number(length) * Number(width);
    var perimeter = (Number(length) + Number(width))*2;
    document.getElementById("area").innerHTML = area;
    document.getElementById("perimeter").innerHTML = perimeter;
}
document.getElementById("btnRec").onclick = rectangle;


// BÀI 5 TÍNH TỔNG 2 KÝ SỐ
// Mô hình 3 khối
// Khối 1: có 1 số có 2 chữ số (n)
// Khối 2: 
// - tạo và tính giá số hàng chục (ten) = phần nguyên của phép chia n/10
// - tạo và tính số hàng đơn vị (unit) = n%10
// - chuyển thành số bằng hàm Number()
// - tổng 2 ký số (sum) = số hàng chục (ten) + số hàng đơn vị (unit)
// - hiện ra tổng (sum)
// Khối 3: tổng 2 ký số

function sum(){
    var ten = Math.floor(document.getElementById("num").value/10);
    var unit = document.getElementById("num").value%10;
    var sum = Number(ten) + Number (unit);
    document.getElementById("sum").innerHTML = sum;
}
document.getElementById("btnSum").onclick = sum;
