// Ini adalah kelas Handler, buat jadi bisa nyambung satu sama lain
class Handler {
    // Method untuk set handler berikutnya
    setNext(handler) {
        this.next = handler; // Simpan handler berikutnya
        return handler; // Kembaliin handler yang baru diset
    }

    // Method untuk handle request
    handle(request) {
        if (this.next) {
            return this.next.handle(request); // Kalo ada handler berikutnya, teruskan request
        }
    }
}

// Kelas AddHandler yang turun dari Handler, ini buat penjumlahan
class AddHandler extends Handler {
    handle(request) {
        // Cek apakah request ada tanda '+'
        if (request.includes('+')) {
            const [a, b] = request.split('+'); // Pisahin input jadi dua angka
            return parseFloat(a) + parseFloat(b); // Return hasil penjumlahan
        }
        return super.handle(request); // Kalo bukan '+' ya lanjut ke handler berikutnya
    }
}

// Kelas SubtractHandler, ini buat pengurangan
class SubtractHandler extends Handler {
    handle(request) {
        // Cek apakah request ada tanda '-'
        if (request.includes('-')) {
            const [a, b] = request.split('-'); // Pisahin input jadi dua angka
            return parseFloat(a) - parseFloat(b); // Return hasil pengurangan
        }
        return super.handle(request); // Lanjut ke handler berikutnya kalo bukan '-'
    }
}

// Kelas MultiplyHandler, ini buat perkalian
class MultiplyHandler extends Handler {
    handle(request) {
        // Cek apakah request ada tanda '*'
        if (request.includes('*')) {
            const [a, b] = request.split('*'); // Pisahin input jadi dua angka
            return parseFloat(a) * parseFloat(b); // Return hasil perkalian
        }
        return super.handle(request); // Lanjut ke handler berikutnya kalo bukan '*'
    }
}

// Kelas DivideHandler, ini buat pembagian
class DivideHandler extends Handler {
    handle(request) {
        // Cek apakah request ada tanda '/'
        if (request.includes('/')) {
            const [a, b] = request.split('/'); // Pisahin input jadi dua angka
            if (parseFloat(b) === 0) { // Cek kalo b-nya 0
                throw new Error("Cannot divide by zero"); // Jangan kasih izin bagi nol
            }
            return parseFloat(a) / parseFloat(b);  // Return hasil pembagian
        }
        return super.handle(request); // Lanjut ke handler berikutnya kalo bukan '/'
    }
}

// Instansiasi setiap handler
const addHandler = new AddHandler();
const subtractHandler = new SubtractHandler();
const multiplyHandler = new MultiplyHandler();
const divideHandler = new DivideHandler();

// Nyambungin semua handler biar bisa dipake barengan
addHandler.setNext(subtractHandler).setNext(multiplyHandler).setNext(divideHandler);

// Variabel buat nyimpen ekspresi yang diinput
let expression = '';

// Fungsi buat handle penekanan tombol
function pressKey(key) {
    expression += key;  // Tambahin input ke ekspresi
    document.getElementById('display').value = expression; // Update tampilan dengan ekspresi terbaru
}

// Fungsi buat hitung hasil dari ekspresi
function calculate() {
    try {
        const result = addHandler.handle(expression); // Coba hitung pake handler yang udah diset
		// Kalo hasilnya ada, tampilkan; kalo enggak, kasih tau error
        document.getElementById('display').value = result !== undefined ? result : 'Error';
    } catch (error) {
        document.getElementById('display').value = error.message; // Tampilkan pesan error kalo ada
    }
    expression = ''; // Reset ekspresi setelah hitung
}

// Fungsi buat bersihin tampilan
function clearDisplay() {
    expression = ''; // Reset ekspresi
    document.getElementById('display').value = ''; // Kosongin tampilan
}
