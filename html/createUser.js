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
    document.getElementById("privateKey").innerHTML = "<div> Save this private key<br>" +userResp["chef_key"]["private_key"] + "</div>"
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

  // Alert and return if disp, email not set
  if ( newuser["display_name"].length == 0 || newuser["email"].length == 0 ) {
      alert(`Error: The display_name and email values must be set`);
      return;
  }

  // Verify the email address
  if ( ValidateEmail(newuser["email"]) != true ) {
      alert(`Error: The email address must be valid`);
      return;
  }

  var jsonBody = JSON.stringify(newuser);
  console.log("CREATE JSON"+jsonBody);
  request.send(jsonBody);
}

function ValidateEmail(mail)
{
 if ( mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) )
  {
    return(true)
  }
    alert("You have entered an invalid email address!")
    return(true)
}

