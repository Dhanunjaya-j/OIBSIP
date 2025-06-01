    function convertTemp() {
      const input = document.getElementById("tempInput").value;
      const unit = document.getElementById("unitInput").value;
      const resultDiv = document.getElementById("result");

      const temp = parseFloat(input);
      if (isNaN(temp)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
      }

      let c, f, k;
      if (unit === "C") {
        c = temp;
        f = (c * 9/5) + 32;
        k = c + 273.15;
      } else if (unit === "F") {
        f = temp;
        c = (f - 32) * 5/9;
        k = c + 273.15;
      } else if (unit === "K") {
        k = temp;
        c = k - 273.15;
        f = (c * 9/5) + 32;
      }

      resultDiv.innerHTML = `
        <p>${c.toFixed(2)} °C</p>
        <p>${f.toFixed(2)} °F</p>
        <p>${k.toFixed(2)} K</p>
      `;
    }