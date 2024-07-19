console.log("Welcome to The Cookie Company");
console.log(document);

const cookieBtn = document.getElementById("cookieBtn");
const bakerBtn = document.getElementById("bakerBtn");
const bakerCount = document.getElementById("bakerCount");

let cookies = 0;
let cps = 1;
let bakers = 0;
let bps = 1;

bakerBtn.addEventListener("click", clickBaker);

// function to increase cookie per second (CPS)
function increaseCookies() {
  cookies += cps;
  cookieCount.textContent = cookies;
  localStorage.setItem("cntCookie", cookies);
}

setInterval(increaseCookies, 1000);

// function to increase cookies by one every click
function clickCookie() {
  cookies++;
  cookieCount.textContent = cookies;
}

cookieBtn.addEventListener("click", clickCookie);

// function to hire baker(s)
function hireBakers(cookiesBaked) {
  const requiredCookies = 100;

  if (cookies < requiredCookies) {
    console.log("The company will not hire bakers");
  } else {
    cookies -= requiredCookies;
    cps += 10;
    console.log("The company will hire bakers");
  }
}
bakerBtn.addEventListener("click", hireBakers);

setInterval(hireBakers, 3000);

function clickBaker() {
  bakers++;
  bakerCount.textContent = bakers;
}
