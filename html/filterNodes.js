function filterNodesFunction() {
  var user = document.getElementById("inUser").value;
  var org = document.getElementById("inOrganization").value;
  var node = document.getElementById("inNode").value;
  document.getElementById("user").innerHTML = user;
  document.getElementById("organization").innerHTML = org;
  document.getElementById("node").innerHTML = node;
}
