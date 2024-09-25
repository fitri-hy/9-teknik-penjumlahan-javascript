// Fungsi untuk ngitung ekspresi secara rekursif
function recursiveEval(expression) {
    // Cek kalo ekspresi itu angka, langsung return jadi float
    if (!isNaN(expression)) {
        return parseFloat(expression);
    }

    // Pisahin angka dan operator dari ekspresi
    const [a, operator, b] = expression.split(/([+\-*/])/);
    // Hitung nilai sebelah kiri dan kanan secara rekursif
    const left = recursiveEval(a);
    const right = recursiveEval(b);

    // Lakuin operasi sesuai operator yang ada
    switch (operator) {
        case '+': return left + right; // Penjumlahan
        case '-': return left - right; // Pengurangan
        case '*': return left * right; // Perkalian
        case '/': return left / right; // Pembagian
        default: return 0; // Kalo operatornya aneh, return 0
    }
}

let expression = ''; // Variabel buat nyimpen ekspresi yang lagi diketik

function pressKey(key) {
    expression += key; // Tambahin tombol yang ditekan ke ekspresi
    document.getElementById('display').value = expression; // Update tampilan dengan ekspresi saat ini
}

function calculate() {
    const result = recursiveEval(expression); // Hitung hasil ekspresi
    document.getElementById('display').value = result; // Tampilkan hasil di layar
    expression = ''; // Kosongkan ekspresi setelah ngitung
}

function clearDisplay() {
    expression = ''; // Kosongkan ekspresi
    document.getElementById('display').value = ''; // Bersihin tampilan
}
