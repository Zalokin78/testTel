"use strict";

/* let limiterActive = false;

let val = document.getElementById("limit").value;

const limiter = function (input) {
  console.log(input.value); */

/* if (limiterActive == true) {
    input.value = val;
    limiterActive = false;
  } else {
    val = input.value;
    limiterActive = false;
  }

  if (input.value > 5) {
    console.log("limiter active");
    limiterActive = true;
  } */
/*  if (input.value > 59) {
    input.value = "00";
  }
}; */
/* let testValue = false;

const keyup = function (event) {
  testValue = event.target.value;
  console.log(`testValue keyup - ${testValue}`);
 */
/* console.log(`keyup value ${event.target.value}`);
  console.log(`keyup length ${event.target.value.length}`); */
/* }; */

/* const keydown = function (event) {
  keyup(event); */
/* console.log(`keydown value ${event.target.value}`);
  console.log(`keydown length ${event.target.value.length}`); */
/* console.log(`testValue keydown - ${testValue}`);
}; */
let fieldVal;

/* const keydown = (e) => {
  const { value, maxLength } = e.target;
  if (String(value).length >= maxLength) {
    e.preventDefault();
    return;
  }
}; */

const keydown = function (val) {
  console.log(val.value);
  console.log(`which - ${val.which}`);
  console.log(`fieldVal keydown- ${fieldVal}`);
  console.log(`key down length ${val.target.value.length}`);

  /* if (val.target.value.length > 1) {
    val.target.value = val.target.value.slice(0, 1);
  } */
  /* if (fieldVal > 2) {
    return false;
  } else {
    return true;
  } */
  /* if (val.target.value.length > 1 && val.which !== 46) {
    return false;
  } else {
    return true;
  } */

  /* if (val.target.value.length < 2 || val.which == 46 || val.which == 8) {
    return true;
  } else {
    return false;
  }
}; */
  /* const input = function (val) {
  fieldVal = val.target.value.length;
  console.log(`fieldVal input - ${fieldVal}`);
  console.log(val.target.value);
  console.log(val.which); */
  /* if (fieldVal > 2) {
    alert("LIMIT!");
  } */
  /* if (fieldVal > 2) {
    val.preventDefault();
  } */
};

const keyup = function () {};
const input = function () {};
