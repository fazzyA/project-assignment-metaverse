// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let name1 = "Eric";
console.log(`Hello ${name}, would you like to learn some Python today?`);

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
   // first char uppercase and remaning in lower
console.log(`${name1.slice(0, 1).toUpperCase()}${name1.slice(1).toLowerCase()}`);

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log(`“A person who never made a mistake never tried anything new.”
by Albert Einstein`);

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
let quote = "A person who never made a mistake never tried anything new.";
console.log(`“${quote}” by ${famous_person}`);

// 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const names = ['sadaf', 'sarah', 'ameen', 'aziz'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// method 2 
console.log(names.map((name) => `${name} `));


// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const res = names.map((name) => `Hi ${name} how are doing today!`);
console.log(res);

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guests = ['sadaf', 'sarah', 'ameen', 'aziz'];

const res2 = guests.map((guest) => `Hi ${guest} you are invited!`);
console.log(res2);

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

const not_coming = guests[1];
const replace_guest = "Daniyal"
guests[1] = replace_guest;


// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
guests.push('Sir Zia');
guests.push('Miss Hira');
guests.push('Prod Nouman');
// Add one new guest to the beginning of your array
guests.unshift('President Arif Alvi');
// Add one new guest to the middle of your array
let middle = Math.floor(guests.length / 2);
guests.splice(middle, 0, "Sir Qasim");
const res3 = guests.map((guest) => `Hi ${guest} you are invited, we are having a big dinner now!`);
console.log(res3);


//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician = ['david copperfield', 'xyz', 'abc'];
const show_magicians = (magicians) => {
    const res3 = magicians.map((mag) => `${mag}`);
    console.log(res3);
    
}
show_magicians(magician);
const make_great = (magicians) => {
    return magicians.map((mag) => `the great magician${mag}`);
    }

magician = make_great(magician);
show_magicians(magician);

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

const car_factory = (manufacturer = "honda", model="civic", ...args) => {
    console.log(args, "...");
    let car_obj = {
        manufacturer,
        model,
        color: args[0] ?? '',

    }
    return car_obj;
    }
    let obj1 = car_factory("toyota", "corolla", "grey");
    console.log("🚀 ~ file: index.js ~ line 98 ~ obj1", obj1)
    let obj2 = car_factory("toyota", "yaris");
    console.log("🚀 ~ file: index.js ~ line 100 ~ obj1", obj2)

