function filterText() {
    const text = document.getElementById("textInput").value;
    const keyword = document.getElementById("keyword").value.trim();
    const resultDiv = document.getElementById("result");

    if (keyword === "") {
        resultDiv.innerHTML = "Please enter a word to filter.";
        return;
    }

    const regex = new RegExp(`(${keyword})`, "gi");
    const filteredText = text.replace(regex, "<strong>$1</strong>");

    resultDiv.innerHTML = filteredText;
}
