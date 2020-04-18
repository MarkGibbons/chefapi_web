function organizationListFunction() {
  // Create a request to use to call the organizations api
  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:8112/orgs', true)
  request.onload = function () {
    // Access JSON here
    console.log(this.response)
    console.log(typeof this.response)
    var orgs = JSON.parse(this.response)
    orgs.sort();
    console.log(orgs.length)
    console.log(orgs[1])
  
    var html = "<table border='1|1'>";
    for (var i = 0; i < orgs.length; i++) {
      html+="<tr>";
      html+="<td class='orgList' id=organization"+orgs[i]+" onclick=groupFunction('"+orgs[i]+"')><u>"+orgs[i]+"</u></td>";
      html+="</tr>";
    }
    html+="</table>";
    console.log(html)
    document.getElementById('organizationList').innerHTML = html;
  }
  request.send()
}
