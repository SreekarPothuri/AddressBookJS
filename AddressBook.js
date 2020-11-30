class Contact{
    constructor(firstName,lastName,address,city,state,zipCode,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString(){
        return "First Name: " + this.firstName + "\nLast Name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city 
        + "\nState: " + this.state + "\nZip Code: " + this.zipCode + "\nPhone Number: " + this.phoneNumber + "\nEmail Id: " + this.email;
    }
}