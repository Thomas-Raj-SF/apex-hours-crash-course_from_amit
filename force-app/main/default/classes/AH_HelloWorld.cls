public with sharing class AH_HelloWorld {
    @AuraEnabled(cacheable=true)
    public static String sayHello(){
        return 'Welcome to Salesforce Apex Hours.';
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accountId, String email){
        return [SELECT Id, Name FROM Contact WHERE AccountId =: accountId];
    }

    @AuraEnabled
    public static List<Opportunity> getOpps(){
        return [SELECT Id, Name FROM Opportunity LIMIT 10];
    }
}