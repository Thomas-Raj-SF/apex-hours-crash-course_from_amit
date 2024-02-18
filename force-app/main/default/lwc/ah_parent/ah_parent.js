import { LightningElement, track } from 'lwc';

export default class Ah_parent extends LightningElement {
    message = 'Welcome to ApexHours!';
    childMessage = '';

    selectedRecord;

    handleClick(event){
        event.preventDefault();
        // call the child component method
        // Step1 - get the child component
        let child = this.refs.ahChild1;
        // Step2 - check if child component is present
        if(child){
            // Step3 - Call the method
            child.handleClick(this.message, 30, 'Amit Singh');
        }
    }

    handleCustomEvent(event){
        event.preventDefault();
        alert('Event handled!');
        console.log(JSON.stringify(event));
        // event.detail = {  }
        // .propertyname
        let childProp = event.detail;
        // childProp = {}
        console.log(JSON.stringify(childProp));
        this.childMessage = `${childProp.message} and Age is ${childProp.age}, 
                            live in ${childProp.address} 
                            you can connect via email using ${childProp.email}
                        `;
    }

    @track contacts = [
        {
          "location": "9617 tara street, dublin, westmeath, 66909",
          // con.address = {}
          // con.address.street = 9617 tara street
          "address": {
            "street": "9617 tara street",
            "city": "dublin",
            "state": "westmeath",
            "postalCode": "66909"
          },
          "email": "britney.sims@example.com",
          "cell": "081-136-4597",
          "picture": "https://randomuser.me/api/portraits/women/62.jpg",
          "id": 1,
          "first_name": "britney",
          "last_name": "sims"
        },
        {
          "location": "7394 durham street, dunedin, canterbury, 21471",
          // con.address = undefined [ variable environment ]
          // con.address.street ~= undeinfed.street === Error
          "email": "imogen.edwards@example.com",
          "cell": "(283)-969-5160",
          "picture": "https://randomuser.me/api/portraits/women/95.jpg",
          "id": 2,
          "first_name": "imogen",
          "last_name": "edwards"
        },
        {
          "location": "1317 ormond quay, ballinasloe, cork city, 87859",
          "email": "lillian.simmmons@example.com",
          "cell": "081-513-7697",
          "picture": "https://randomuser.me/api/portraits/women/74.jpg",
          "id": 3,
          "first_name": "lillian",
          "last_name": "simmmons"
        },
        {
          "location": "3685 the grove, city of london, humberside, H4C 6ES",
          "email": "jessica.torres@example.com",
          "cell": "0731-375-908",
          "picture": "https://randomuser.me/api/portraits/women/63.jpg",
          "id": 4,
          "first_name": "jessica",
          "last_name": "torres"
        },
        {
          "location": "5568 calle de tetuán, lorca, navarra, 40670",
          "email": "noelia.suarez@example.com",
          "cell": "662-049-873",
          "picture": "https://randomuser.me/api/portraits/women/82.jpg",
          "id": 5,
          "first_name": "noelia",
          "last_name": "suarez"
        },
        {
          "location": "goethestraße 171, heitersheim, thüringen, 83070",
          "email": "susanna.mast@example.com",
          "cell": "0179-7114996",
          "picture": "https://randomuser.me/api/portraits/women/39.jpg",
          "id": 6,
          "first_name": "susanna",
          "last_name": "mast"
        },
        {
          "location": "rosenweg 112, erfurt, berlin, 96006",
          "email": "christa.lehmann@example.com",
          "cell": "0176-2134865",
          "picture": "https://randomuser.me/api/portraits/women/2.jpg",
          "id": 7,
          "first_name": "christa",
          "last_name": "lehmann"
        },
        {
          "location": "7435 ستارخان, رشت, زنجان, 11745",
          "email": "سورنا.رضایی@example.com",
          "cell": "0921-708-2659",
          "picture": "https://randomuser.me/api/portraits/men/9.jpg",
          "id": 8,
          "first_name": "سورنا",
          "last_name": "رضایی"
        },
        {
          "location": "3383 thornridge cir, warrnambool, new south wales, 9965",
          "email": "evelyn.lane@example.com",
          "cell": "0472-058-708",
          "picture": "https://randomuser.me/api/portraits/women/47.jpg",
          "id": 9,
          "first_name": "evelyn",
          "last_name": "lane"
        },
        {
          "location": "hauptstraße 186, hattingen, mecklenburg-vorpommern, 57950",
          "email": "tom.schubert@example.com",
          "cell": "0172-9075754",
          "picture": "https://randomuser.me/api/portraits/men/67.jpg",
          "id": 10,
          "first_name": "tom",
          "last_name": "schubert"
        },
        {
          "location": "5332 talak göktepe cd, van, trabzon, 17455",
          "email": "babür.atakol@example.com",
          "cell": "(764)-740-7980",
          "picture": "https://randomuser.me/api/portraits/men/45.jpg",
          "id": 11,
          "first_name": "babür",
          "last_name": "atakol"
        },
        {
          "location": "beethovenstraße 72, steinbach-hallenberg, berlin, 77479",
          "email": "leif.geßner@example.com",
          "cell": "0172-1707427",
          "picture": "https://randomuser.me/api/portraits/men/75.jpg",
          "id": 12,
          "first_name": "leif",
          "last_name": "geßner"
        },
        {
          "location": "finkenweg 32, treuenbrietzen, berlin, 48862",
          "email": "cosima.ley@example.com",
          "cell": "0171-7815693",
          "picture": "https://randomuser.me/api/portraits/women/28.jpg",
          "id": 13,
          "first_name": "cosima",
          "last_name": "ley"
        },
        {
          "location": "6424 atatürk sk, bolu, siirt, 92903",
          "email": "çetin.adan@example.com",
          "cell": "(330)-754-1000",
          "picture": "https://randomuser.me/api/portraits/men/57.jpg",
          "id": 14,
          "first_name": "çetin",
          "last_name": "adan"
        },
        {
          "location": "5636 dundas rd, bath, manitoba, Y9F 0Z8",
          "email": "ava.lam@example.com",
          "cell": "565-797-6527",
          "picture": "https://randomuser.me/api/portraits/women/67.jpg",
          "id": 15,
          "first_name": "ava",
          "last_name": "lam"
        },
        {
          "location": "3695 fyrrevej, nørrebro, nordjylland, 73095",
          "email": "liva.hansen@example.com",
          "cell": "04639404",
          "picture": "https://randomuser.me/api/portraits/women/3.jpg",
          "id": 16,
          "first_name": "liva",
          "last_name": "hansen"
        },
        {
          "location": "889 engvej, nørre sundby, danmark, 47108",
          "email": "storm.larsen@example.com",
          "cell": "08759992",
          "picture": "https://randomuser.me/api/portraits/men/43.jpg",
          "id": 17,
          "first_name": "storm",
          "last_name": "larsen"
        },
        {
          "location": "1819 place de l'abbé-georges-hénocque, tours, seine-saint-denis, 80332",
          "email": "inaya.fabre@example.com",
          "cell": "06-42-01-35-49",
          "picture": "https://randomuser.me/api/portraits/women/61.jpg",
          "id": 18,
          "first_name": "inaya",
          "last_name": "fabre"
        },
        {
          "location": "3173 rue de l'abbé-rousselot, val-de-travers, fribourg, 6623",
          "email": "marlen.laurent@example.com",
          "cell": "(094)-717-6339",
          "picture": "https://randomuser.me/api/portraits/women/41.jpg",
          "id": 19,
          "first_name": "marlen",
          "last_name": "laurent"
        }
    ];

    handleContactClick(event){
        event.preventDefault();
        let selectedRecordId = event.detail.contactId;
        //console.log(typeof selectedRecordId);
        //alert(selectedRecordId);
        this.selectedRecord = this.contacts.find((item)=> {
            return item.id === selectedRecordId;
        });
        //console.log( JSON.stringify(this.selectedRecord) );
    }
}