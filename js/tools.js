function toCelsius() {
    f = document.getElementById("fah").value;
    c = (5 / 9) * (f - 32);
    document.getElementById("cel").value = c.toFixed(2);
}
function toFah() {
    c = document.getElementById("cel").value;
    f = c / (5 / 9) + 32;
    document.getElementById("fah").value = f.toFixed(2);
}

function trimStr() {
    //去除空格的方法
    var str = document.getElementById("txt").value;
    var del_txt = document.getElementById("del_txt").value;
    var reg = new RegExp(del_txt, "g");
    var arr = "";
    var str2 = "";
    arr = str.split("\n");
    for (i in arr) {
        arr_i = arr[i].replace(reg, "").trim()
        if (arr_i == "") {
            continue;
        } else {
            str2 = str2 + arr_i + "\n"
        }
    }
    document.getElementById("txt2").value = str2;
}