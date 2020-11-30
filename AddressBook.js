const prompt=require('prompt-sync')();
const NAME = /^[A-Z]([a-z]{2,})$/;
const ADDRESS = /^[A-Z]{1}([A-Za-z]{3,})$/;
const ZIPCODE = /^[0-9]{6}$/;
const PHONE_NUMBER = /^[0-9]{2,3}[: :]{1}[6-9]{1}[0-9]{9}$/;
const EMAIL = /^[A-Za-z0-9]+([._%+-][0-9a-zA-Z]+)*@[A-Za-z0-9]+([.]([a-zA-Z]{2,3})*)+$/;
let contactArray = new Array;

class Contact{

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        if(!NAME.test(firstName)) throw 'Please enter valid firstname.'
        { 
            this.firstName = firstName;
        }
        if(!NAME.test(lastName)) throw 'Please enter valid lastname.'
        {
            this.lastName = lastName;
        }
        if(!ADDRESS.test(address))throw 'Please enter valid address.'
        {
            this.address = address;
        }
        if(!ADDRESS.test(city)) throw 'Please enter valid city.'
        {
            this.city = city;
        }
        if(!ADDRESS.test(state)) throw 'Please enter valid state.'
        {
            this.state = state;
        }
        if(!ZIPCODE.test(zip)) throw 'Please enter valid pincode.'
        {
            this.zip = zip;
        }
        if(!PHONE_NUMBER.test(phoneNumber)) throw 'Please enter valid phone number.'
        {
            this.phoneNumber = phoneNumber;
        }
        if(!EMAIL.test(email)) throw 'Please enter valid email ID.'
        {
            this.email = email;
        }
    }

    set firstName(firstName) {
        this.firstName = firstName;
     }
    
    toString(){
        return "First Name: " + this.firstName + "\nLast Name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city 
        + "\nState: " + this.state + "\nZip Code: " + this.zip + "\nPhone Number: " + this.phoneNumber + "\nEmail Id: " + this.email;
    }
}

function addContact(){
    let FirstName = prompt("Enter Firstname: ");
    let LastName = prompt("Enter Lastname: ");
    if(contactArray.find((contact)=>(contact.firstName+" "+contact.lastName)==(FirstName+" "+LastName))){   
        console.log("Name is already present in addressbook.");
        return;
    }
    let Address = prompt("Enter Address: ");
    let City = prompt("Enter City name: ");
    let State = prompt("Enter State name: ");
    let Zip = prompt("Enter pincode: ");
    let PhoneNumber = prompt("Enter Phone number: ");
    let EmailId = prompt("Enter email id: ");
    try{
        let person = new Contact(FirstName,LastName,Address,City,State,Zip,PhoneNumber,EmailId);
        contactArray.push(person);
        console.log("Contact is added. ");
    }catch(Exception){
        console.log(Exception);
    }
}

function editContact(firstName){
    let contact;
    for(let i = 0; i < contactArray.length; i++){
        if(contactArray[i].firstName === firstName)
            contact = contactArray[i];
        if(contact != null){
            let input = 1;
            while(input != 9){
                console.log("\nChoose to edit: \n1. First Name \n2. Last Name \n3. Address \n4. City \n5. State");
                console.log("6. Zipcode \n7. Phone Number \n8. Email \n9. View Edited Details & Exit");
                input = prompt("Enter Your Choice: ");
                input = parseInt(input);
                switch (input) {
                    case 1: let fname = prompt("Enter the firstname: ");
                            contact.firstName = fname;
                            break;
                    case 2: let lname = prompt("Enter the last Name: ");
                            contact.lastName = lname;
                            break;
                    case 3: let address_edit = prompt("Enter the address: ");
                            contact.address = address_edit;
                            break;
                    case 4: let city_edit = prompt("Enter the city: ");
                            contact.city = city_edit;
                            break;
                    case 5: let state_edit = prompt("Enter the state: ");
                            contact.state = state_edit;
                            break;
                    case 6: let zip_edit = prompt("Enter the pincode: ");
                            contact.zip = zip_edit;
                            break;
                    case 7: let phone_edit = prompt("Enter the phone number: ");
                            contact.phoneNumber = phone_edit;
                            break;
                    case 8: let mail_edit = prompt("Enter the email: ");
                            contact.email = mail_edit;
                            break;
                    case 9: console.log("\n",contact);
                            break;
                    default: console.log("Choose Correct Choice");
                    }
                }
            }
    }
}

let countEntry = 0;
do{
    console.log("Press: \n1) Add Contact \n2) Edit Contact \n3) View Contact \n0)Exit:");
    countEntry = Number(prompt("Enter your choice: "));
    if(countEntry == 1){
        addContact();
    }
    if(countEntry == 2){
        if(contactArray.length==0){
            console.log("No contacts in Addressbook.");
        }
        let userData = prompt("Enter the contact firstname which you want to edit: ");
        editContact(userData); 
    }
    if(countEntry == 3){
        for(let i = 0; i < contactArray.length; i++)
            console.log(contactArray[i].toString(),"\n");
    }
}while(countEntry != 0);