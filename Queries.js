let person = {
    firstName: "James",
    lastName: "Bond",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(" ");
    }
  };
  
  // set fullName is executed with the given name value.
  let obj= new person()
  obj.fullName("sd","wd")
  
  console.log(person.fullName); // Jane
  console.log(person.lastName); // Iyer