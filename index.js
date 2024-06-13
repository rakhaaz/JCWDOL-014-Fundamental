let arr = []

class stdPurwa {
    name;
    username;
    email;
    #password;
    address;
    #phoneNumber;
    programSelected;
    constructor (name, username, address, phoneNumber ){
        this.name = name
        this.username = username
        this.address = address
        this.#phoneNumber = phoneNumber
       }

    
    
    set validateEmail(email){       //memvalidasi email
        if(!email.includes('@')){
            console.log('Email Not Valid!')
        }else{
            this.email = email
        }
    }
    set validatePassword (password){
        if (password.length<6 || password.length>10){
            console.log('Password Not Valid!');
        }
        else {this.#password = password}
    }

    set uppercase(programSelected){
        const pwd = ['JCWDOL', 'JCDSOL', 'JCUI/UX', 'JCDM', 'JCVD']
        programSelected = programSelected.toUpperCase()
        if (pwd.includes(programSelected)){
        return this.programSelected = programSelected}
    }

    get showPhoneNumber(){
         console.log(this.#phoneNumber.slice(0, this.#phoneNumber.length-6) + '*****')
         }


}

let input= Number(prompt('1. Insert\n2. Show')) 
while (input == 1){
    

    let nama = prompt('Masukkan nama')
    let userName1 = prompt('Masukkan username')
    let daerah = prompt('Masukkan daerah')
    let noTlp = prompt('Masukkan no. HP')


    const user1 = new stdPurwa (nama, userName1, daerah, noTlp)
    arr.push(user1)
    console.log(arr);
    input= Number(prompt('1. Insert\n2. Show'))
} 


    alert (arr) 

// user1.validateEmail = 'rakhaaz@yahoo.com'
// user1.validatePassword = 'abcdefghijklmn'
// user1.uppercase = 'jCWdol'
// user1.showPhoneNumber
// console.log(user1);