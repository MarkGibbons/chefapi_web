function nodesListFunction() {
  // Create a request to use to call the nodes api
  var request = new XMLHttpRequest()
  var filters = {}
  if (document.getElementById("filterToggle").textContent == "on") {
    console.log("Using the filter")
    filters.user = document.getElementById("user").value;
    filters.organization = document.getElementById("organization").value;
    filters.node = document.getElementById("node").value;
  } else {
    filters.user = "";
    filters.organization = "";
    filters.node = "";
  }

  // leave unless the jwt is set
  jwttoken = sessionStorage.getItem("jwttoken");
  if (jwttoken == null || jwttoken == 'undefined') {
    document.getElementById('nodeListDisplay').innerHTML = "<div>You must <a href=login.html>Login<a> first</div>";
    return;
  }
  // Get the list of organizations and nodes
  request.open("GET", "https://localhost:8143/orgnodes"+"?user="+filters.user+"&organization="+filters.organization+"&node="+filters.node, true)
  request.setRequestHeader('Content-type','application/json; charset=utf-8');
  request.setRequestHeader("Authorization", "Bearer "+ jwttoken)
  console.log("JWT"+jwttoken)
  request.onload = function () {
    if (this.status != 200) {
      alert(`Error ${this.status} calling orgnodes`);
      return;
    }
    var orgnodes = JSON.parse(this.response)
    orgnodes.sort(orgOrder)

    var html = "<table class=orgnodes border='0|0'>";
    for (var i = 0; i < orgnodes.length; i++) {
      html+="<tr>";
      html+="<td class='orgnodes' id=orgnodes"+orgnodes[i].organization+" onclick=expandOrg('"+orgnodes[i].organization+"')>"+orgnodes[i].organization+"</td>";
      var nodes = orgnodes[i].nodes	    
      nodes.sort(nodeOrder)
      html+="<table class=nodes border='0|0'>";
      for (var j = 0; j < nodes.length; j++) {
        html+="<tr>";		 
        html+="<td class='nodes' id=node"+nodes[j]+" onclick=nodeEdit('"+orgnodes[i].organization+"','"+nodes[j]+"')><u>"+nodes[j]+"</u></td>";
        html+="</tr>";
      }
      html+="</tr>";
    }
    html+="</table>";
    document.getElementById('nodeListDisplay').innerHTML = html;
    document.getElementById("nodeListDisplay").style.display = "inline-table";
  }
  request.send()
}

function orgOrder(a, b) {
  if (a.organization < b.organization) { return -1;}
  if (a.organization > b.organization) { return 1;}
  if (a.organization == b.organization) { return 0;}
}

function nodeOrder(a, b) {
  if (a < b) { return -1;}
  if (a > b) { return 1;}
  if (a == b) { return 0;}
}
