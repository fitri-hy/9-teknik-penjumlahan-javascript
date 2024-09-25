## 9 Teknik Penjumlahan JavaScript (Kalkulator)

Pas lagi bikin aplikasi kalkulator, penting banget buat ngerti kalau setiap teknik yang kita pakai punya kelebihan dan fungsinya masing-masing. Di sini, kita udah ngebahas 9 teknik penjumlahan yang beda-beda, masing-masing punya cara unik buat ngerampungin masalah yang muncul pas ngembangin kalkulator.

**1. Chain of Responsibility**

Teknik ini bikin beberapa objek bisa nangani permintaan tanpa harus nyuruh ke objek yang spesifik. Di kalkulator, ini bisa dipakai buat alihin perhitungan sesuai operator yang diminta (kayak penjumlahan, pengurangan, dll.).

**2. Guard Clauses**

Ini teknik yang bikin kita ngecek kondisi di awal fungsi, dan kalau ada yang enggak beres, langsung cabut dari fungsi itu. Di kalkulator, bisa dipakai buat ngecek apakah operator yang dipakai valid atau enggak, plus ngindarin pembagian sama nol.

**3. Map Function-Map**

Ini tentang pake metode `map()` buat nerapin fungsi ke setiap elemen dalam array. Di kalkulator, bisa dipakai buat pisahin angka sama operator dari ekspresi yang diinput.

**4. Object Literal**

Cara bikin objek dengan notasi kurung kurawal. Dalam kalkulator, kita bisa pake objek literal buat nyimpen fungsi operasi (kayak penjumlahan dan pengurangan) dalam bentuk pasangan kunci-nilai.

**5. Polymorphism**

Konsep ini bikin objek bisa diperlakuin sebagai instansi dari superclass mereka. Di kalkulator, ini bisa berarti kita punya kelas operasi yang beda (kayak `Add`, `Subtract`) yang semua punya metode `execute()` dengan perilaku yang berbeda-beda.

**6. Recursion**

Teknik ini dipake pas sebuah fungsi manggil dirinya sendiri. Dalam konteks kalkulator, ini bisa dipakai buat evaluasi ekspresi yang lebih rumit, misalnya buat ngadepin operasi bersarang.

**7. State Machine**

Model ini dipakai buat ngatur status objek sesuai keadaan saat ini dan input yang diterima. Di kalkulator, ini bisa dipakai buat ganti status dari "idle" ke "calculating" pas pengguna masukin angka.

**8. Strategy Pattern**

Pola desain ini mendefinisikan set algoritma, ngebungkus masing-masing algoritma, dan bikin semuanya bisa dipertukarkan. Di kalkulator, ini digunain buat milih operasi matematika yang tepat sesuai input operator.

**9. Ternary Operator**

Operator ini cara singkat buat nulis pernyataan if-else. Dalam kalkulator, bisa dipakai buat nulis kondisi dengan ringkas, contohnya, pas nentuin hasil operasi berdasarkan operator yang dipakai.

Kalau kamu penasaran dan mau liat langsung kodenya dari 9 teknik ini, cek aja di folder `js/`. Selamat mencoba dan semoga bermanfaat!
