function nodeUpdateFunction() {
  // Update a node with the edited information
  org = document.getElementById('editOrg').textContent;
  node = document.getElementById('editName').textContent;

  var request = new XMLHttpRequest();
  request.open('PUT', 'http://localhost:9002/orgnodes/'+org+'/nodes/'+node, true);
  request.setRequestHeader("Content-type", "application/json, charset=utf-8");
  request.onload = function () {
    document.getElementById('updateNode').style.display = "none";
    document.getElementById('editBox').style.display = "none";
  }
  
  var update = {}
  update.name = document.getElementById('editName').textContent;
  update.chef_environment = document.getElementById('editEnvironment').textContent;
  update.policy_name = document.getElementById('editPolicyName').textContent;
  update.policy_group = document.getElementById('editPolicyGroup').textContent;
  // update.run_list = document.getElementById('editRunList').textContent;
  // RunList:[]
  // AutomaticAttributes:map[]
  // NormalAttributes:map[]
  // DefaultAttributes:map[]
  // OverrideAttributes:map[]
  var jsonBody = JSON.stringify(update);
  console.log("UPDATE JSON"+jsonBody);
  request.send(jsonBody);
}
