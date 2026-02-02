const textBox = document.getElementById("textBox");
const wordDisplay = document.getElementById("wordCount");
const charDisplay = document.getElementById("charCount");

textBox.addEventListener("input", countText);

function countText() {
    const text = textBox.value;

    // character count
    charDisplay.textContent = text.length;

    // word count
    let words = text.trim().split(" ");

    if (text.trim() === "") {
        wordDisplay.textContent = 0;
    } else {
        wordDisplay.textContent = words.length;
    }
}
