// console.log('--------------------');
// for (var year = 2014; year <= 2050; year++) {
//     var d = new Date(year, 0, 1);
//     if (d.getDay() === 0)
//         console.log("1st January is being a Sunday  " + year);
// }

// console.log('--------------------');
// console.log(as + b);


// for (let year = 2014; year <= 2050; yera++) {
//     date = new date(year + '01, 01');
//     if (date.getdate() === 0) {
//         document.write('<h3>{year}</h3>')
//     }
// }

// function multiplyBy() {
//     num1 = document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;
//     document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() {
//     num1 = document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;
//     document.getElementById("result").innerHTML = num1 / num2;
// }




var popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}


function closePopup() {
    popup.classList.remove("open-popup");
}