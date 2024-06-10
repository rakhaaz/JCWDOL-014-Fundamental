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

const std1 = new student ('Rakha', 'Bandung', 'JCWDOL', 'coba', '085659988596')
const std2 = new student ('Azmandika', 'Cikampek', 'JCDSOL', '08197454444')
console.log(std1, std2);