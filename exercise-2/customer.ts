class Customer {
  firstName: string;
  lastName: string;
  
  constructor() {
      this.firstName = "Karn";
      this.lastName = "Prajapati";
  }
  
  greeter(): void {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }
}

let customer = new Customer();
customer.greeter();
