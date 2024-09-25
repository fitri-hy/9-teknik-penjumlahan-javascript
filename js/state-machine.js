// Objek buat nyimpen state yang ada
const states = {
    idle: {
        enter: () => '', // Kalo masuk ke state idle, ga ada pesan
        exit: () => ''   // Kalo keluar dari state idle, juga ga ada pesan
    },
    calculating: {
        enter: () => 'Calculating...', // Kalo masuk ke state calculating, tampilkan pesan ini
        exit: () => ''                  // Kalo keluar dari state calculating, ga ada pesan
    }
};

let currentState = 'idle'; // Awalnya kita di state idle
let expression = ''; // Variabel buat nyimpen ekspresi yang diinput

function pressKey(key) {
    currentState = 'calculating'; // Set state ke calculating pas tombol ditekan
    expression += key; // Tambahin tombol yang ditekan ke ekspresi
    document.getElementById('display').value = expression; // Update tampilan dengan ekspresi
}

function calculate() {
    currentState = 'idle'; // Kembali ke state idle setelah ngitung
    const result = eval(expression); // Hitung hasil dari ekspresi
    document.getElementById('display').value = result; // Tampilkan hasil di layar
    expression = ''; // Kosongkan ekspresi setelah ngitung
}

function clearDisplay() {
    expression = ''; // Kosongkan ekspresi
    document.getElementById('display').value = ''; // Bersihin tampilan
}
