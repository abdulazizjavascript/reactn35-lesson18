// Show text on focus
const link1 = document.querySelector(".col2__header .link1");
const text1 = document.querySelector(".donation__middle--col2 .text1");

const link2 = document.querySelector(".col2__header .link2");
const text2 = document.querySelector(".donation__middle--col2 .text2");

const link3 = document.querySelector(".col2__header .link3");
const text3 = document.querySelector(".donation__middle--col2 .text3");

const link4 = document.querySelector(".col2__header .link4");
const text4 = document.querySelector(".donation__middle--col2 .text4");

link1.addEventListener("focus", () => {
  text1.style.display = "block";
});

link1.addEventListener("blur", () => {
  text1.style.display = "none";
});

link2.addEventListener("focus", () => {
  text2.style.display = "block";
});

link2.addEventListener("blur", () => {
  text2.style.display = "none";
});

link3.addEventListener("focus", () => {
  text3.style.display = "block";
});

link3.addEventListener("blur", () => {
  text3.style.display = "none";
});

link4.addEventListener("focus", () => {
  text4.style.display = "block";
});

link4.addEventListener("blur", () => {
  text4.style.display = "none";
});
