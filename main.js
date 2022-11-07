var listNumber=[];
function addNumber (){
    var number = document.getElementById("txtNumber").value * 1;
    listNumber.push(number);
    console.log(listNumber)
    document.getElementById("infoListNumber").innerHTML = listNumber;
}

// bài 1 : Tổng số dương

function tinhTongSoDuong(){
    var total = 0;
    for(i = 0; i< listNumber.length; i++){
        if(listNumber[i] / 2 > 0)
            total += listNumber[i]
    }
    console.log(total)
    var result = "Tổng các số dương là: " + total
    document.getElementById("infoTongDuong").innerHTML = result
}

// Bài tập 2: Đếm số dương

function demSoDuong(){
    if(listNumber.length === 0){
        alert("Vui lòng nhập số!")
        return;
    }
    var dem = 0;
    for(i = 0; i< listNumber.length; i++){
        var item = listNumber[i]
        if(item > 0){
            dem++
        }
    }
    var result = "Có: "+ dem + " số dương"
    document.getElementById("infoDemSoDuong").innerHTML = result;
}

// Bài tập 3 Tìm số nhỏ nhất
function soNhoNhat(){
    var min = listNumber[0]
    var vitri = 0;
    for(i = 0; i< listNumber.length; i++){
        var snn = listNumber[i]
        if(min > snn){
            min = snn
            vitri = i
        }
    }
    var result = "Số nhỏ nhất là: " + min
    document.getElementById("infoSoNhoNhat").innerHTML = result;
}
// bài tập 4 Số dương nhỏ nhất:
function soDuongNhoNhat(){
    var min = listNumber[0]
    var vitri = 0;
    for(i = 0; i< listNumber.length; i++){
        var snn = listNumber[i]
        if(min > snn && snn > 0 && min > 0){
            min = snn
            vitri = i
        }
    }
    var result = "Số dương nhỏ nhất là: " + min
    document.getElementById("infoSoNhoNhat").innerHTML = result;
}
// Bài tập 5: Số chẵn cuối cùng
function soChanCuoiCung(){
    var min = listNumber[0]
    var vitri = 0;
    var chancuoi = [];
    for(i = 0; i< listNumber.length; i++){
        var snn = listNumber[i]
        if(listNumber[i]% 2 === 0){
            min = snn
            vitri = i
        }
    }
    var result = "Số chẵn cuối cùng là: " + min
    document.getElementById("infoSoChanCuoiCung").innerHTML = result;
}

//Bài tập 6


// Bài tập 7 sắp xép tăng dần
function sapXepTang(){
    for(i= 0; i < listNumber.length -1 ; i++){
        for(j = i +1; j < listNumber.length; j++){
            if(listNumber[i]> listNumber[j]){
                var temp = listNumber[i]
                listNumber[i]= listNumber[j]
                listNumber[j]=temp
            }
        }
    }
    document.getElementById('infoSapXepTang').innerHTML = listNumber
}

// Bài tập 8

function timSoNguyenTo(){
    var songuyento = []
    for(i = 1; i < listNumber.length; i++){
        if(listNumber == 2){
            listNumber = songuyento
        }else if(listNumber % 2 !== 0 && listNumber / listNumber ==1){
            listNumber = songuyento
        }
        break
    }
    console.log(songuyento)
    var result = "Số nguyên tố đầu tiên là: " + songuyento
    document.getElementById('infoSoNguyenTo').innerHTML = result;
}


// Bài tập 9
function demSoNguyen(){
    if(listNumber.length === 0){
        alert("Vui lòng nhập số!")
        return;
    }
    var dem = 0;
    for (i = 0; i< listNumber.length; i ++){
        var sn = listNumber[i]
        if(sn > 0){
            dem++
        }
    }
    var result = "Có " + dem + " số nguyên"
    document.getElementById("infoDemSoNguyen").innerHTML = result
}
// Bài tập 10
function soSanh(){
    var soduong = 0;
    var soam = 0;
    for (i = 0; i< listNumber.length; i ++){
        var sn = listNumber[i]
        if(sn > 0){
            soduong++
        }else {
            soam++
        }
    }
    if(soduong > soam){
        document.getElementById('infoSoSanh').innerHTML = "Số Dương > Số Âm"
    }else {
        document.getElementById('infoSoSanh').innerHTML = "Số Dương < Số Âm"
    }
}
