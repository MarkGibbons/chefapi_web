function setjwtuser() {
  document.getElementById("editUsername").innerHTML = sessionStorage.getItem("jwtuser").toLowerCase()
}
