function nodeUpdateFunction() {
  // Update a node with the edited information
  document.getElementById('updateNode').style.display = "none";
  document.getElementById('editBox').style.display = "none";

  var update = {}
  update.name = document.getElementById('editName').textContent
  update.environment = document.getElementById('editEnvironment').textContent
  update.run_list = document.getElementById('editRunList').textContent
  var jsonBody = JSON.stringify(update)

  var request = new XMLHttpRequest()
  org = document.getElementById('editOrg').textContent
  node = document.getElementById('editName').textContent
  request.open('POST', 'http://localhost:9002/orgnodes/'+org+'/nodes/'+node, true)
  request.send(jsonBody)
}
