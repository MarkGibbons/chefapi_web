function usersListFunction () {
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
  jwttoken = sessionStorage.getItem('jwttoken')
  if (jwttoken == null || jwttoken == 'undefined') {
    document.getElementById('userListDisplay').innerHTML = '<div>You must <a href=login.html>Login<a> first</div>'
    return
  }
  // Get the list of users
  request.open('GET', 'https://localhost:8143/users' + '?user=' + filters.user + '&organization=' + filters.organization, true)
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  request.setRequestHeader('Authorization', 'Bearer ' + jwttoken)
  console.log('JWT' + jwttoken)
  request.onload = function () {
    if (this.status != 200) {
      alert(`Error ${this.status} calling users`)
      return
    }
    highlightList('userList')
    console.log('List' + this.response)
    var users = JSON.parse(this.response)
    console.log('List parsed' + users)
    users.sort(userOrder)

    var html = "<table class=users border='0|0'>"
    html += '<tr>'
    html += '<td class=orgusers><b>USERS</b></td>'
    html += '</tr>'
    for (var j = 0; j < users.length; j++) {
      html += '<tr>'
      html += "<td class='users' id=user" + users[j] + '>' + users[j] + '</td>'
      html += '</tr>'
    }
    html += '</table>'
    document.getElementById('userListDisplay').innerHTML = html
    document.getElementById('userListDisplay').style.display = 'inline-table'
  }
  request.send()
}

function highlightList (listname) {
  document.getElementById('adminUserList').style.backgroundColor = 'white'
  document.getElementById('orgUserList').style.backgroundColor = 'white'
  document.getElementById('userList').style.backgroundColor = 'white'
  document.getElementById(listname).style.backgroundColor = '#E8E8E8'
}
