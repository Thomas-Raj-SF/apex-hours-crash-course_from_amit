import { LightningElement, api, track, wire } from 'lwc';
import welcomeMessage from '@salesforce/apex/AH_HelloWorld.sayHello';
import getContacts from '@salesforce/apex/AH_HelloWorld.getContacts';
import getOpportunities from '@salesforce/apex/AH_HelloWorld.getOpps';
export default class HelloWorld extends LightningElement {
    message = '';
    error = '';
    @api recordId; 
    accountId = '';
    salesforceContacts;
    isLoading = false;
    // public variable, 
    // home page, app page,
    // record page, experience cloud, flow
    
    // reactiveness
    // objects of object - persons = { {}, {}, {}, {} }
    // array of obejcts - 
    youtubeChannelName = 'Welcome to ApexHours!!';
    courseName = 'We are in Salesfore Lightning Web Component Crash Course!';
    educator = 'Amit Singh';
    owner = 'Amit Choudhary';
    name;
    age = 30;
    isAdmin = true;
    isFree = true;
    address = {
        street: '123 Main Street',
        city: 'ABC',
        state: 'UP',
        country: 'Bharat'
    }
    /** 
     public class Address{
        public String street;
        public String city;
     }
     Address add = new Address();
     add.street;
    */
    @track contactList = [
        { firstName: '', lastName: '', email: '', id: 1},
        { firstName: '', lastName: '', email: '', id: 3},
        { firstName: '', lastName: '', email: '', id: 2},
    ];

    /* @wire(welcomeMessage)
    apexData;
    apexData: { data: Object, error: Object }
    apexData: { data: String, error: Object } */

    @wire(welcomeMessage)
    wiredWelcomeMessage({data, error}){
        if(data){
            console.log(data);
            this.message = data;
        }else if(error){
            console.error(error);
            this.error = JSON.stringify(error);
        }
    }

    @wire(welcomeMessage)
    wiredWelcomeMessage1(result){
        // local variables
        const {data, error} = result; // {data, error} ~= variable deconstruction
        if(data){
            this.message = data;
        }else if(error){
            this.error = JSON.stringify(error);
            console.error(error);
        }
    }

    @wire(getContacts, {
        accountId: '$accountId',
        email : ''
    })
    wiredContacts(result){
        const {data, error} = result; // {data, error} ~= variable deconstruction
        if(data){
            console.log('Contact Data', data);
            this.salesforceContacts = JSON.parse(JSON.stringify(data)); // {...data}
            this.salesforceContacts.forEach((item)=>{
                console.log(item);
                item.Email = 'amitsingh@zmail.com';
            });
            console.log('salesforceContacts data', this.salesforceContacts);
        }else if(error){
            this.error = JSON.stringify(error);
            console.error(error);
        }
    }

    handleClick(event){
        event.preventDefault();
        this.isLoading = true;
        let buttonComponent = event.currentTarget;
        let button = event.target;
        console.log(buttonComponent);
        console.log(button);
        getOpportunities()
        .then((result)=>{
            console.log('Opp Data ', result);
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            // cleanup logic
            console.log('finally executed');
            this.isLoading = false;
        });
    }

    hanleNav(event){
        event.preventDefault();
    }

}