function setjwtuser () {
  document.getElementById('editUsername').innerHTML = '<b>' + sessionStorage.getItem('jwtuser').toLowerCase() + '</b>'
}
