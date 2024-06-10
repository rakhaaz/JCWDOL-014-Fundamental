// //Closure Function
// //function di dalam function
// function A(){
    
//     const greeting = 'Hello';
//     function B(){
//         console.log(greeting)
//     }
//     B();
// }

// A()

// ENCAPSULATION: Membungkus Data kedalam 1 Unit yang bernama Class
// Public Property
// Private Property

class Users{
    username; 
    email;
    #password;      //define private properti diawali "#"
    constructor(username, password){
        this.username = username;
        this.#password = password; //cara menggunakan private properti
    }

    get showPassword(){
        console.log(this.#password) //mengambil properti & menampilkan value nya dari super, meskipun berupa private property
    }

    set validateEmail(email){       //memvaladasi email
        if(!email.includes('@')){
            console.log('Email Not Valid!')
        }else{
            this.email = email
        }
    }
}

const userAccount1 = new Users('rakha', 'abc123')
userAccount1.validateEmail = 'rakhaaz@gmail.com'
console.log(userAccount1)
// console.log(userAccount1.showPassword())



// Case.
// Program Untuk Menyimpan Data Pendaftaran Student Purwadhika ke 1 Unit, 
// Validasi Data Inputnya
// name, username, email (Valid), password (Min: 6, Max: 10), address, 
// phoneNumber (Show Data: 08123335*****), 
// programSelected('JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD')

// Subject: Exercise Registrasi Student Pwd
// To: defryan@purwadhika.com