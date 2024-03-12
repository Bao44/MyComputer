function lay_giatricu() {
    return document.getElementById("gia_tri_cu").innerText;
}

function in_giatricu(so) {
    return document.getElementById("gia_tri_cu").innerText = so;
}

function lay_ketqua() {
    return document.getElementById("gia_tri_xuat").innerText;
}

function in_ketqua(so) {
    if (so == "")
        document.getElementById("gia_tri_xuat").innerText = so;
    else
        document.getElementById("gia_tri_xuat").innerText = dinh_dang_chuoi(so);
}

function dinh_dang_chuoi(so) {
    var n = Number(so);
    var gia_tri = n.toLocaleString("en");
    return gia_tri;
}

function xoa_dinh_dang_chuoi(so) {
    return Number(so.replace(/,/g, ''));
}

var con_so = document.getElementsByClassName('con_so');
for (var i = 0; i < con_so.length; i++) {
    con_so[i].addEventListener('click', function() {
        var ketqua = xoa_dinh_dang_chuoi(lay_ketqua());
        if (ketqua != NaN) {
            ketqua = ketqua + this.id;
            in_ketqua(ketqua);
        }
    })
}


var he_thong = document.getElementsByClassName('he_thong');
for (var i = 0; i < he_thong.length; i++) {
    he_thong[i].addEventListener('click', function() {
        if (this.id == "xoa_tat_ca") {
            in_ketqua("");
            in_giatricu("");
        } else if (this.id == "xoa_tung_so") {
            let ket_qua = xoa_dinh_dang_chuoi(lay_ketqua()).toString();
            if (ket_qua) {
                ket_qua = ket_qua.substr(0, ket_qua.length - 1)
                in_ketqua(ket_qua)
            }
        } else {
            var ket_qua = lay_ketqua();
            var ket_qua_cu = lay_giatricu();
            if (ket_qua != "") {
                ket_qua = xoa_dinh_dang_chuoi(ket_qua);
                ket_qua_cu = ket_qua_cu + ket_qua;
                if (this.id == "=") {
                    var ket_qua_cuoi = eval(ket_qua_cu);
                    in_ketqua(ket_qua_cuoi);
                    in_giatricu("");
                } else {
                    ket_qua_cu = ket_qua_cu + this.id;
                    in_giatricu(ket_qua_cu);
                    in_ketqua("");
                }
            }
        }
    })
}