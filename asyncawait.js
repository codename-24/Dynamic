console.log('Person 1 shows ticket');
console.log('Person 2 shows ticket');

const movie = async()=>{
const wifeBringingTicket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);   
});
const popcorn = new Promise((resolve,reject)=>{
    resolve('Popcorn');
})
const butter =  new Promise((resolve,reject)=>{
    resolve('put some butter');
})
const coldDrink = new Promise((resolve,reject)=>{
    resolve('Pepsi');
})

let ticket = await wifeBringingTicket;
console.log(`Wife: Here is the ${ticket}`);
console.log(`Husband: We should go in`);
console.log(`Wife: No, I'm hungry`);

let pcorn = await popcorn;
console.log(`Husband: Here is your ${pcorn}`);
console.log('Husband: Shall we go now');
console.log('Wife: No, I need butter on my popcorn');

let btr = await butter;
console.log(`Husband: I ${btr} on your popcorn`);
console.log('Husband: Anything else');
console.log('Wife: I need a cold drink');

let drink = await coldDrink;
console.log(`Husband: I got you a ${drink} shall we go now`);
console.log('Wife: Lets go');

return ticket;
}
movie().then((message)=>{
    console.log(message);
})


console.log('Person 4 shows ticket');
console.log('Person 5 shows ticket');