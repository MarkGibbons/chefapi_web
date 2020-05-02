function deleteUser () {
  // Delete a user, the user ID is in the jwttoken
  var request = new XMLHttpRequest()
  request.open('DELETE', 'https://localhost:8143/users', true)
  request.setRequestHeader('Content-type', 'application/json, charset=utf-8')
  request.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('jwttoken'))
  request.onload = function () {
    if (this.status != 200) {
      alert(`Error ${this.status}: ${this.statusText}`)
      return
    }
    usersListFunction()
  }

  request.send()
}
