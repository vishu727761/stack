function filterProducts() {
    const selected = document.getElementById("category").value;
    const products = document.querySelectorAll("#productList li");

    for (let i = 0; i < products.length; i++) {
        const type = products[i].getAttribute("data-type");

        if (selected === "all" || type === selected) {
            products[i].style.display = "list-item";
        } else {
            products[i].style.display = "none";
        }
    }
}
