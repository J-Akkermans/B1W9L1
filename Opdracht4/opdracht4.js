var num = prompt("Cijfer");
var num1 = parseInt(num);

function tafels(num1) {
    if (num1 <= 10) {
        var num2 = 1;
        for(x=1; x <=num; x++){
            for (var i = 1; i <= 10; i++) {
                 document.write(num2 * i + " ")
            }
        num2++
        document.write("<br>");
        }
    }
    else{
        alert("Je kan alleen tafels tot 10 laten zien..");
        location.reload();
    }
}





tafels(num1)