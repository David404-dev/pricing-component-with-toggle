const toggleBtn = document.querySelector(".toggle__fill");
const basicAnnualPrice = document.querySelector(".basic-price");
const basicMonthlyPrice = document.querySelector(".basic-monthly");
const basicAnnualSign = document.querySelector(".basic-annual-sign");

const proAnnualPrice = document.querySelector(".professional-price");
const proMonthlyPrice = document.querySelector(".professional-monthly");
const proAnnualSign = document.querySelector(".professional-annual-sign");

const masterAnnualPrice = document.querySelector(".master-price");
const masterMonthlyPrice = document.querySelector(".master-monthly");
const masterAnnualSign = document.querySelector(".master-annual-sign");

toggleBtn.addEventListener("click", () => {
  basicAnnualPrice.classList.toggle("display-none");
  basicMonthlyPrice.classList.toggle("display-block");
  basicAnnualSign.classList.toggle("basic-monthly-sign");

  proAnnualPrice.classList.toggle("display-none");
  proMonthlyPrice.classList.toggle("display-block");
  proAnnualSign.classList.toggle("pro-monthly-sign");

  masterAnnualPrice.classList.toggle("display-none");
  masterMonthlyPrice.classList.toggle("display-block");
  masterAnnualSign.classList.toggle("master-monthly-sign");
});
