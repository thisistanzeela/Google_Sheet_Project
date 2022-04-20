{
    {
      // Your API KEY
      const API_KEY = "AIzaSyBKA6agNyQ5hHDqWe0PeVA3NiIzLY_Yxlw";

      function displayResult2(response) {
        let tableHead = "";
        let tableBody = "";

        response.result.values.forEach((row, index) => {
          if (index === 0) {
            tableHead += "<tr>";
            row.forEach((val) => (tableHead += "<th>" + val + "</th>"));
            tableHead += "</tr>";
          } else {
            tableBody += "<tr>";
            row.forEach((val) => (tableBody += "<td>" + val + "</td>"));
            tableBody += "</tr>";
          }
        });

        document.getElementById("table-head").innerHTML = tableHead;
        document.getElementById("table-body").innerHTML = tableBody;
      }

      function loadData() {
        // Spreadsheet ID
        const spreadsheetId = "1DwbY_RrExqyYP9HCVMPoSUxyQV-sM9nHnYaF1QzmXfU";
        const range = "A:Z";
        getPublicValues({ spreadsheetId, range }, displayResult2);
      }

      window.addEventListener("load", (e) => {
        initOAuthClient({ apiKey: API_KEY });
      });

      document.addEventListener("gapi-loaded", (e) => {
        loadData();
      });
    }
  }