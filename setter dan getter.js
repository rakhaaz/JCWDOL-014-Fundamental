const user = {
    firstName: "Rakha",
    lastName: "Azmandika",

    get fullName () {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName (value) {
        const splittedValue = value.split (" ");
        this.firstName = splittedValue[0];
        this.lastName = splittedValue [1];
    },
};

user.fullName = "Alice Cooper"
console.log(user.firstName);    // Alice
console.log(user.lastName);     // Cooper