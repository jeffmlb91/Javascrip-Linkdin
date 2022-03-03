/**
 * @link http://developer.mozilla.org/en-US/Web/Javascript/Reference/classes
 **/

import Bank from "./Bank.js";

const firstClient = new Bank("Paul", "Smith", "1985", "1 front Street", true);
// Console logging the info for testing
console.log("This is the client number one:", firstClient);

console.log("After sign up:", firstClient);
firstClient.changeName("Paul", 'Jhonson');
console.log("After sign up:", firstClient);

console.log("firstClient Account:", firstClient.checkingAccount);
firstClient.addFund('$150,000');
console.log("After sign up:", firstClient);

// This is the second Client
const secondClient = new Bank(
    "Emilie",
    "Dubois",
    1983,
    "1 Blue Jays Road",
    "200,000$",
    "130,000$",
    false,
    false,
    false
)


console.log("This is the second client:", secondClient);
secondClient.changeName("Lyly", "Rosewell");
console.log("This is the changed Name:", secondClient);





