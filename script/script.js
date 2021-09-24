document.addEventListener("DOMContentLoaded", greeting) 


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

  
  function greeting() {
    let p = prompt("Welcome,\n Please what's your name?");
    // console.log(p);
    let d = new Date().getHours();
    let greetME = document.getElementById("userName");
    if (p == null || p == "") {
      p = "Friend";
    } else {
      console.log(p);
      p1 = p[0].toUpperCase();
      p2 = p.slice(1).toLowerCase();
      p = p1+p2;
    }
    if (d < 12) {
      greetME.innerHTML = "Good Morning " + p + ",";
    } else if (d < 18) {
      greetME.innerHTML = "Good Afternoon " + p + ",";
    } else {
      greetME.innerHTML = "Good Evening " + p + "," ;
    }
    
    setInterval(timer, 1000);
  }

function timer() {
  let d = new Date();
  document.querySelectorAll(".time")[0].innerHTML =
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
  document.querySelectorAll(".time")[0].style.color = "var(--color-black)";
}

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'blue': // use rainy to represent blue, sunny to represent red and yellow, white and black to represent snow and overcast to represent purple
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      document.querySelector("darkMode"); //select all dark mode and change to blue mode
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}







// function myFunction() {
//   var day;
//   switch (new Date().getDay()) {
//     case 0:
//       day = "Super Sunday";
//       break;
//     case 1:
//       day = "Motivation Monday";
//       break;
//     case 2:
//       day = "Tasty Tuesday";
//       break;
//     case 3:
//       day = "Wonderful Wednesday";
//       break;
//     case 4:
//       day = "Thankful Thursday";
//       break;
//     case 5:
//       day = "Fun Filled Friday";
//       break;
//     case 6:
//       day = "Social Saturday";
//       break;
//   }
//   // document.getElementById("demo").innerHTML = "Today is " + day;
// }


// let myButton = document.getElementById('changeBtn');
// let myHeading = document.getElementById('userName');



// function setUserName() {
    // alert("hi");
    // let myName = prompt('Please enter your name.');
    // localStorage.setItem('name', myName);
    // myHeading.textContent = 'Mozilla is cool, ' + myName;
  // }

//   if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
//   }

  // myButton.onClick = function() {
  //   setUserName();
  // }

  // document.getElementById("hi").innerHTML = "hello";






