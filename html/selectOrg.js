function selectOrgFunction(org_name) {
  // Use the selected organization
  html=org_name
  console.log(html)
  document.getElementById('inOrganization').value = html;
  document.getElementById("organizationList").style.display = "none";
}
