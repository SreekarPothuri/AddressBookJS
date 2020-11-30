const NAME = /^[A-Z]([a-z]{2,})$/;
const ADDRESS = /^[A-Z]{1}([A-Za-z]{3,})$/;
const ZIPCODE = /^[0-9]{6}$/;
const PHONE_NUMBER = /^[0-9]{2,3}[: :]{1}[6-9]{1}[0-9]{9}$/;
const EMAIL = /^[A-Za-z0-9]+([._%+-][0-9a-zA-Z]+)*@[A-Za-z0-9]+([.]([a-zA-Z]{2,3})*)+$/;

class Contact{

    get firstName() {
        return this.perFirstName;
    }

    set firstName(firstName) {
        if (NAME.test(firstName))
            this.perFirstName = firstName;
        else throw "Invalid first name ";
    }

    get lastName() {
        return this.perLastName;
    }

    set lastName(lastName) {
        if (NAME.test(lastName))
            this.perLastName = lastName;
        else throw "Invalid last name ";
    }

    get address() {
        return this.perAddress;
    }

    set address(address) {
        if (ADDRESS.test(address))
            this.perAddress = address;
        else throw "Invalid address ";
    }

    get city() {
        return this.perCity;
    }

    set city(city) {
        if (ADDRESS.test(city))
            this.perCity = city;
        else throw "Invalid City name ";
    }

    get state() {
        return this.perState;
    }

    set state(state) {
        if (ADDRESS.test(state))
            this.perState = state;
        else throw "Invalid State name ";
    }

    get zipCode() {
        return this.perZipCode;
    }

    set zipCode(zipCode) {
        if (ZIPCODE.test(zipCode))
            this.perZipCode = zipCode;
        else throw "Invalid Zip code ";
    }

    get phoneNumber() {
        return this.perPhoneNumber;
    }

    set phoneNumber(phoneNumber) {
        if (PHONE_NUMBER.test(phoneNumber))
            this.perPhoneNumber = phoneNumber;
        else throw "Invalid phone Number";
    }

    get email() {
        return this.perEmail;
    }

    set email(email) {
        if (EMAIL.test(email))
            this.perEmail = email;
        else throw "Invalid Email Id ";
    }

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
