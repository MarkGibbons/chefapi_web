function orgusersListFunction () {
  // Create a request to use to call the users api
  var request = new XMLHttpRequest()
  var filters = {}
  if (document.getElementById('filterToggle').textContent == 'on') {
    console.log('Using the filter')
    filters.user = document.getElementById('user').value
    filters.organization = document.getElementById('organization').value
  } else {
    filters.user = ''
    filters.organization = ''
  }

  // leave unless the jwt is set
  var jwttoken = sessionStorage.getItem('jwttoken')
  if (jwttoken == null || jwttoken == 'undefined') {
    document.getElementById('userListDisplay').innerHTML = '<div>You must <a href=login.html>Login<a> first</div>'
    return
  }
  // Get the list of users
  request.open('GET', 'https://localhost:8143/orgusers' + '?user=' + filters.user + '&organization=' + filters.organization, true)
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  request.setRequestHeader('Authorization', 'Bearer ' + jwttoken)
  console.log('JWT' + jwttoken)
  request.onload = function () {
    if (this.status != 200) {
      alert(`Error ${this.status} calling orgusers`)
      return
    }
    highlightList('orgUserList')
    console.log('List' + this.response)
    var orgusers = JSON.parse(this.response)
    orgusers.sort(orgOrder)

    var html = "<table class=orgusers border='0|0'>"
    html += '<tr>'
    html += '<td class=orgusers><b>ORG USERS</b></td>'
    html += '</tr>'
    for (var i = 0; i < orgusers.length; i++) {
      html += '<tr>'
      html += "<td class='orgusers' id=orgusers" + orgusers[i].organization + " onclick=expandOrg('" + orgusers[i].organization + "')>" + orgusers[i].organization + '</td>'
      html += "<table class=users border='0|0'>"
      users = orgusers[i].users
      users.sort(userOrder)
      for (var j = 0; j < users.length; j++) {
        html += '<tr>'
        html += "<td class='users' id=user" + users[j] + " onclick=userEdit('" + orgusers[i].organization + "','" + users[j] + "')>" + users[j] + '</td>'
        html += '</tr>'
      }
      html += '</tr>'
    }
    html += '</table>'
    document.getElementById('userListDisplay').innerHTML = html
    document.getElementById('userListDisplay').style.display = 'inline-table'
  }
  request.send()
}
