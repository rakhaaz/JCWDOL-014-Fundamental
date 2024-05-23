var x = prompt("1. Input" + "\n" + "2. Show")

if (x == 1){

class StudentRegistration{
    name;
    username;
    email;
    #password;
    address;
    #phoneNumber;
    programSelected;

    constructor(name, username, address, phoneNumber){
        this.name = name;
        this.username = username; 
        this.address = address;
        this.#phoneNumber = phoneNumber; 
    }

    
     set validateName(name){
        this.name = name
    }
    

    set validateEmail(email){
        if(email.includes('@') && email.includes('.')){
            this.email = email
        }else{
            console.log('Email Not Valid');
        }
    }


    set validatePassword(password){
        if(password.length < 6 || password.length > 10){
            console.log('Password Have Minimum Require')
        }else{
            this.#password = password
        }
    }

   
    set validateProgramSelected(program){
        const validPrograms = ['JCWD', 'JCDS', 'JCUI/UX', 'JCDM', 'JCVD']

        if(validPrograms.includes(program.toUpperCase())){
            this.programSelected = program.toUpperCase()
        }else{
            console.log('Program Not Found!')
        }
    }

    get showPhoneNumber(){
        console.log(this.#phoneNumber.slice(0, this.#phoneNumber.length-6) + '*****')
        }
    }



    const student1 = new StudentRegistration(prompt ('Masukkan nama'), prompt ('Masukkan username'), prompt ('Masukkan lokasi'), prompt ('Masukkan telepon'))
    
    student1.validateEmail = 'rakhaaz@yahoo.com'
    student1.validatePassword = 'abc12345'
    student1.validateProgramSelected = 'jcwd'
    student1.showPhoneNumber
    console.log(student1)
}




// class StudentRegistration{
//     name;
//     username;
//     email;
//     #password;
//     address;
//     #phoneNumber;
//     programSelected;

//     constructor(name, username, address, phoneNumber){
//         this.name = name;
//         this.username = username; 
//         this.address = address;
//         this.#phoneNumber = phoneNumber; 
//     }

//     set validateEmail(email){
//         if(email.includes('@') && email.includes('.')){
//             this.email = email
//         }else{
//             console.log('Email Not Valid');
//         }
//     }
//     set validatePassword(password){
//         if(password.length < 6 || password.length > 10){
//             console.log('Password Have Minimum Require')
//         }else{
//             this.#password = password
//         }
//     }
//     set validateProgramSelected(program){
//         const validPrograms = ['JCWD', 'JCDS', 'JCUI/UX', 'JCDM', 'JCVD']

//         if(validPrograms.includes(program.toUpperCase())){
//             this.programSelected = program.toUpperCase()
//         }else{
//             console.log('Program Not Found!')
//         }
//     }

//     get showPhoneNumber(){
//         console.log(this.#phoneNumber.slice(0, this.#phoneNumber.length-6) + '*****')
//     }
// }

// const student1 = new StudentRegistration('Ryan', 'ryan01', 'Bogor', '0888')
// student1.validateEmail = 'ryan@gmail.com'
// student1.validatePassword = 'abc12345'
// student1.validateProgramSelected = 'jcwd'
// student1.showPhoneNumber
// console.log(student1)