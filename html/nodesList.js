function nodesListFunction() {
  // Create a request to use to call the nodes api
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:9002/orgnodes', true)
  request.onload = function () {
    // Access JSON here
    var orgnodes = JSON.parse(this.response)
    orgnodes.sort(orgOrder)
    console.log(orgnodes)

    var html = "<table class=orgnodes border='0|0'>";
    for (var i = 0; i < orgnodes.length; i++) {
      html+="<tr>";
      html+="<td class='orgnodes' id=orgnodes"+orgnodes[i].organization+" onclick=expandOrg('"+orgnodes[i].organization+"')><u>"+orgnodes[i].organization+"</u></td>";
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
