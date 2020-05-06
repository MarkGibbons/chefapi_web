function filterUsersFunction () {
  var flip = document.getElementById('filterToggle').textContent
  console.log(flip)
  if (flip == 'turn filter on') {
    flip = '<button style="color: blue;" type="button" onclick="filterUsersFunction()">turn filter off</button>'
  } else {
    flip = '<button style="color: blue;" type="button" onclick="filterUsersFunction()">turn filter on</button>'
  };

  document.getElementById('filterToggle').innerHTML = flip
}
