import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class Ah_navComponent extends NavigationMixin(LightningElement) {

    navigateToNewContact(event) {
        event.preventDefault();
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    navigateToObjectHomePage(){
        this[NavigationMixin.Navigate]({
          type: "standard__objectPage",
          attributes: {
            actionName: "home",
            objectApiName: "Account"
          }
        });
    }
}