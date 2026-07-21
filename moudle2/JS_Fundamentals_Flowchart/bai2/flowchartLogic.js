let chuyenCan = 85;
let diemTB = 6.0;
let giayPhep = false;
let dieuKienHocLuc = (chuyenCan > 80 && diemTB >=5);
if (dieuKienHocLuc) {
    console.log("Đạt điều kiện về điểm và chuyên cần");
}
else {
    console.log("Không đạt điều kiện về điểm và chuyên cần");
}

if (dieuKienHocLuc || giayphep) {
    console.log("Kết quả: Sinh viên đủ điều kiện dự thi.");
}
else {
    console.log("Kết quả: Sinh viên không đủ điều kiện dự thi.");
}

if (!giayPhep) {
    console.log(" Sinh viên này Không có giấy phép đặt biệt.");
}
else {
    console.log(" Sinh viên này Có giấy phép đặt biệt.");
}