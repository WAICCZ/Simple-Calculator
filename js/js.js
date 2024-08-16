var RD = document.getElementsByClassName("RD");
var R = RD[0].getElementsByTagName("p")[0];
var D = RD[0].getElementsByTagName("p")[2];
RD[0].addEventListener("click", SWRD);
RadDeg = true;
var bc1 = document.getElementsByClassName("border_corner1");
var bc2 = document.getElementsByClassName("border_corner2");
var screen = document.getElementsByClassName("calculator-screen");
var calculator = document.getElementsByClassName("simple-calculator");
var Inv = document.getElementsByClassName("Inv");
var Invv = document.getElementsByClassName("Invv");
var op = document.getElementsByClassName("op");
var equal = document.getElementsByClassName("equal");
var power = document.getElementsByClassName("power");
var AC = document.getElementsByClassName("AC");
var CE = document.getElementsByClassName("CE");
var pi = document.getElementsByClassName("pi");
var Fac = document.getElementsByClassName("fac");
var his = document.getElementsByClassName("history");
var point = true;
var fnhist = false;
const operators2 = /[x÷+\-*\/%(^.]$/; // 正则表达式，用于匹配运算符
const operators1 = /[x÷+\-*\/%^)!.]$/; // 正则表达式，用于匹配运算符
const operand = /[1234567890]$/; // 正则表达式，用于匹配运算符
const dput = /[1234567890\/\-pe.]$/; // 正则表达式，用于匹配运算符
const islessmul1 = /[S)peD]$/; // 正则表达式，用于匹配运算符
const islessmul2 = /[fsctla√r]$/; // 正则表达式，用于匹配运算符
const islessmul3 = /[S(peD]$/; // 正则表达式，用于匹配运算符
var mode = 0;
var Rbracketcan = 0;
var ANS = 0;
var ANSlist = [0];
var formulalist = [""];
var reset = true;
var p = 3.14159265359;
var e = 2.71828182846;
equal[0].addEventListener("click", eq);
Inv[0].addEventListener("click", Invert);
power[0].addEventListener("click", Power);
AC[0].addEventListener("click", ac);
CE[0].addEventListener("click", ce);
pi[0].addEventListener("click", PI);
Fac[0].addEventListener("click", facadd);
his[0].addEventListener("click", HisT);
for (let i = 0; i < op.length; i++) {
  op[i].addEventListener("click", directput);
}
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    eq();
  }
  if (e.key == "Backspace") {
    ce();
  }
  if (dput.test(e.key[0])) {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = e.key;

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "+" || (e.shiftKey && e.key === "=")) {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "+";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "^" || (e.shiftKey && e.key === "^")) {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "^";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "%" || (e.shiftKey && e.key === "%")) {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "%";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "x" || (e.shiftKey && e.key === "x")) {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "x";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "r" || (e.shiftKey && e.key === "r")) {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "√";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "s") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    if (mode === 0) etext.textContent = "sin";
    else etext.textContent = "arcsin";
    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "c") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    if (mode === 0) etext.textContent = "cos";
    else etext.textContent = "arccos";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "t") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    if (mode === 0) etext.textContent = "tan";
    else etext.textContent = "arctan";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "A") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "ANS";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "R") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "RND";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "l") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "log";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "L") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "ln";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.key === "f") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "fac(";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.shiftKey && e.key === "(") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = "(";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
  if (e.shiftKey && e.key === ")") {
    // 創建一個假的元素來模擬事件觸發
    var etext = document.createElement("p");
    etext.textContent = ")";

    // 創建一個自定義事件
    var event = new CustomEvent("customEvent", {
      detail: { target: etext },
    });

    // 手動調用函數並傳遞事件物件
    directput(event.detail);
  }
});
document.addEventListener("click", function (event) {
  const rect = calculator[0].getBoundingClientRect();
  const isInDiv =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (isInDiv) {
    screen[0].style.boxShadow = "0px 0px 10px 1px rgb(196, 196, 196)";
  } else {
    screen[0].style.boxShadow = "0px 0px 10px 1px white";
  }
});
function Invert() {
  if (mode == 0) {
    Inv[0].style.backgroundColor = "white";
    Inv[0].style.color = "black";

    Invv[0].textContent = "arcsin";
    Invv[1].textContent = "arccos";
    Invv[2].textContent = "arctan";
    Invv[3].textContent = "RND";
    mode = 1;
  } else if (mode == 1) {
    Inv[0].style.backgroundColor = "transparent";
    Inv[0].style.color = "white";
    Invv[0].textContent = "sin";
    Invv[1].textContent = "cos";
    Invv[2].textContent = "tan";
    Invv[3].textContent = "ANS";
    mode = 0;
  }
}
function SWRD() {
  RadDeg = !RadDeg;
  if (window.getComputedStyle(bc1[0]).display == "block") {
    for (let i = 0; i < bc1.length; i++) {
      bc1[i].style.display = "none";
    }
    for (let i = 0; i < bc2.length; i++) {
      bc2[i].style.display = "block";
    }
    R.style.color = "white";
    D.style.color = "rgb(151, 151, 151)";
  } else {
    for (let i = 0; i < bc1.length; i++) {
      bc1[i].style.display = "block";
    }
    for (let i = 0; i < bc2.length; i++) {
      bc2[i].style.display = "none";
    }
    R.style.color = "rgb(151, 151, 151)";
    D.style.color = "white";
  }
}
function directput(e) {
  if (
    islessmul1.test(
      screen[0].getElementsByTagName("h1")[0].textContent[
        screen[0].getElementsByTagName("h1")[0].textContent.length - 1
      ]
    )
  ) {
    if (
      islessmul3.test(e.target.textContent[e.target.textContent.length - 1]) ||
      islessmul2.test(e.target.textContent[0]) ||
      operand.test(e.target.textContent[0])
    ) {
      screen[0].getElementsByTagName("h1")[0].textContent += "*";
    }
  } else if (
    operand.test(
      screen[0].getElementsByTagName("h1")[0].textContent[
        screen[0].getElementsByTagName("h1")[0].textContent.length - 1
      ]
    )
  ) {
    if (
      islessmul3.test(e.target.textContent[e.target.textContent.length - 1]) ||
      islessmul2.test(e.target.textContent[0])
    ) {
      screen[0].getElementsByTagName("h1")[0].textContent += "*";
    }
  }
  if (screen[0].getElementsByTagName("h1")[0].textContent.length < 35) {
    screen[0].getElementsByTagName("h1")[0].textContent += e.target.textContent;
    normalization(e.target.textContent);
  }
}
function normalization(text) {
  if (reset == true) {
    screen[0].getElementsByTagName("h1")[0].textContent = text;
    reset = false;
  }
  if (operators1.test(screen[0].getElementsByTagName("h1")[0].textContent[0])) {
    screen[0].getElementsByTagName("h1")[0].textContent = "0";
    reset = true;
  }
    if (
    operand.test(
      screen[0].getElementsByTagName("h1")[0].textContent[
        screen[0].getElementsByTagName("h1")[0].textContent.length - 1
      ]
    ) &&
    screen[0].getElementsByTagName("h1")[0].textContent[
      screen[0].getElementsByTagName("h1")[0].textContent.length - 2
    ] == "0"
  ) {
    screen[0].getElementsByTagName("h1")[0].textContent = screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        0,
        screen[0].getElementsByTagName("h1")[0].textContent.length - 1
      );
  }
  let h1element = screen[0].getElementsByTagName("h1")[0];
  let text1 = h1element.textContent;
  if (text1.length >= 2) {
    if (operators1.test(text1[text1.length - 1])) {
      if (operators2.test(text1[text1.length - 2])) {
        if (
          !(text1[text1.length - 1] == "-") ||
          !(text1[text1.length - 2] == "(")
        )
          h1element.textContent = text1.slice(0, text1.length - 1);
        return;
      }
    }
  }
  if (text1[text1.length - 1] == "x") {
    h1element.textContent = text1.slice(0, text1.length - 1) + "*";
  } else if (text1[text1.length - 1] == "÷") {
    h1element.textContent = text1.slice(0, text1.length - 1) + "/";
  } else if (
    text1[text1.length - 1] == "s" ||
    text1[text1.length - 1] == "n" ||
    text1[text1.length - 1] == "g"
  ) {
    h1element.textContent += "(";
    Rbracketcan++;
  } else if (text1[text1.length - 1] == "√") {
    h1element.textContent = text1.slice(0, text1.length - 1) + "root(";
    Rbracketcan++;
  } else if (text1.slice(text1.length - 3, text1.length) == "RND") {
    if (screen[0].getElementsByTagName("h1")[0].textContent.length < 26) {
      h1element.textContent =
        text1.slice(0, text1.length - 3) + String(Math.random()).slice(0, 10);
    } else {
      h1element.textContent = text1.slice(0, text1.length - 3);
    }
  } else if (text1[text1.length - 1] == ")") {
    if (Rbracketcan > 0) {
      Rbracketcan--;
    } else {
      h1element.textContent = text1.slice(0, text1.length - 1);
    }
  } else if (text1[text1.length - 1] == "(") {
    Rbracketcan++;
  } else if (text1[text1.length - 1] == "^") {
    h1element.textContent = text1.slice(0, text1.length - 1) + "**";
  } else if (text1[text1.length - 1] == ".") {
    if (!operand.test(text1[text1.length - 2]) || point == false) {
      h1element.textContent = text1.slice(0, text1.length - 1);
    } else {
      point = false;
    }
    return;
  }
  if (!operand.test(text1[text1.length - 1])) {
    point = true;
  }

  let text2 = h1element.textContent;
}
function eq() {
  if (Rbracketcan > 0) {
    return;
  }
  if (
    operators2.test(
      screen[0].getElementsByTagName("h1")[0].textContent[
        screen[0].getElementsByTagName("h1")[0].textContent.length - 1
      ]
    )
  ) {
    return;
  }
  let result = eval(screen[0].getElementsByTagName("h1")[0].textContent);

  formulalist.push(screen[0].getElementsByTagName("h1")[0].textContent);
  screen[0].getElementsByTagName("h1")[0].textContent = result; // 14
  ANS = result;
  ANSlist.push(result);
  screen[0].getElementsByTagName("h4")[0].textContent = "ANS = " + ANS;
  reset = true;
  var newElement = document.createElement("h3");
  newElement.textContent = formulalist[formulalist.length - 1] + " = " + ANS;
  document.getElementsByClassName("historyhint")[0].appendChild(newElement);
  if (
    document.getElementsByClassName("historyhint")[0].getElementsByTagName("h3")
      .length > 5
  ) {
    var parentElement = document.getElementsByClassName("historyhint")[0];
    var firstH3 = parentElement.getElementsByTagName("h3")[0];
    parentElement.removeChild(firstH3);
  }
}
function Power() {
  screen[0].getElementsByTagName("h1")[0].textContent += "^";
  normalization("^");
}
function ac() {
  screen[0].getElementsByTagName("h1")[0].textContent = "0";
  reset = true;
  Rbracketcan = 0;
}
function ce() {
  if (
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 3,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "ANS"
  ) {
    screen[0].getElementsByTagName("h1")[0].textContent = screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        0,
        screen[0].getElementsByTagName("h1")[0].textContent.length - 2
      );
  }

  if (
    screen[0].getElementsByTagName("h1")[0].textContent[
      screen[0].getElementsByTagName("h1")[0].textContent.length - 1
    ] == "("
  ) {
    Rbracketcan--;
  } else if (
    screen[0].getElementsByTagName("h1")[0].textContent[
      screen[0].getElementsByTagName("h1")[0].textContent.length - 1
    ] == ")"
  ) {
    Rbracketcan++;
  } else if (
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 2,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "**"
  ) {
    screen[0].getElementsByTagName("h1")[0].textContent = screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        0,
        screen[0].getElementsByTagName("h1")[0].textContent.length - 1
      );
  }
  screen[0].getElementsByTagName("h1")[0].textContent = screen[0]
    .getElementsByTagName("h1")[0]
    .textContent.slice(
      0,
      screen[0].getElementsByTagName("h1")[0].textContent.length - 1
    );

  if (
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 3,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "sin" ||
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 3,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "cos" ||
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 3,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "tan" ||
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 3,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "fac" ||
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 3,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "log"
  ) {
    screen[0].getElementsByTagName("h1")[0].textContent = screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        0,
        screen[0].getElementsByTagName("h1")[0].textContent.length - 3
      );
  }
  if (
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 3,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "arc"
  ) {
    screen[0].getElementsByTagName("h1")[0].textContent = screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        0,
        screen[0].getElementsByTagName("h1")[0].textContent.length - 3
      );
  }
  if (
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 2,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "ln"
  ) {
    screen[0].getElementsByTagName("h1")[0].textContent = screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        0,
        screen[0].getElementsByTagName("h1")[0].textContent.length - 2
      );
  }
  if (
    screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        screen[0].getElementsByTagName("h1")[0].textContent.length - 4,
        screen[0].getElementsByTagName("h1")[0].textContent.length
      ) == "root"
  ) {
    screen[0].getElementsByTagName("h1")[0].textContent = screen[0]
      .getElementsByTagName("h1")[0]
      .textContent.slice(
        0,
        screen[0].getElementsByTagName("h1")[0].textContent.length - 4
      );
  }

  if (screen[0].getElementsByTagName("h1")[0].textContent.length == 0) {
    screen[0].getElementsByTagName("h1")[0].textContent = "0";
    reset = true;
  }
}
function PI() {
  // 創建一個假的元素來模擬事件觸發
  var Pi = document.createElement("p");
  Pi.textContent = "p";

  // 創建一個自定義事件
  var event = new CustomEvent("customEvent", {
    detail: { target: Pi },
  });

  // 手動調用函數並傳遞事件物件
  directput(event.detail);
}
function facadd() {
  // 創建一個假的元素來模擬事件觸發
  var fac = document.createElement("p");
  fac.textContent = "fac(";

  // 創建一個自定義事件
  var event = new CustomEvent("customEvent", {
    detail: { target: fac },
  });

  // 手動調用函數並傳遞事件物件
  directput(event.detail);
}
function sin(x) {
  if (!RadDeg) x = (x / 180) * 3.14;
  return Math.sin(x);
}
function cos(x) {
  if (!RadDeg) x = (x / 180) * 3.14;
  return Math.cos(x);
}
function tan(x) {
  if (!RadDeg) x = (x / 180) * 3.14;
  return Math.tan(x);
}
function arcsin(x) {
  if (!RadDeg) return (Math.asin(x) / 3.14) * 180;
  else return Math.asin(x);
}
function arccos(x) {
  if (!RadDeg) return (Math.acos(x) / 3.14) * 180;
  else return Math.acos(x);
}
function arctan(x) {
  if (!RadDeg) return (Math.atan(x) / 3.14) * 180;
  else return Math.atan(x);
}
function ln(x) {
  return Math.log(x);
}
function log(x) {
  return Math.log10(x);
}
function root(x) {
  return Math.pow(x, 0.5);
}

function fac(n) {
  if (n < 0) {
    return "Input must be a non-negative number";
  }
  return gamma(n + 1);
}
function gamma(z) {
  // 使用斯特林公式近似伽馬函數
  const g = 7;
  const C = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];

  if (z < 0.5) {
    return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
  } else {
    z -= 1;
    let x = C[0];
    for (let i = 1; i < g + 2; i++) {
      x += C[i] / (z + i);
    }
    const t = z + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
  }
}
function HisT() {
  var dhis = document.getElementsByClassName("historyhint")[0];
  if (fnhist == false) {
    dhis.style.display = "block";
    fnhist = true;
  } else {
    dhis.style.display = "none";
    fnhist = false;
  }
}
