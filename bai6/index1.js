let soTienVay = prompt("Số tiền vay ngân hàng là:");
let so_tien_vay = parseInt(soTienVay);
let soNam = prompt("Số năm vay tiền:");
let so_nam = parseInt(soNam);
let tienLai = so_tien_vay*6.9/100*so_nam;
let tien_lai = parseInt(tienLai);
let soTienTra = so_tien_vay + tien_lai;
let so_tien_tra = parseInt(soTienTra);
document.write(so_tien_tra);
