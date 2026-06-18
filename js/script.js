const API_URL =
"https://script.google.com/macros/s/AKfycbwWlyNpAWLcjQmwHzi6fxhWmem35KmLn2hsluaB_Ph1BWYAJ2seSChtluEJYDvWz0OW4w/exec";

// LOAD LEADS
fetch(API_URL)
.then(response => response.json())
.then(data => {

    const table = document.getElementById("leadTable");

    table.innerHTML = "";

    data.forEach((row, index) => {

        table.innerHTML += `
        <tr>
            <td>${row["Sr No"]}</td>
            <td>${row["Business Name"]}</td>
            <td>${row["Number"]}</td>
            <td>${row["Country"]}</td>

            <td>
                <select onchange="updateDisposition(${index + 2}, this.value)">
                    <option value="">Select</option>

                    <option value="Not Called"
                    ${row["Call Disposition"] === "Not Called" ? "selected" : ""}>
                    Not Called
                    </option>

                    <option value="Interested"
                    ${row["Call Disposition"] === "Interested" ? "selected" : ""}>
                    Interested
                    </option>

                    <option value="Follow Up"
                    ${row["Call Disposition"] === "Follow Up" ? "selected" : ""}>
                    Follow Up
                    </option>

                    <option value="Not Interested"
                    ${row["Call Disposition"] === "Not Interested" ? "selected" : ""}>
                    Not Interested
                    </option>

                    <option value="Wrong Number"
                    ${row["Call Disposition"] === "Wrong Number" ? "selected" : ""}>
                    Wrong Number
                    </option>
                </select>
            </td>

            <td>${row["Notes"]}</td>
        </tr>
        `;
    });

})
.catch(error => {
    console.error("Load Error:", error);
});


// UPDATE DISPOSITION
function updateDisposition(row, disposition) {

    console.log("Sending:", row, disposition);

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            row: row,
            disposition: disposition
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
    })
    .catch(error => {
        console.error("Update Error:", error);
    });

}
