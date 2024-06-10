//case
//Di supermarket menjual elektronik, fashion, dan snack
// setiap kategori memiliki identitas yang berbeda beda (elektronik ada serial number, fashion ada size, snack ada rada dll.)
//1. Jabarkan apa saja identitas yg dimiliki untuk masing2 product catagory
//2. Class berdasarkan product category

class jual {
    constructor (nama, harga, diskon, stock){
        this.nama = nama
        this.harga = harga
        this.diskon = diskon
        this.stock = stock
    }
}

class elektronik extends jual {
    constructor (nama, harga, diskon, stock, jenis, serialNumber){
        super(nama, harga, diskon, stock)
        this.jenis = jenis
        this.serialNumber = serialNumber
    }
}
class fashion extends jual {
    constructor (nama, harga, diskon, stock, jenis, size){
        super (nama, harga,diskon,stock)
        this.jenis = jenis
        this.size = size
    }
}

const jualElek = new elektronik ('LG', 'Rp. 4.000.000', '5%', 100, 'TV', 'LG154232')
const jualFash = new fashion ('Erigo', 'Rp. 200.000', '5%', 75, 'Baju', 'M')
console.log(jualElek);
console.log(jualFash);