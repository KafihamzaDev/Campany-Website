// change navbar text color
const headerLi = document.querySelectorAll(".header .container nav ul li a");
const active = document.getElementsByClassName("active");

headerLi.forEach(function (ele) {
  ele.onclick = function () {
    // remove .active from all li
    headerLi.forEach(function (e) {
      e.classList.remove("active");
    });
    // add .active to li clicked
    this.classList.add("active");
    // change color
    active.style.color = "white";
  };
});

// add logic to bars and close icon
const menuIcon = document.querySelector(".header .container nav span#menu");
const closeIcon = document.querySelector(
  ".header .container nav ul li:first-child span"
);
const headerUl = document.querySelector(".header .container nav ul");

menuIcon.onclick = function () {
  headerUl.style.display = "flex";
  console.log("teyagf");
};
closeIcon.onclick = function () {
  headerUl.style.display = "none";
  console.log("teyagf");
};
