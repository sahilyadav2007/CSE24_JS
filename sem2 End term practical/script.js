function findFactorial() {
    let n = parseInt(document.getElementById("num").value);

    if (n < 0 || isNaN(n)) {
        document.getElementById("result").innerText =
            "Please enter a valid positive number";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }

    document.getElementById("result").innerText =
        "Factorial = " + factorial;
}