let TD = [['Ncc', '1809', '18%','1000'],['Ncc', '1769', '18%','1019'],['Ncc', '1750', '20%','890']];

function higt() {
    let sum = `<tr>
            <th>#</th>
            <th>Tên</th>
            <th>Điểm </th>
            <th>Tỉ Lệ Tốp 1</th>
            <th>Tổng Số Trận </th>
            </tr>`;
    for (let i = 0; i < TD.length; i++) {
        sum += `<tr>

                            <td>${i + 1}</td>
                            <td>${TD[i][0]}</td>
                            <td>${TD[i][1]}</td>
                            <td>${TD[i][2]}</td>         
                            <td>${TD[i][3]}</td>         
                            </tr>`;
    }
    document.getElementById("thach dau").innerHTML = sum;
}

higt();
let DCT= [['', '1111', '18','']];

function fit() {
    let avg= `<tr>
            <th>#</th>
            <th>Tên</th>
            <th>Điểm </th>
            <th>Tỉ Lệ Tốp 1</th>
            <th>Tổng Số Trận </th>
            </tr>`;
    for (let i = 0; i < DCT.length; i++) {
        avg += `<tr>
                            <td>${i + 1}</td>
                            <td>${DCT[i][0]}</td>
                            <td>${DCT[i][1]}</td>
                            <td>${DCT[i][2]}</td>
                            <td>${DCT[i][3]}</td>
                                      
                            </tr>`;
    }
    document.getElementById("dai cao thu").innerHTML = avg;
}

fit();
let CT= [['', '1111', '18','']];
function short() {
    let put= `<tr>
            <th>#</th>
            <th>Tên</th>
            <th>Điểm </th>
            <th>Tỉ Lệ Tốp 1</th>
            <th>Tổng Số Trận </th>
            </tr>`;
    for (let i = 0; i < DCT.length; i++) {
        put += `<tr>
                            <td>${i + 1}</td>
                            <td>${CT[i][0]}</td>
                            <td>${CT[i][1]}</td>
                            <td>${CT[i][2]}</td>
                            <td>${CT[i][3]}</td>
                                      
                            </tr>`;
    }
    document.getElementById("cao thu").innerHTML =put ;
}

short();