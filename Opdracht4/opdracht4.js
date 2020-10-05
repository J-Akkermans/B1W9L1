var num = prompt("Cijfer");
var num1 = parseInt(num);

function tafels(num1) {
    if (num1 <= 10) {
        for (var x = 1; x <= num1; x++) {
            for (var i = 1; i <= 10; i++) {
                document.write(num1 * i + " ")
            }
        }
    }
    else{
        alert("Je kan alleen tafels tot 10 laten zien..");
        location.reload();
    }
}


tafels(num1)