class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  fullName = () => { // Instance method
    return this.firstName + " " + this.lastName
  }
  anniversary = () => { // Instance method
    this.age += 1
    return `Happy birthday to you, ${this.firstName}! How does it feel to be ${this.age}?`
  }
  static groupWork(...args){ // class method --> utility/helper; not accessed by individual instances 
    //EX: code to send an email to students with their respective group and subject
  }
}

const rafa = new Student("Rafael", "Costa", 25)
const eve = new Student("Evelyn", "Prais", 26)
console.log(eve.firstName)
console.log(eve.age)
console.log(eve.fullName())
console.log(eve.anniversary())