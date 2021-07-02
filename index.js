// Clock
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let session = "AM";

function clock() {
  let h = new Date().getHours() + ":";
  let m = new Date().getMinutes() + ":";
  let s = new Date().getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
let interval = setInterval(clock, 1000);

// FORM

// name
document.querySelector("#username").addEventListener("change", (event) => {
  event.preventDefault;
  let name = document.querySelector("#username").value;
  document.querySelector("#header").innerHTML = "Salut " + name + "!";
});

// calculating age

document.querySelector("#age_date").addEventListener("change", () => {
  let userDate = document.querySelector("#age_date").value;
  console.log(userDate);

  let birthDate = new Date(userDate);
  let birthDateDay = birthDate.getDay();
  let birthDateMonth = birthDate.getMonth();
  let birthDateYear = birthDate.getFullYear();

  let todayDate = new Date();
  let todayDay = todayDate.getDay();
  let todayMonth = todayDate.getMonth() + 1;
  let todayYear = todayDate.getFullYear();
  console.log(todayDay);
  let calculateAge;

  if (todayMonth > birthDateMonth) {
    calculateAge = todayYear - birthDateYear;
  } else if (todayMonth == birthDateMonth) {
    if (todayDay >= birthDateDay) {
      calculateAge = todayYear - birthDateYear;
    } else {
      calculateAge = todayYear - birthDateYear - 1;
    }
  } else {
    calculateAge = todayYear - birthDateYear - 1;
  }

  let ageShow = document.querySelector("#ageShow");
  ageShow.innerHTML = "Varsta ta este de " + calculateAge + " ani";
});

// Redirection BTN

const redirectionWindow = document.querySelector("#myForm");

redirectionWindow.addEventListener("submit", (e) => {
  e.preventDefault();

  location.replace("redirection.html");
});
