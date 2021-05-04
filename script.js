"use strict";
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const result_1 = document.querySelector(".result-1");
const again = document.querySelector(".btn-1");

button.addEventListener("click", function () {
  const Height = Number(document.querySelector(".height").value);
  const Weight = Number(document.querySelector(".weight").value);
  const heightInMeter = Height / 100;
  const weightInKg = Weight;
  const BMI = weightInKg / (heightInMeter * heightInMeter);
  if (BMI > 0) {
    result.textContent = Math.trunc(BMI);
    result.style.textAlign = "center";
    result_1.style.textAlign = "center";
  } else {
    result_1.textContent = "wrong inputs";
  }

  if (BMI < 18.5) {
    result_1.textContent = "you are underweight";
  } else if (BMI < 25) {
    result_1.textContent = "you have a normal weight ";
  } else if (BMI < 30) {
    result_1.textContent = "you are overweight";
  } else if (BMI > 30) {
    result_1.textContent = "you are obese";
  } else {
    result_1.textContent = "please check your height and weight";
  }
});

again.addEventListener("click", function () {
  document.querySelector(".height").value = "";
  document.querySelector(".weight").value = "";
  result.textContent = "";
  result_1.textContent = "";
});
