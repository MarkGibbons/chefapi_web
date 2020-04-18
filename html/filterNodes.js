function filterNodesFunction() {
  var user = document.getElementById("inUser").value;
  var org = document.getElementById("inOrganization").value;
  var node = document.getElementById("inNode").value;

  document.getElementById("user").innerHTML = user;
  document.getElementById("organization").innerHTML = org;
  document.getElementById("node").innerHTML = node;
 
  var flip = document.getElementById("filterToggle").textContent;
  console.log(flip)
  if  (flip == "on") {
    flip = '<button onclick="filterNodesFunction()">filter off</button>'
  } else {
    flip = '<button onclick="filterNodesFunction()">on</button>'
  };

  document.getElementById("filterToggle").innerHTML = flip;
}
