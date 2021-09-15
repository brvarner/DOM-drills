let colors = [
  "lightPink",
  "lightSkyBlue",
  "maroon",
  "mediumAquaMarine",
  "mediumSlateBlue",
  "orangeRed",
  "peru",
  "peachPuff",
];

let textAppear = function () {
  let hc = document.createElement("div");
  hc.className = "header-container";

  let h1 = document.createElement("h1");
  let h1Text = document.createTextNode("This is an h1");
  h1.className = "h1";
  h1.id = "h1";
  h1.appendChild(h1Text);

  hc.appendChild(h1);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("This is an h2");
  h2.className = "h2";
  h2.id = "h2";
  h2.appendChild(h2Text);

  hc.appendChild(h2);

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode("This is an h3");
  h3.className = "h3";
  h3.id = "h3";
  h3.appendChild(h3Text);

  hc.appendChild(h3);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode("This is an h4");
  h4.className = "h4";
  h4.id = "h4";
  h4.appendChild(h4Text);

  hc.appendChild(h4);

  let h5 = document.createElement("h5");
  let h5Text = document.createTextNode("This is an h5");
  h5.className = "h5";
  h5.id = "h5";
  h5.appendChild(h5Text);

  hc.appendChild(h5);

  let h6 = document.createElement("h6");
  let h6Text = document.createTextNode("This is an h6");
  h6.className = "h6";
  h6.id = "h6";
  h6.appendChild(h6Text);

  hc.appendChild(h6);

  document.body.appendChild(hc);

  let headers = [
    document.getElementById("h1"),
    document.getElementById("h2"),
    document.getElementById("h3"),
    document.getElementById("h4"),
    document.getElementById("h5"),
    document.getElementById("h6"),
  ];
  
  let changeColor = function () {
    for (i = 0; i < headers.length; i++) {
      headers[i].addEventListener("dblclick", headerClick);
    }
  };

  let headerClick = function (e) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    e.target.style.color = randomColor;
  };

  changeColor();

  let button = document.getElementsByClassName("btn");

  button = button[0];

  button.addEventListener("click", addList);
};

let x = 1;

let listClick = function (e) {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  e.target.style.color = randomColor;
};

function addList() {
  let uList;
  if (document.getElementsByTagName("ul").length === 0) {
    uList = document.createElement("ul");
  } else {
    uList = document.getElementsByTagName("ul");
    uList = uList[0];
  }

  let newLi = document.createElement("li");
  let liText = document.createTextNode("This is list item " + x++);
  newLi.appendChild(liText);
  uList.appendChild(newLi);
  newLi.addEventListener("click", listClick);
  newLi.addEventListener("dblclick", removeList);
  document.body.appendChild(uList);

  function removeList(e) {
    e.target.parentNode.removeChild(e.target);
  }
}

document.addEventListener("DOMContentLoaded", textAppear);
