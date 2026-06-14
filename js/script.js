const API_URL = "https://script.google.com/macros/s/AKfycbwWlyNpAWLcjQmwHzi6fxhWmem35KmLn2hsluaB_Ph1BWYAJ2seSChtluEJYDvWz0OW4w/exec";

const table = document.getElementById("leadTable");

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    table.innerHTML = "";

    data.forEach((row, index) => {

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
          <td>${row["Sr No"] || ""}</td>
          <td>${business}</td>
          <td>${number}</td>
          <td>${country}</td>

          <td>
            <select>
              <option value="" ${disposition === "" ? "selected" : ""}>Select</option>
              <option value="Not Called" ${disposition === "Not Called" ? "selected" : ""}>Not Called</option>
              <option value="Interested" ${disposition === "Interested" ? "selected" : ""}>Interested</option>
              <option value="Follow Up" ${disposition === "Follow Up" ? "selected" : ""}>Follow Up</option>
              <option value="Not Interested" ${disposition === "Not Interested" ? "selected" : ""}>Not Interested</option>
              <option value="Wrong Number" ${disposition === "Wrong Number" ? "selected" : ""}>Wrong Number</option>
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
