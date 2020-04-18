function nodeEdit(org, node) {
  // Create a request to use to call the nodes api and get detailed information
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:9002/orgnodes/'+org+'/nodes/'+node, true)
  request.onload = function () {
    // Access JSON here
    var nodeinfo = JSON.parse(this.response)
    console.log(nodeinfo)

    var html = "<div class=nodeEdit>";
    // html+= this.response;	  
    html+= "<div class=editLabel>name:</div>"+"<div>"+nodeinfo.name+"</div>"+"<div></div>";
    html+= "<div class=editLabel>environment:</div>"+"<div contenteditable=true class=editElement>"+nodeinfo.chef_environment+"</div>"+"<br>";
    html+= "<div class=editLabel>run_list:</div>"+"<div contenteditable=true class=editElement>"+nodeinfo.run_list+"</div>"+"<br>";
      // html+="<td class='orgnodes' id=orgnodes"+orgnodes[i].organization+" onclick=expandOrg('"+orgnodes[i].organization+"')><u>"+orgnodes[i].organization+"</u></td>";
      // html+="<table class=nodes border='0|0'>";
      //   html+="<tr>";
      //   html+="<td class='nodes' id=node"+nodes[j]+" onclick=nodeEdit('"+orgnodes[i].organization+"','"+nodes[j]+"')><u>"+nodes[j]+"</u></td>";
      //   html+="</tr>";
    html+="</div>";

    document.getElementById('nodeDetails').innerHTML = html;
  }
  request.send()
}
