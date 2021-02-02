// document.write("<h1>Hello Mundo</h1>");

var nameuser = "Jhon";
let lastname = "carter";

console.log(nameuser);

console.log(lastname);

document.write(nameuser,' ',lastname);


var numberone = 60;
var numbertwo = 100;

var resultado = numberone > numbertwo;

console.log(resultado);

var password = "Jhon";

var resultado_face = password == nameuser

if(resultado_face == true)
{
    console.log("Login correcto");
}
else
// if(resultado_face === false)
{
    console.log("Login incorrecto");
}

var typecard = "Credit Card";

// como usar if pero en un case when
switch (typecard) {
    case "Debid Card" :
        console.log("Tarjeta de Debito");        
        break;

    case "Credito Card":
    console.log("Tarjeta de Credito");
        break;

        default:
        console.log("No tienes tarjeta ");
}


// bucles
var count = 50;

while (count > 0) 
{
     console.log(count);
     count = count - 1 
}





