let fullheight = window.innerHeight;
// console.log(fullheight)
let ball = document.getElementById("ball");
let home = document.getElementById("home");
let toTopBtn = document.getElementById("to-top-btn");
window.addEventListener("scroll", () => {
  if (home.getBoundingClientRect().top <= -300) {
    toTopBtn.style.opacity = "1";
  } else {
    toTopBtn.style.opacity = "0";
  }
});
// const mainfunction = () => {
//   console.log("main");
// };
window.addEventListener("scroll", () => {
  // console.log(home.getBoundingClientRect().bottom  )

  // console.log(ball.getBoundingClientRect().top - window.innerHeight)
  if (ball.getBoundingClientRect().top - window.innerHeight <= -130) {
    // console.log(window.scrollY)
    // ball.style.top +='100'*.39*window.scrollY+'px';
    let scrooled = window.pageYOffset;
    let rateX = scrooled * 0.4;
    let rateY = scrooled * 0.3;

    ball.style.transform =
      "translateX(-" + rateX + "px) translateY(+" + rateY + "px)";
  }
});

// Menu BTN
let anchorlinks = document.querySelectorAll(".linkers-m");

let closeBTN = document.getElementById("closer");
let menu = document.getElementById("menu-btn");
let menuStatus = document.getElementById("menu-page");
menu.addEventListener("click", () => {
  menuStatus.style.right = "0";
});
closeBTN.addEventListener("click", () => {
  menuStatus.style.right = "100%";
});

function closerall() {
  menuStatus.style.right = "100%";
}
