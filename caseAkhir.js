// Case.
// Program Untuk Menyimpan Data Pendaftaran Student Purwadhika ke 1 Unit, 
// Validasi Data Inputnya
// name, username, email (Valid), password (Min: 6, Max: 10), address, 
// phoneNumber (Show Data: 08123335*****), 
// programSelected('JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD')

class stdPurwa {
    name;
    username;
    email;
    #password;
    address;
    phoneNumber;
    programSelected;
    constructor (name, username, address, phoneNumber){
        this.name = name
        this.username = username
        this.address = address
        this.phoneNumber = phoneNumber
       }

    get hidePhone () {
        return this.phoneNumber = this.phoneNumber.slice(0,7) + "*****"
    }

    
    set validateEmail(email){       //memvalidasi email
        if(!email.includes('@')){
            console.log('Email Not Valid!')
        }else{
            this.email = email
        }
    }
    set validatePassword (password){
        if (password<6 || password>10){
            console.log('Password Not Valid!');
        }
        else {this.#password = password}
    }

    set uppercase(programSelected){
        return this.programSelected = programSelected.toUpperCase()
    }
}

const user1 = new stdPurwa ('Rakha', 'rakha az', 'bandung','085659988596')
user1.validateEmail = 'rakhaaz@yahoo.com'
user1.validatePassword = 'abcdefghijklmn'
user1.uppercase = 'jCWdol'
console.log(user1);