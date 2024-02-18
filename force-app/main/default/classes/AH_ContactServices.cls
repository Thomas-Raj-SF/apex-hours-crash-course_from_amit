public with sharing class AH_ContactServices {

    @AuraEnabled
    public static Contact createContacts(ContactWrapper input){ // instance/object
        Contact conRecord = new Contact(
            FirstName = input.firstName,
            LastName  = input.lastName,
            Email     = input.email,
            Phone     = input.phone,
            Title     = input.title,
            AccountId = input.accountId
        );
        try {
          insert conRecord;
          return conRecord;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static Contact createContact(String firstName, String lastName, String email, String phone){
        Contact conRecord = new Contact(
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            Phone = phone
        );
        try {
          insert conRecord;
          return conRecord;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class ContactWrapper {
        @AuraEnabled
        public String firstName { get; set; }
        @AuraEnabled
        public String lastName { get; set; }
        @AuraEnabled
        public String email { get; set; }
        @AuraEnabled
        public String title { get; set; }
        @AuraEnabled
        public String phone { get; set; }
        @AuraEnabled
        public String accountId { get; set; }
    }
}