function nodeEdit(org, node) {
  // Create a request to use to call the nodes api and get detailed information
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:9002/orgnodes/'+org+'/nodes/'+node, true)
  request.onload = function () {
    // Access JSON here
    console.log(this.response)
    var nodeinfo = JSON.parse(this.response)
    console.log(nodeinfo)

    html = this.response	  

    document.getElementById('nodeDetails').innerHTML = html;
  }
  request.send()
}
