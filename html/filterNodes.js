function filterNodesFunction() {
  var flip = document.getElementById("filterToggle").textContent;
  console.log(flip)
  if  (flip == "on") {
    flip = '<button onclick="filterNodesFunction()">filter off</button>'
  } else {
    flip = '<button onclick="filterNodesFunction()">on</button>'
  };

  document.getElementById("filterToggle").innerHTML = flip;
}
