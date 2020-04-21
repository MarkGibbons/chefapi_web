function selectOrgFunction(org_name) {
  // Use the selected organization
  html=org_name
  console.log(html)
  document.getElementById('organization').value = html;
  document.getElementById("organizationList").style.display = "none";
}
