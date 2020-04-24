function nodeEdit(org, node) {
  // A small window exists here where we could not be authorized to update. Get a fresh JWT login update.
  // Create a request to use to call the nodes api and get detailed information
  var request = new XMLHttpRequest()
  request.open('GET', 'https://localhost:8143/orgnodes/'+org+'/nodes/'+node, true)
  request.setRequestHeader("Authorization", "Bearer "+ sessionStorage.getItem("jwttoken"))
  request.onload = function () {
    if (this.status != 200) {
       alert(`Error ${this.status}: $this.statusText}`);
       return;
    }
    var nodeinfo = JSON.parse(this.response)
    console.log("Before"+JSON.stringify(nodeinfo))
    nodeinfo = nodeinfoDefaults(nodeinfo)
    console.log("After"+JSON.stringify(nodeinfo))

    var html = "<div class=nodeEdit id=editBox>";
    html+= "<div class=editLabel>organization:</div>"+"<div id=editOrg>"+org+"</div>"+"<div></div>";
    html+= "<div class=editLabel>name:</div>"+"<div id=editName>"+nodeinfo.name+"</div>"+"<div></div>";
    html+= "<div class=editLabel>environment:</div>"+"<div  id=editEnvironment contenteditable=true class=editElement>"+nodeinfo.chef_environment+"</div>"+"<br>";
    html+= "<div class=editLabel>policy name:</div>"+"<div  id=editPolicyName contenteditable=true class=editElement>"+nodeinfo.policy_name+"</div>"+"<br>";
    html+= "<div class=editLabel>policy group:</div>"+"<div  id=editPolicyGroup contenteditable=true class=editElement>"+nodeinfo.policy_group+"</div>"+"<br>";
    // RunList:[]
    rl = JSON.stringify(nodeinfo.run_list)
    html+= "<div class=editLabel>run_list:</div>"+"<div id=editRunList contenteditable=true class=editElement>"+rl+"</div>"+"<br>";
    html+= "<div class=editLabel>Attributes</div><br>"
    // AutomaticAttributes:map[] 
    aa = JSON.stringify(nodeinfo.automatic_attributes)
    html+= "<div class=editLabel>automatic:</div>"+"<div id=editAutomaticAttributes contenteditable=true class=editElement>"+aa+"</div>"+"<br>";
    // NormalAttributes:map[] 
    na = JSON.stringify(nodeinfo.normal_attributes)
    html+= "<div class=editLabel>normal:</div>"+"<div id=editNormalAttributes contenteditable=true class=editElement>"+na+"</div>"+"<br>";
    // DefaultAttributes:map[]
    da = JSON.stringify(nodeinfo.default_attributes)
    html+= "<div class=editLabel>default:</div>"+"<div id=editDefaultAttributes contenteditable=true class=editElement>"+da+"</div>"+"<br>";
    // OverrideAttributes:map[]
    oa = JSON.stringify(nodeinfo.override_attributes)
    html+= "<div class=editLabel>override:</div>"+"<div id=editOverrideAttributes contenteditable=true class=editElement>"+oa+"</div>"+"<br>";
    html+="</div>";
    document.getElementById('nodeDetails').innerHTML = html;
    document.getElementById('updateNode').style.display = "inline";
    document.getElementById('editBox').style.display = "inline";
  }
  request.send()
}

 function nodeinfoDefaults(nodeinfo) {
	 if (typeof nodeinfo.policy_name == "undefined") nodeinfo.policy_name = ""
	 if (typeof nodeinfo.policy_group == "undefined") nodeinfo.policy_group = ""
	 if (typeof nodeinfo.run_list == "undefined") nodeinfo.run_list = []
	 if (typeof nodeinfo.automatic_attributes == "undefined") { nodeinfo.automatic_attributes = {} }
	 if (typeof nodeinfo.normal_attributes == "undefined") { nodeinfo.normal_attributes = {} }
	 if (typeof nodeinfo.default_attributes == "undefined") { nodeinfo.default_attributes = {} }
	 if (typeof nodeinfo.override_attributes == "undefined") { nodeinfo.override_attributes = {} }
	 return nodeinfo
 }
