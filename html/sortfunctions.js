// Collected sort functions

function orgOrder(a, b) {
  if (a.organization < b.organization) { return -1;}
  if (a.organization > b.organization) { return 1;}
  if (a.organization == b.organization) { return 0;}
}

function userOrder(a, b) {
  if (a < b) { return -1;}
  if (a > b) { return 1;}
  if (a == b) { return 0;}
}

function nodeOrder(a, b) {
  if (a < b) { return -1;}
  if (a > b) { return 1;}
  if (a == b) { return 0;}
}
