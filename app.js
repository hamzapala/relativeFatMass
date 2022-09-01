const waist = document.getElementById("waist");
const height = document.getElementById("height");
const result = document.getElementById("result");
const waistSelect = document.getElementById("waistSelect");
const heightSelect = document.getElementById("heightSelect");

let preValHeight = "mm";
let preValWaist = "mm";

function waistSelectFunc() {
  if (waistSelect.value == "mm") {
    if (preValWaist == "cm") {
      waist.value = waist.value * 10;
    } else if (preValWaist == "m") {
      waist.value = waist.value * 1000;
    } else if (preValWaist == "in") {
      waist.value = waist.value * 25.4;
    } else if (preValWaist == "ft") {
      waist.value = waist.value * 304.8;
    } else if (preValWaist == "yd") {
      waist.value = waist.value * 914.4;
    }
    preValWaist = "mm";
  } else if (waistSelect.value == "cm") {
    if (preValWaist == "mm") {
      waist.value = waist.value * 0.1;
    } else if (preValWaist == "m") {
      waist.value = waist.value * 100;
    } else if (preValWaist == "in") {
      waist.value = waist.value * 2.54;
    } else if (preValWaist == "ft") {
      waist.value = waist.value * 30.48;
    } else if (preValWaist == "yd") {
      waist.value = waist.value * 91.44;
    }
    preValWaist = "cm";
  } else if (waistSelect.value == "m") {
    if (preValWaist == "mm") {
      waist.value = waist.value / 1000;
    } else if (preValWaist == "cm") {
      waist.value = waist.value / 100;
    } else if (preValWaist == "in") {
      waist.value = waist.value * 0.254;
    } else if (preValWaist == "ft") {
      waist.value = waist.value * 0.3048;
    } else if (preValWaist == "yd") {
      waist.value = waist.value * 0.9144;
    }
    preValWaist = "m";
  } else if (waistSelect.value == "in") {
    if (preValWaist == "mm") {
      waist.value = waist.value * 0.0393701;
    } else if (preValWaist == "cm") {
      waist.value = waist.value * 0.393701;
    } else if (preValWaist == "m") {
      waist.value = waist.value * 39.3701;
    } else if (preValWaist == "ft") {
      waist.value = waist.value * 12;
    } else if (preValWaist == "yd") {
      waist.value = waist.value * 36;
    }
    preValWaist = "in";
  } else if (waistSelect.value == "ft") {
    if (preValWaist == "mm") {
      waist.value = waist.value * 0.00328084;
    } else if (preValWaist == "cm") {
      waist.value = waist.value * 0.0328084;
    } else if (preValWaist == "m") {
      waist.value = waist.value * 3.28084;
    } else if (preValWaist == "in") {
      waist.value = waist.value * 0.0833333;
    } else if (preValWaist == "yd") {
      waist.value = waist.value * 3;
    }
    preValWaist = "ft";
  } else if (waistSelect.value == "yd") {
    if (preValWaist == "mm") {
      waist.value = waist.value * 0.00109361;
    } else if (preValWaist == "cm") {
      waist.value = waist.value * 0.0109361;
    } else if (preValWaist == "m") {
      waist.value = waist.value * 1.09361;
    } else if (preValWaist == "in") {
      waist.value = waist.value * 0.0277778;
    } else if (preValWaist == "ft") {
      waist.value = waist.value * 0.333333;
    }
    preValWaist = "yd";
  }
}

function heightSelectFunc() {
  if (heightSelect.value == "mm") {
    if (preValHeight == "cm") {
      height.value = height.value * 10;
    } else if (preValHeight == "m") {
      height.value = height.value * 1000;
    } else if (preValHeight == "in") {
      height.value = height.value * 25.4;
    } else if (preValHeight == "ft") {
      height.value = height.value * 304.8;
    } else if (preValHeight == "yd") {
      height.value = height.value * 914.4;
    }
    preValHeight = "mm";
  } else if (heightSelect.value == "cm") {
    if (preValHeight == "mm") {
      height.value = height.value * 0.1;
    } else if (preValHeight == "m") {
      height.value = height.value * 100;
    } else if (preValHeight == "in") {
      height.value = height.value * 2.54;
    } else if (preValHeight == "ft") {
      height.value = height.value * 30.48;
    } else if (preValHeight == "yd") {
      height.value = height.value * 91.44;
    }
    preValHeight = "cm";
  } else if (heightSelect.value == "m") {
    if (preValHeight == "mm") {
      height.value = height.value / 1000;
    } else if (preValHeight == "cm") {
      height.value = height.value / 100;
    } else if (preValHeight == "in") {
      height.value = height.value * 0.254;
    } else if (preValHeight == "ft") {
      height.value = height.value * 0.3048;
    } else if (preValHeight == "yd") {
      height.value = height.value * 0.9144;
    }
    preValHeight = "m";
  } else if (heightSelect.value == "in") {
    if (preValHeight == "mm") {
      height.value = height.value * 0.0393701;
    } else if (preValHeight == "cm") {
      height.value = height.value * 0.393701;
    } else if (preValHeight == "m") {
      height.value = height.value * 39.3701;
    } else if (preValHeight == "ft") {
      height.value = height.value * 12;
    } else if (preValHeight == "yd") {
      height.value = height.value * 36;
    }
    preValHeight = "in";
  } else if (heightSelect.value == "ft") {
    if (preValHeight == "mm") {
      height.value = height.value * 0.00328084;
    } else if (preValHeight == "cm") {
      height.value = height.value * 0.0328084;
    } else if (preValHeight == "m") {
      height.value = height.value * 3.28084;
    } else if (preValHeight == "in") {
      height.value = height.value * 0.0833333;
    } else if (preValHeight == "yd") {
      height.value = height.value * 3;
    }
    preValHeight = "ft";
  } else if (heightSelect.value == "yd") {
    if (preValHeight == "mm") {
      height.value = height.value * 0.00109361;
    } else if (preValHeight == "cm") {
      height.value = height.value * 0.0109361;
    } else if (preValHeight == "m") {
      height.value = height.value * 1.09361;
    } else if (preValHeight == "in") {
      height.value = height.value * 0.0277778;
    } else if (preValHeight == "ft") {
      height.value = height.value * 0.333333;
    }
    preValHeight = "yd";
  }
}

