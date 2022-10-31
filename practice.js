var a = {
  fname: "ram",
  lname: "kumar",
  age: "20",
  email: "ram@.com"
}
document.getElementById("demo").innerHTML = a.fname + "<br>" + a.lname + "<br>" + a.age;

let x = 3.14;
let y = 3;
document.getElementById("number").innerHTML = x + "<br>" + y;


var num = Number(a);
document.write(num);

var a = [1, 2, 3, 4, 5];
document.getElementById("ary").innerHTML = a;


const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
document.getElementById("car").innerHTML = cars;


const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("bnana").innerHTML = fruits.join(" * ");

//document.getElementById("hello").innerHTML = "hellopretty";
console.log(hello);

let text = "The rain in SPAIN stays mainly in the plain";
console.log(text);


let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
document.getElementById("total").innerHTML = total;
//console.log(total);

var ary = [
  ["ran", "21", "male", "age"],
  ["ran", "21", "male", "age"],
  ["ran", "21", "male", "age"],
  ["ran", "21", "male", "age"]
];


{
  let x = 20;
  let y = 40;
  let z = x + y;
  document.getElementsById("siddhi").innerHTML = z;
}

var now = new Date();
document.write(now.toDateString());


const d = new Date();
d.setSeconds(30);
document.getElementById("day").innerHTML = d;


var a = math.ceil(5.2);
document.getElementById("cell").innerHTML = a;
document.write(a);
{
  document.getElementById("cell").innerHTML = Math.round(4.6);
}


if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}



switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
document.getElementById("sun").innerHTML = text;



const d = new Date();
document.getElementById("day").innerHTML = d;


