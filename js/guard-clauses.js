let expression = ''; // Variabel buat nyimpen ekspresi yang diketik pengguna

function pressKey(key) {
    expression += key; // Tambahin karakter yang ditekan ke ekspresi
    document.getElementById('display').value = expression; // Update tampilan dengan ekspresi yang lagi diketik
}

function calculate() {
    // Pisahin angka dan operator dari ekspresi yang udah ditulis
    const [a, operator, b] = expression.split(/([+\-*/])/);
    // Cek apakah a atau b kosong, kalo kosong langsung panggil fungsi displayError
    if (!a || !b) return displayError();
    // Cek kalo operatornya bagi dan b itu nol, kasih error
    if (operator === '/' && b === '0') return displayError();
    
    // Hitung hasil dari ekspresi yang udah ditulis
    const result = eval(expression);
    document.getElementById('display').value = result; // Tampilkan hasil di layar
    expression = ''; // Kosongkan ekspresi setelah ngitung
}

function displayError() {
    document.getElementById('display').value = 'Error'; // Tampilkan pesan error di layar
    expression = ''; // Kosongkan ekspresi biar bersih
}

function clearDisplay() {
    expression = ''; // Kosongkan ekspresi
    document.getElementById('display').value = ''; // Bersihin tampilan
}
