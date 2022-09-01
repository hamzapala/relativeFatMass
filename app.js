const waist = document.getElementById("waist");
const height = document.getElementById("height");
const result = document.getElementById("result");
const hResult = document.getElementById("hResult");
const wResult = document.getElementById("wResult");
const sex = document.getElementById("sex");
const waistSelect = document.getElementById("waistSelect");
const heightSelect = document.getElementById("heightSelect");
const table = document.getElementById("table");
const child1 = document.getElementById("child1");
const child2 = document.getElementById("child2");
const child3 = document.getElementById("child3");
const child4 = document.getElementById("child4");
const child5 = document.getElementById("child5");
const child6 = document.getElementById("child6");

let preValHeight = "cm";
let preValWaist = "cm";


function heightSelectFunc() {

  if (heightSelect.value == "cm") {
    if (preValHeight == "m") {
      height.value = height.value * 100;
    } else if (preValHeight == "in") {
      height.value = height.value * 2.54;
    } else if (preValHeight == "ft") {
      height.value = height.value * 30.48;
    } 
    preValHeight = "cm";
  } else if (heightSelect.value == "m") {
    if (preValHeight == "cm") {
      height.value = height.value / 100;
    } else if (preValHeight == "in") {
      height.value = height.value * 0.254;
    } else if (preValHeight == "ft") {
      height.value = height.value * 0.3048;
    } 
    preValHeight = "m";
  } else if (heightSelect.value == "in") {
    if (preValHeight == "cm") {
      height.value = height.value * 0.393701;
    } else if (preValHeight == "m") {
      height.value = height.value * 39.3701;
    } else if (preValHeight == "ft") {
      height.value = height.value * 12;
    }
    preValHeight = "in";
  } else if (heightSelect.value == "ft") {
    if (preValHeight == "cm") {
      height.value = height.value * 0.0328084;
    } else if (preValHeight == "m") {
      height.value = height.value * 3.28084;
    } else if (preValHeight == "in") {
      height.value = height.value * 0.0833333;
    }
    preValHeight = "ft";
  } 
}
function waistSelectFunc() {

  if (waistSelect.value == "cm") {
    if (preValWaist == "in") {
      waist.value = waist.value * 2.54;
    } 
    preValWaist = "cm";
  } else if (waistSelect.value == "in") {
    if (preValWaist == "cm") {
      waist.value = waist.value / 2.54; 
    preValWaist = "in";
  } 
}
}

function calculateFunc() {
  if (waistSelect.value == "cm") {
    if (heightSelect.value == "cm") {
      return 64 - (20 * height.value / waist.value);
    } else if (heightSelect.value == "m") {
      return 64 - ((20 * height.value * 100) / waist.value);
    } else if (heightSelect.value == "in") {
      return 64 - ((20 * height.value * 2.54) / waist.value);
    } else if (heightSelect.value == "ft") {
      return 64 - ((20 * height.value * 30.48) / waist.value);
    }
  } else if (waistSelect.value == "m") {
    if (heightSelect.value == "cm") {
      return 64 - ((20 * height.value) / (waist.value * 100));
    } else if (heightSelect.value == "m") {
      return 64 - (20 * height.value / waist.value);
    } else if (heightSelect.value == "in") {
      return 64 - ((20 * height.value * 2.54) / (waist.value * 100));
    } else if (heightSelect.value == "ft") {
      return 64 - ((20 * height.value * 30.48) / (waist.value * 100));
    }
  } else if (waistSelect.value == "in") {
    if (heightSelect.value == "cm") {
      return 64 - ((20 * height.value) / (waist.value * 2.54));
    } else if (heightSelect.value == "m") {
      return 64 - (20 * height.value * 100) / (waist.value * 2.54);
    } else if (heightSelect.value == "in") {
      return 64 - (20 * height.value / waist.value);
    } else if (heightSelect.value == "ft") {
      return 64 - (20 * height.value * 30.48) / (waist.value * 2.54);
    }
  } else if (waistSelect.value == "ft") {
    if (heightSelect.value == "cm") {
      return 64 - (20 * height.value) / (waist.value * 30.48);
    } else if (heightSelect.value == "m") {
      return 64 - (20 * height.value * 100) / (waist.value * 30.48);
    } else if (heightSelect.value == "in") {
      return 64 - (20 * height.value * 2.54) / (waist.value * 30.48);
    } else if (heightSelect.value == "ft") {
      return 64 - (20 * height.value / waist.value);
    }
  }
}

