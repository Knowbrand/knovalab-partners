const API_URL =
"https://script.google.com/macros/s/AKfycbwWlyNpAWLcjQmwHzi6fxhWmem35KmLn2hsluaB_Ph1BWYAJ2seSChtluEJYDvWz0OW4w/exec";

fetch(API_URL)
.then(response => response.json())
.then(data => {

const table = document.getElementById("leadTable");

data.forEach((row,index) => {
  
table.innerHTML += `

<td>
<select onchange="updateDisposition(${index + 2}, this.value)">
    <option value="">Select</option>
    <option value="Not Called">Not Called</option>
    <option value="Interested">Interested</option>
    <option value="Follow Up">Follow Up</option>
    <option value="Not Interested">Not Interested</option>
    <option value="Wrong Number">Wrong Number</option>
</select>
</td>
`;

});

});
