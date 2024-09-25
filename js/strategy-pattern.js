// Kelas Calculator yang terima strategi buat ngitung
class Calculator {
    // Konstruktor terima strategi sebagai argumen
    constructor(strategy) {
        this.strategy = strategy; // Set strategi yang dipake
    }
    
    // Metode buat ngelakuin perhitungan pake strategi
    calculate(a, b) {
        return this.strategy(a, b); // Panggil strategi dengan dua argumen
    }
}

// Definisi strategi buat operasi matematika
const addStrategy = (a, b) => a + b; // Strategi buat nambahin
const subtractStrategy = (a, b) => a - b; // Strategi buat ngurangin
const multiplyStrategy = (a, b) => a * b; // Strategi buat kaliin
const divideStrategy = (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero"); // Cek biar gak bagi nol
    return a / b; // Strategi buat bagi
};

let expression = ''; // Variabel buat nyimpen input dari pengguna
let calculator = new Calculator(addStrategy); // Bikin objek Calculator dengan strategi default nambahin

// Fungsi buat nanganin penekanan tombol
function pressKey(key) {
    expression += key; // Tambahin karakter ke ekspresi
    document.getElementById('display').value = expression; // Update tampilan dengan ekspresi yang lagi dipake
}

// Fungsi buat ngitung hasil dari ekspresi
function calculate() {
    // Pisahin angka dan operator dari ekspresi dengan regex
    const [a, operator, b] = expression.split(/([+\-*/])/).map(str => str.trim());
    
    // Set strategi sesuai operator yang ditemukan
    switch (operator) {
        case '+':
            calculator.strategy = addStrategy;  // Set strategi ke nambahin
            break;
        case '-':
            calculator.strategy = subtractStrategy; // Set strategi ke ngurangin
            break;
        case '*':
            calculator.strategy = multiplyStrategy; // Set strategi ke kaliin
            break;
        case '/':
            calculator.strategy = divideStrategy; // Set strategi ke bagi
            break;
        default:
            document.getElementById('display').value = 'Error: Invalid Operator'; // Tampilkan pesan error kalo operatornya gak valid
            return;
    }
    
    // Coba hitung hasil dan tampilkan di layar
    try {
        const result = calculator.calculate(parseFloat(a), parseFloat(b));  // Hitung hasil
        document.getElementById('display').value = result; // Update tampilan dengan hasil
    } catch (error) {
        document.getElementById('display').value = error.message; // Tampilkan pesan error kalo ada masalah
    }
    
    expression = ''; // Kosongkan ekspresi setelah ngitung
}

// Fungsi buat bersihin tampilan
function clearDisplay() {
    expression = ''; // Kosongkan ekspresi
    document.getElementById('display').value = ''; // Kosongkan tampilan
}