function sexChange() {
  if (
    result.innerText !== "" &&
    result.innerText !== "please enter a value upper than zero or valid number"
  ) {
    if (sex.value == "male") {
      result.innerText = `${calculateFunc().toFixed(2)} %`;
    } else {
      result.innerText = `${(
        parseFloat(calculateFunc().toFixed(2)) + 12
      ).toFixed(2)} %`;
    }
  }
}

function controlFuncMaleForHeight() {
  if (
        waist.value == 0 ||
        waist.value == "" ||
        waist.value.startsWith("-") ||
        height.value == 0 ||
        height.value == "" ||
        height.value.startsWith("-")
      ) {
        hResult.innerText = "";
        result.innerText =
          "please enter a value upper than zero or valid number";
      } else{
       hResult.innerText = "";
       result.innerText = `${calculateFunc().toFixed(2)} %`;}
     }
function controlFuncMaleForWaist() {
  if (
        waist.value == 0 ||
        waist.value == "" ||
        waist.value.startsWith("-") ||
        height.value == 0 ||
        height.value == "" ||
        height.value.startsWith("-")
      ) {
        wResult.innerText = "";
        result.innerText =
          "please enter a value upper than zero or valid number";
      } else{
       wResult.innerText = "";
       result.innerText = `${calculateFunc().toFixed(2)} %`;}
     }

function controlFuncFemaleForHeight(){
  if (
    waist.value == 0 ||
    waist.value == "" ||
    waist.value.startsWith("-") ||
    height.value == 0 ||
    height.value == "" ||
    height.value.startsWith("-")
  ) {
    hResult.innerText = "";
    result.innerText = "please enter a value upper than zero or valid number";
  } else {
    hResult.innerText = "";
    result.innerText = `${(parseFloat(calculateFunc().toFixed(2)) + 12).toFixed(2)} %`;
  }
}

function controlFuncFemaleForWaist(){
  if (
    waist.value == 0 ||
    waist.value == "" ||
    waist.value.startsWith("-") ||
    height.value == 0 ||
    height.value == "" ||
    height.value.startsWith("-")
  ) {
    wResult.innerText = "";
    result.innerText = "please enter a value upper than zero or valid number";
  } else {
    wResult.innerText = "";
    result.innerText = `${(parseFloat(calculateFunc().toFixed(2)) + 12).toFixed(2)} %`;
  }
}

function resultFunc(){
  if (
    result.innerText == "please enter a value upper than zero or valid number" || result.innerText == ""
  ) {
    table.classList = "hide";
  }
  if (parseFloat(result.innerText) < 2) {
    table.classList = "show";
    child1.classList.add("background");
    child2.classList.remove("background");
    child3.classList.remove("background");
    child4.classList.remove("background");
    child5.classList.remove("background");
    child6.classList.remove("background");
  } else if (
    parseFloat(result.innerText) >= 2 &&
    parseFloat(result.innerText) < 6
  ) {
    table.classList = "show";
    child1.classList.remove("background");
    child2.classList.add("background");
    child3.classList.remove("background");
    child4.classList.remove("background");
    child5.classList.remove("background");
    child6.classList.remove("background");
  } else if (
    parseFloat(result.innerText) >= 6 &&
    parseFloat(result.innerText) < 14
  ) {
    table.classList = "show";
    child1.classList.remove("background");
    child2.classList.remove("background");
    child3.classList.add("background");
    child4.classList.remove("background");
    child5.classList.remove("background");
    child6.classList.remove("background");
  } else if (
    parseFloat(result.innerText) >= 14 &&
    parseFloat(result.innerText) < 18
  ) {
    table.classList = "show";
    child1.classList.remove("background");
    child2.classList.remove("background");
    child3.classList.remove("background");
    child4.classList.add("background");
    child5.classList.remove("background");
    child6.classList.remove("background");
  } else if (
    parseFloat(result.innerText) >= 18 &&
    parseFloat(result.innerText) < 25
  ) {
    table.classList = "show";
    child1.classList.remove("background");
    child2.classList.remove("background");
    child3.classList.remove("background");
    child4.classList.remove("background");
    child5.classList.add("background");
    child6.classList.remove("background");
  } else if (
    parseFloat(result.innerText) >= 25 
  ) {
    table.classList = "show";
    child1.classList.remove("background");
    child2.classList.remove("background");
    child3.classList.remove("background");
    child4.classList.remove("background");
    child5.classList.remove("background");
    child6.classList.add("background");
  }
}



