// Grundläggande applikation
function greetUser(name) {
    console.log("Hello, " + name);
}

function calculateTotal(price, tax) {
    let total = price + tax;
    return total;
}

function main() {
    greetUser("Student");
    let sum = calculateTotal(100, 25);
    console.log("Total: " + sum);
}

main();