// Case. Sebuah Class untuk Data Student yang ada di Pwd

class student {
    nama = ''
    Asal = ''
    Program = ''
    Telepon = ''
    constructor (nama, Asal, Program, Telepon){
        this.nama = nama
        this.Asal = Asal
        this.Program = Program
        this.Telepon = Telepon
    }
}

const arrStd = [
    new student ('Rakha', 'Bandung', 'JCWDOL', 'cobs' , '085659988596'), // Jika Argument yg dikirimkan > dari parameter constructor
    new student ('Azmandika', 'Cikampek', 'JCDSOL', '08123456789')
]

console.log(arrStd);