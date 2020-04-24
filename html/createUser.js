function createUser() {
  // Create a user
  var request = new XMLHttpRequest();
  request.open("POST", "https://localhost:8143/users", true);
  request.setRequestHeader("Content-type", "application/json, charset=utf-8");
  request.setRequestHeader("Authorization", "Bearer "+ sessionStorage.getItem("jwttoken"))
  request.onload = function () {
    if (this.status != 200) {
      alert(`Error ${this.status}: $this.statusText}`);
      return;
    }
    var userResp = JSON.parse(this.response)
    console.log("RSP "+ userResp["chef_key"])
    console.log("RSP "+ userResp["chef_key"]["private_key"])
    document.getElementById("privateKey").innerHTML = userResp["chef_key"]["private_key"]
    // Get the body and display to private key
  }
  
  var newuser = {}
  newuser.username = document.getElementById('editUsername').textContent;
  newuser.display_name = document.getElementById('editDisplayname').textContent;
  newuser.email = document.getElementById('editEmail').textContent;
  newuser.first_name = document.getElementById('editFirstname').textContent;
  newuser.last_name = document.getElementById('editLastname').textContent;
  newuser.password = "dummyi1234$complex"
  newuser.create_key = true
  var jsonBody = JSON.stringify(newuser);
  console.log("CREATE JSON"+jsonBody);
  request.send(jsonBody);
}
