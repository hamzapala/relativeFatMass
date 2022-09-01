const waist = document.getElementById("waist");
const height = document.getElementById("height");
const result = document.getElementById("result");
const sex = document.getElementById("sex");
const waistSelect = document.getElementById("waistSelect");
const heightSelect = document.getElementById("heightSelect");

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






function sexChange() {
  if(sex.value == "male") {
    return calculateFunc();
  } else{
    return calculateFunc() + 12;
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

waistSelect.onchange = function () {
  waistSelectFunc();
};

heightSelect.onchange = function () {
  heightSelectFunc();
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
  } else {
    result.innerText = sexChange().toFixed(2);
  }
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
  } else {
    result.innerText = sexChange().toFixed(2);
  }
};
