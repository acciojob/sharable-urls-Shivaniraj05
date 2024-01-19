// your code here
function updateUrl() {
  // Get values from the input fields
  var nameValue = document.getElementById('name').value;
  var yearValue = document.getElementById('year').value;

  // Build the query string
  var queryString = '?name=' + encodeURIComponent(nameValue) + '&year=' + encodeURIComponent(yearValue);

  // Update the text in the h3 element with the new URL
  document.getElementById('url').textContent = 'https://localhost:8080/' + queryString;
	return false;
}

