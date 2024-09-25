let expression = ''; // Variabel buat nyimpen ekspresi yang dimasukin user

function pressKey(key) {
    expression += key; // Tambahin karakter yang ditekan ke ekspresi
    document.getElementById('display').value = expression; // Update tampilan dengan ekspresi terbaru
}

function calculate() {
    // Cek operator yang ada di ekspresi dan hitung hasilnya
    const result = (expression.includes('+')) ? eval(expression) // Kalo ada '+', hitung dengan eval
        : (expression.includes('-')) ? eval(expression) // Kalo ada '-', hitung dengan eval
        : (expression.includes('*')) ? eval(expression) // Kalo ada '*', hitung dengan eval
        : (expression.includes('/')) ? eval(expression) // Kalo ada '/', hitung dengan eval
        : 'Error'; // Kalo ga ada operator yang valid, kasih pesan error
    
    document.getElementById('display').value = result; // Tampilkan hasil perhitungan
    expression = ''; // Kosongkan ekspresi setelah perhitungan
}

function clearDisplay() {
    expression = ''; // Kosongkan ekspresi
    document.getElementById('display').value = ''; // Bersihin tampilan
}
