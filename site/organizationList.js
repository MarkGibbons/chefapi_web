function organizationListFunction () {
  // Create a request to use to call the organizations api
  var request = new XMLHttpRequest()
  request.open('GET', 'https://localhost:8143/orgs', true)
  request.onload = function () {
    // Access JSON here
    console.log(this.response)
    console.log(typeof this.response)
    var orgs = JSON.parse(this.response)
    // var orgs = JSON.parse(data)
    console.log(orgs)
    console.log(orgs.length)
    console.log(orgs[1])
    orgs.sort()

    var html = "<table border='1|1'>"
    for (var i = 0; i < orgs.length; i++) {
      html += '<tr>'
      html += "<td class='orgList' id=organization" + orgs[i] + " onclick=selectOrgFunction('" + orgs[i] + "')><u>" + orgs[i] + '</u></td>'
      html += '</tr>'
    }
    html += '</table>'
    console.log(html)
    document.getElementById('organizationList').innerHTML = html
    document.getElementById('organizationList').style.display = 'inline-table'
  }
  request.send()
}
