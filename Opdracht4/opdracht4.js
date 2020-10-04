var num = prompt("Cijfer");
var num1 = parseInt(num);

function tafels(num1){
    for(var i = 0; i < 11; i++){
        console.log(i)
        document.write(num1 * i + " ")
    }
}

tafels(num1)