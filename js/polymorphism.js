// Kelas dasar untuk operasi
class Operation {
    // Metode execute yang bakal di-override di subclass
    execute(a, b) {
        return 0; // Defaultnya return 0
    }
}

// Kelas untuk operasi penjumlahan
class Add extends Operation {
    execute(a, b) {
        return a + b; // Mengembalikan hasil penjumlahan
    }
}

// Kelas untuk operasi pengurangan
class Subtract extends Operation {
    execute(a, b) {
        return a - b; // Mengembalikan hasil pengurangan
    }
}

// Kelas untuk operasi perkalian
class Multiply extends Operation {
    execute(a, b) {
        return a * b; // Mengembalikan hasil perkalian
    }
}

// Kelas untuk operasi pembagian
class Divide extends Operation {
    execute(a, b) {
        // Cek kalo b sama dengan 0
        if (b === 0) {
            throw new Error("Cannot divide by zero"); // Kalo iya, kasih error
        }
        return a / b; // Mengembalikan hasil pembagian
    }
}

let expression = ''; // Variabel buat nyimpen ekspresi dari input

function pressKey(key) {
    expression += key; // Tambahin tombol yang ditekan ke ekspresi
    document.getElementById('display').value = expression; // Update tampilan dengan ekspresi
}

function calculate() {
    // Pisahin angka dan operator dari ekspresi
    const [a, operator, b] = expression.split(/([+\-*/])/).map(str => str.trim());
    let operation; // Variabel untuk nyimpen objek operasi

    // Pilih operasi berdasarkan operator yang ada
    switch (operator) {
        case '+':
            operation = new Add(); // Buat objek Add
            break;
        case '-':
            operation = new Subtract(); // Buat objek Subtract
            break;
        case '*':
            operation = new Multiply(); // Buat objek Multiply
            break;
        case '/':
            operation = new Divide(); // Buat objek Divide
            break;
        default:
            document.getElementById('display').value = 'Error: Invalid Operator'; // Kalo operator salah
            return;
    }

    try {
        // Hitung hasil dan tampilkan
        const result = operation.execute(parseFloat(a), parseFloat(b));
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = error.message; // Tampilkan pesan error
    }
    
    expression = ''; // Kosongkan ekspresi setelah perhitungan
}

function clearDisplay() {
    expression = ''; // Kosongkan ekspresi
    document.getElementById('display').value = ''; // Bersihin tampilan
}
