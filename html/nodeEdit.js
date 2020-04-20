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
    html+= "<div class=editLabel>policy name:</div>"+"<div  id=editPolicyName contenteditable=true class=editElement>"+nodeinfo.policy_name+"</div>"+"<br>";
    html+= "<div class=editLabel>policy group:</div>"+"<div  id=editPolicyGroup contenteditable=true class=editElement>"+nodeinfo.policy_group+"</div>"+"<br>";
    // RunList:[]
    html+= "<div class=editLabel>run_list:</div>"+"<div id=editRunList contenteditable=true class=editElement>"+nodeinfo.run_list+"</div>"+"<br>";
    // AutomaticAttributes:map[] 
    html+= "<div class=editLabel>automatic attributes:</div>"+"<div id=editAutomaticAttributes contenteditable=true class=editElement>"+nodeinfo.automatic_attributes+"</div>"+"<br>";
    // NormalAttributes:map[] 
    html+= "<div class=editLabel>normal attributes:</div>"+"<div id=editNormalAttributes contenteditable=true class=editElement>"+nodeinfo.normal_attributes+"</div>"+"<br>";
    // DefaultAttributes:map[]
    html+= "<div class=editLabel>default attributes:</div>"+"<div id=editDefaultAttributes contenteditable=true class=editElement>"+nodeinfo.default_attributes+"</div>"+"<br>";
    // OverrideAttributes:map[]
    html+= "<div class=editLabel>override attributes:</div>"+"<div id=editOverrideAttributes contenteditable=true class=editElement>"+nodeinfo.override_attributes+"</div>"+"<br>";
    html+="</div>";
    document.getElementById('nodeDetails').innerHTML = html;
    document.getElementById('updateNode').style.display = "inline";
    document.getElementById('editBox').style.display = "inline";
  }
  request.send()
}
