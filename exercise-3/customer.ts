export {};
class Customer {
  private firstName: string;
  private lastName: string;
  
  constructor(first: string, last: string) {
      this.firstName = first;
      this.lastName = last;
  }
  
  greeter(): void {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }
}


let customer = new Customer("Karn", "Prajapati");
customer.greeter();
