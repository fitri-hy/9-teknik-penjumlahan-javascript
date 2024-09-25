// Objek ini menyimpan semua operasi matematika yang bisa dipake
const operations = {
    '+': (a, b) => a + b, // Strategi penjumlahan
    '-': (a, b) => a - b, // Strategi pengurangan
    '*': (a, b) => a * b, // Strategi perkalian
    '/': (a, b) => a / b  // Strategi pembagian
};

let expression = ''; // Variabel buat nyimpen input dari user

function pressKey(key) {
    expression += key; // Tambahin tombol yang ditekan ke dalam ekspresi
    document.getElementById('display').value = expression; // Update tampilan calculator dengan ekspresi yang baru
}

function calculate() {
    // Pisahin angka dan operator dari ekspresi yang ada
    const [a, operator, b] = expression.split(/([+\-*/])/);
    
    // Panggil fungsi operasi yang sesuai berdasarkan operator yang didapat
    const result = operations[operator](parseFloat(a), parseFloat(b)); 
    document.getElementById('display').value = result; // Tampilkan hasil perhitungan di layar
    expression = ''; // Kosongkan ekspresi setelah perhitungan
}

function clearDisplay() {
    expression = ''; // Kosongkan ekspresi
    document.getElementById('display').value = ''; // Bersihin tampilan dari layar
}
