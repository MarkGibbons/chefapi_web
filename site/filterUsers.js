function filterUsersFunction () {
  var flip = document.getElementById('filterToggle').textContent
  console.log(flip)
  if (flip == 'on') {
    flip = '<button onclick="filterUsersFunction()">filter off</button>'
  } else {
    flip = '<button onclick="filterUsersFunction()">on</button>'
  };

  document.getElementById('filterToggle').innerHTML = flip
}
