document
  .getElementById("validateButton")
  .addEventListener("click", function () {
    const templateInput = document.getElementById("templateInput").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    resultDiv.className = "";

    try {
      // Attempt to compile the template
      Handlebars.precompile(templateInput);
      resultDiv.textContent = "Template is valid!";
      resultDiv.className = "success";
    } catch (error) {
      resultDiv.textContent = `Template compile error: ${error.message}`;
      resultDiv.className = "error";
    }
  });
