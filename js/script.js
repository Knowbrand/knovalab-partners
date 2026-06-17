const API_URL =
"https://script.google.com/macros/s/AKfycbwWlyNpAWLcjQmwHzi6fxhWmem35KmLn2hsluaB_Ph1BWYAJ2seSChtluEJYDvWz0OW4w/exec";

fetch(API_URL)
.then(response => response.json())
.then(data => {

    const table = document.getElementById("leadTable");

    table.innerHTML = "";

    data.forEach((row) => {

        const sr =
            row["Sr No"] ||
            row["Sr No "] ||
            "";

        const business =
            row["Business Name"] ||
            row["Business Name "] ||
            "";

        const number =
            row["Number"] ||
            row["Number "] ||
            "";

        const country =
            row["Country"] ||
            row["Country "] ||
            "";

        const disposition =
            row["Call Disposition"] ||
            row["Call Disposition "] ||
            "";

        const notes =
            row["Notes"] ||
            row["Notes "] ||
            "";

        table.innerHTML += `
            <tr>
                <td>${sr}</td>
                <td>${business}</td>
                <td>${number}</td>
                <td>${country}</td>

                <td>
                    <select>
                        <option ${disposition === "" ? "selected" : ""}>Select</option>
                        <option ${disposition === "Interested" ? "selected" : ""}>Interested</option>
                        <option ${disposition === "Follow Up" ? "selected" : ""}>Follow Up</option>
                        <option ${disposition === "Not Interested" ? "selected" : ""}>Not Interested</option>
                        <option ${disposition === "Wrong Number" ? "selected" : ""}>Wrong Number</option>
                    </select>
                </td>

                <td>${notes}</td>
            </tr>
        `;
    });

})
.catch(error => {
    console.error(error);
});
fetch(API_URL)
.then(response => response.json())
.then(data => {

    console.log("FULL DATA:", data);
    console.log("FIRST ROW:", data[0]);

    const table = document.getElementById("leadTable");

    // rest of your code...
});
