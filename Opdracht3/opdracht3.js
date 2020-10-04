var age = "";
var name = "";
parseInt(age);
function question(name, age){
    while(name != "stop"){
        name = prompt("Wat is je naam?");
        age = prompt("Wat is je leeftijd?");
        document.write("Hallo " + name + " ,je leeftijd is " + age + "<br>")
    }
    
}
question(name, age)


