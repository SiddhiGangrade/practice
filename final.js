// function ram(c) {
//     var a = 2;
//     var b = 3;
//     var c = a + b;


//     alert(c)
//     console.log(c);



//     document.write("hello");

//     const age = 19;
//     if (age == 19) {
//         document.write("age is 19")
//     }
//     else {
//         document.write("age is not 19")
//     }

// }

// ram()

function myFunction(p1, p2) {
    return p1 * p2;
}
document.getElementById("ram").innerHTML = myFunction(4, 3);


function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 
document.getElementById("demo").innerHTML =
"The temperature is " + toCelsius(77) + " Celsius";



function into(){
    var a = 2;
    var b = 2;
    const c = a+b;

    console.log(c)
}

// document.getElementById("into").innerHTML = into(c);