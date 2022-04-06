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
let [pcorn,btr,drink] = await Promise.all([popcorn,butter,coldDrink]);
console.log(`${pcorn} ,${btr} ,${drink}`)
return ticket;
}
movie().then((message)=>{
    console.log(message);
})


console.log('Person 4 shows ticket');
console.log('Person 5 shows ticket');