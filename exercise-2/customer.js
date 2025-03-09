var Customer = /** @class */ (function () {
    function Customer() {
        this.firstName = "Karn";
        this.lastName = "Prajapati";
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    return Customer;
}());
var customer1 = new Customer();
customer1.greeter();
