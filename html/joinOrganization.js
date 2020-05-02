function joinOrganization () {
  // Rest call to have a chef user join a chef organization
  var request = new XMLHttpRequest()
  org = document.getElementById('editOrganization').textContent
  user = document.getElementById('editUsername').textContent
  request.open('POST', 'https://localhost:8143/orgusers/' + org + '/users/' + user, true)
  request.setRequestHeader('Content-type', 'application/json, charset=utf-8')
  request.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('jwttoken'))
  request.onload = function () {
    if (this.status != 200) {
      alert(`Error ${this.status}: ${this.statusText}`)
      return
    }
    console.log('RSP ' + this.response)
  }

  request.send()
}
