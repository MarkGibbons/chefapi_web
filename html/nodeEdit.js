function nodeEdit(org, node) {
  // Create a request to use to call the nodes api and get detailed information
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:9002/orgnodes/'+org+'/nodes/'+node, true)
  request.onload = function () {
    // Access JSON here
    var nodeinfo = JSON.parse(this.response)
    console.log(nodeinfo)

    var html = "<div class=nodeEdit id=editBox>";
    html+= "<div class=editLabel>organization:</div>"+"<div id=editOrg>"+org+"</div>"+"<div></div>";
    html+= "<div class=editLabel>name:</div>"+"<div id=editName>"+nodeinfo.name+"</div>"+"<div></div>";
    html+= "<div class=editLabel>environment:</div>"+"<div  id=editEnvironment contenteditable=true class=editElement>"+nodeinfo.chef_environment+"</div>"+"<br>";
    html+= "<div class=editLabel>run_list:</div>"+"<div id=editRunList contenteditable=true class=editElement>"+nodeinfo.run_list+"</div>"+"<br>";
    html+="</div>";
    document.getElementById('nodeDetails').innerHTML = html;
    document.getElementById('updateNode').style.display = "inline";
    document.getElementById('editBox').style.display = "inline";
  }
  request.send()
}
