console.log("Kết quả Hoisting: ", message);
var message = " hello";
function kiemtraScope() {
    var bienTrongHam = " Biến này bị nhốt trong hàm";
}
kiemtraScope();
console.log("bienTrongHam");