function calculateFunc() {
  if (waistSelect.value == "mm") {
    if (heightSelect.value == "mm") {
      return waist.value / height.value;
    } else if (heightSelect.value == "cm") {
      return waist.value / (height.value * 10);
    } else if (heightSelect.value == "m") {
      return waist.value / (height.value * 1000);
    } else if (heightSelect.value == "in") {
      return waist.value / (height.value * 25.4);
    } else if (heightSelect.value == "ft") {
      return waist.value / (height.value * 304.8);
    } else if (heightSelect.value == "yd") {
      return waist.value / (height.value * 914.4);
    }
  }
  if (waistSelect.value == "cm") {
    if (heightSelect.value == "mm") {
      return (waist.value * 10) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 10) / (height.value * 10);
    } else if (heightSelect.value == "m") {
      return (waist.value * 10) / (height.value * 1000);
    } else if (heightSelect.value == "in") {
      return (waist.value * 10) / (height.value * 25.4);
    } else if (heightSelect.value == "ft") {
      return (waist.value * 10) / (height.value * 304.8);
    } else if (heightSelect.value == "yd") {
      return (waist.value * 10) / (height.value * 914.4);
    }
  }
  if (waistSelect.value == "m") {
    if (heightSelect.value == "mm") {
      return (waist.value * 1000) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 1000) / (height.value * 10);
    } else if (heightSelect.value == "m") {
      return (waist.value * 1000) / (height.value * 1000);
    } else if (heightSelect.value == "in") {
      return (waist.value * 1000) / (height.value * 25.4);
    } else if (heightSelect.value == "ft") {
      return (waist.value * 1000) / (height.value * 304.8);
    } else if (heightSelect.value == "yd") {
      return (waist.value * 1000) / (height.value * 914.4);
    }
  }
  if (waistSelect.value == "in") {
    if (heightSelect.value == "mm") {
      return (waist.value * 25.4) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 25.4) / (height.value * 10);
    } else if (heightSelect.value == "m") {
      return (waist.value * 25.4) / (height.value * 1000);
    } else if (heightSelect.value == "in") {
      return (waist.value * 25.4) / (height.value * 25.4);
    } else if (heightSelect.value == "ft") {
      return (waist.value * 25.4) / (height.value * 304.8);
    } else if (heightSelect.value == "yd") {
      return (waist.value * 25.4) / (height.value * 914.4);
    }
  }
  if (waistSelect.value == "ft") {
    if (heightSelect.value == "mm") {
      return (waist.value * 304.8) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 304.8) / (height.value * 10);
    } else if (heightSelect.value == "m") {
      return (waist.value * 304.8) / (height.value * 1000);
    } else if (heightSelect.value == "in") {
      return (waist.value * 304.8) / (height.value * 25.4);
    } else if (heightSelect.value == "ft") {
      return (waist.value * 304.8) / (height.value * 304.8);
    } else if (heightSelect.value == "yd") {
      return (waist.value * 304.8) / (height.value * 914.4);
    }
  }
  if (waistSelect.value == "yd") {
    if (heightSelect.value == "mm") {
      return (waist.value * 914.4) / height.value;
    } else if (heightSelect.value == "cm") {
      return (waist.value * 914.4) / (height.value * 10);
    } else if (heightSelect.value == "m") {
      return (waist.value * 914.4) / (height.value * 1000);
    } else if (heightSelect.value == "in") {
      return (waist.value * 914.4) / (height.value * 25.4);
    } else if (heightSelect.value == "ft") {
      return (waist.value * 914.4) / (height.value * 304.8);
    } else if (heightSelect.value == "yd") {
      return (waist.value * 914.4) / (height.value * 914.4);
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
    result.innerText = calculateFunc().toFixed(2);
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
    result.innerText = calculateFunc().toFixed(2);
  }
};
