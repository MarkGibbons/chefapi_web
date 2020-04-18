function nodesListFunction() {
  // Create a request to use to call the nodes api
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:9002/orgnodes', true)
  request.onload = function () {
    // Access JSON here
    var orgnodes = JSON.parse(this.response)
    console.log(orgnodes)

    var html = "<table class=orgnodes border='0|0'>";
    for (var i = 0; i < orgnodes.length; i++) {
      html+="<tr>";
      var nodes = orgnodes[i].nodes	    
      html+="<td class='orgnodes' id=orgnodes"+orgnodes[i].organization+" onclick=expandOrg('"+orgnodes[i].organization+"')><u>"+orgnodes[i].organization+"</u></td>";
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
