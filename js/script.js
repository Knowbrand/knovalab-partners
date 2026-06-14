const API_URL =
"https://script.google.com/macros/s/AKfycbwWlyNpAWLcjQmwHzi6fxhWmem35KmLn2hsluaB_Ph1BWYAJ2seSChtluEJYDvWz0OW4w/exec";

fetch(API_URL)
.then(response => response.json())
.then(data => {

const table = document.getElementById("leadTable");

data.forEach(row => {

table.innerHTML += `
<tr>
<td>${row["Sr No"] || ""}</td>
<td>${row["Business Name"] || ""}</td>
<td>${row["Number"] || ""}</td>
<td>${row["Country"] || ""}</td>
<td>${row["Call Disposition"] || ""}</td>
<td>${row["Notes"] || ""}</td>
</tr>
`;

});

});