waistSelect.onchange = function () {
  waistSelectFunc();
};
heightSelect.onchange = function () {
  heightSelectFunc();
};
sex.onchange = function () {
  sexChange();
  resultFunc();
};

height.addEventListener("keyup", function () {
  if (
    waist.value == 0 ||
    waist.value == "" ||
    waist.value.startsWith("-") ||
    height.value == 0 ||
    height.value == "" ||
    height.value.startsWith("-")
  ) {
    result.innerText = "please enter a value upper than zero or valid number";
  }
   if (heightSelect.value == "cm") {
     if (parseFloat(height.value) < 81) {
        result.innerText = "";
        hResult.innerText = "Please, enter the correct hight.";
     } else if (parseFloat(height.value) > 271) {
       result.innerText = "";
        hResult.innerText = "Are you sure about this height?";
     } else if (sex.value == "male" && wResult.innerText == "" ) {
        hResult.innerText = "";
        controlFuncMaleForHeight();
     } else if (sex.value == "female" && wResult.innerText == "") {
        hResult.innerText = ""; 
        controlFuncFemaleForHeight();
     }
   } else if (heightSelect.value == "m") {
     if (parseFloat(height.value) < 0.81) {
        result.innerText = "";
        hResult.innerText = "Please, enter the correct hight.";
     } else if (parseFloat(height.value) > 2.71) {
       result.innerText = "";
       hResult.innerText = "Are you sure about this height?";
      } else if (sex.value == "male" && wResult.innerText == "") {
        hResult.innerText = "";
        controlFuncMaleForHeight();
      } else if (sex.value == "female" && wResult.innerText == "") {
        hResult.innerText = "";
        controlFuncFemaleForHeight();
      }
    } else if (heightSelect.value == "in") {
      if (parseFloat(height.value) < 31.497) {
        result.innerText = "";
        hResult.innerText = "Please, enter the correct hight.";
      } else if (parseFloat(height.value) > 107.086) {
        result.innerText = "";
        hResult.innerText = "Are you sure about this height?";
      } else if ((sex.value == "male") && (wResult.innerText == "")) {
        hResult.innerText = "";
        controlFuncMaleForHeight();
      } else if (sex.value == "female" && (wResult.innerText == "")) {
        hResult.innerText = "";
        controlFuncFemaleForHeight();
      }
    } else if (heightSelect.value == "ft") {
      if (parseFloat(height.value) < 2.6248) {
        result.innerText = "";
        hResult.innerText = "Please, enter the correct hight.";
      } else if (parseFloat(height.value) > 8.924) {
        result.innerText = "";
        hResult.innerText = "Are you sure about this height?";
      } else if (sex.value == "male" && wResult.innerText == "") {
        hResult.innerText = "";
        controlFuncMaleForHeight();
      } else if (sex.value == "female" && wResult.innerText == "") {
        hResult.innerText = "";
        controlFuncFemaleForHeight();
      }
    } 
    resultFunc();
  });
  
  waist.onkeyup = function () {
    if (
      waist.value == 0 ||
    waist.value == "" ||
    waist.value.startsWith("-") ||
    height.value == 0 ||
    height.value == "" ||
    height.value.startsWith("-")
  ) {
    result.innerText = "please enter a value upper than zero or valid number";
  }   if (waistSelect.value == "cm") {
        if (parseFloat(waist.value) < 41) {
          result.innerText = "";
          wResult.innerText = "Please, enter the correct waist measurement.";
        } else if (sex.value == "male" && hResult.innerText == "") {
          wResult.innerText = "";
          controlFuncMaleForWaist();
        } else if (sex.value == "female" && hResult.innerText == "") {
          wResult.innerText = "";
          controlFuncFemaleForWaist();
        }
      } else if (waistSelect.value == "in") {
        if (parseFloat(waist.value) < 15.76) {
          result.innerText = "";
          wResult.innerText = "Please, enter the correct waist measurement.";
      } else if (sex.value == "male" && hResult.innerText == "") {
        wResult.innerText = "";
        controlFuncMaleForWaist();
      } else if (sex.value == "female" && hResult.innerText == "") {
        wResult.innerText = "";
        controlFuncFemaleForWaist();
      }  
    }
    resultFunc();
  };
    