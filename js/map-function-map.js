// Peta yang nyimpen operasi matematika, jadi gampang akses fungsi berdasarkan operator
const operationMap = new Map([
    ['+', (a, b) => a + b], // Operasi penjumlahan
    ['-', (a, b) => a - b], // Operasi pengurangan
    ['*', (a, b) => a * b], // Operasi perkalian
    ['/', (a, b) => a / b]  // Operasi pembagian
]);

let expression = ''; // Variabel buat nyimpen ekspresi yang lagi diketik

function pressKey(key) {
    expression += key; // Tambahin tombol yang ditekan ke ekspresi
    document.getElementById('display').value = expression; // Update tampilan biar keliatan apa yang diketik
}

function calculate() {
    // Pisahin angka dan operator dari ekspresi yang udah ditulis
    const [a, operator, b] = expression.split(/([+\-*/])/);
    
    // Panggil fungsi dari operationMap sesuai operator yang ada
    const result = operationMap.get(operator)(parseFloat(a), parseFloat(b));
    document.getElementById('display').value = result; // Tampilkan hasil di layar
    expression = ''; // Kosongkan ekspresi setelah ngitung
}

function clearDisplay() {
    expression = ''; // Kosongkan ekspresi
    document.getElementById('display').value = ''; // Bersihin tampilan
}
