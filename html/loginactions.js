function signinFunction() {
  // Signin with user and password

  var request = new XMLHttpRequest();
  request.open('POST', 'https://localhost:8113/signin', true);
  request.setRequestHeader("Content-type", "application/json, charset=utf-8");
  request.onload = function() {
    sessionStorage.setItem("jwttoken", this.response);
  }
  var signin = {}
  signin.username = document.getElementById('user').value;
  signin.password = document.getElementById('password').value;
  var jsonBody = JSON.stringify(signin);
  console.log(jsonBody);
  request.send(jsonBody);
}

function refreshFunction() {
  // refresh a jwt
  // TODO: convert from cookies to authorization header

  var request = new XMLHttpRequest();
  request.open('POST', 'https://localhost:8113/refresh', false);
  request.send();
	// TODO: the result includes a cookie. What do we have to do with it.
}

function welcomeFunction() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://localhost:8113/welcome', false);
  request.setRequestHeader("Authorization", "Bearer "+ sessionStorage.getItem("jwttoken"))
  request.send();
  document.getElementById("welcomeMsg").textContent = request.response
  console.log("WELCOME"+request.response)
}
