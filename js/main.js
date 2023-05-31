let haveUl = document.querySelectorAll("header > ul > li > .have-ul");
let uls = document.querySelectorAll("header > ul > li > ul");

haveUl.forEach(ele => {
  ele.addEventListener("click", e => {
    e.target.parentElement.classList.toggle("active");
  })
})

document.querySelector("header .menu-shape").onclick = () => {
  document.querySelector(".overlay").style.display = "block";
  setTimeout(() => {
    document.querySelector(".overlay").classList.add("active");
  }, 1_00)
  document.querySelector(".megamenu").classList.add("active");
};

document.querySelector(".megamenu .shape img").onclick = () => {
  document.querySelector(".megamenu").classList.remove("active");
  document.querySelector(".overlay").classList.remove("active");
  setTimeout(() => {
    document.querySelector(".overlay").style.display = "none";
  }, 510)
}

document.querySelectorAll(".megamenu > ul > li > a")[0].onclick = function () {
  document.querySelectorAll(".megamenu > ul > li > ul")[0].classList.toggle("active");
  document.querySelectorAll(".megamenu > ul > li > a")[0].classList.toggle("active");
}

document.querySelectorAll(".megamenu > ul > li > a")[1].onclick = function () {
  document.querySelectorAll(".megamenu > ul > li > ul")[1].classList.toggle("active");
  document.querySelectorAll(".megamenu > ul > li > a")[1].classList.toggle("active");
}