console.log('Person 1 shows ticket');
console.log('Person 2 shows ticket');

const wifeBringingTicket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);   
});
const popcorn = wifeBringingTicket.then((t)=>{
    console.log(`Wife: Here is the ${t}`);
    console.log(`Husband: We should go in`);
    console.log(`Wife: No, I'm hungry`);
    return new Promise((resolve,reject)=>{
        resolve('Popcorn');
    })
});
const butter = popcorn.then((m)=>{
    console.log(`Husband: Here is your ${m}`);
    console.log('Husband: Shall we go now');
    console.log('Wife: No, I need butter on my popcorn');
    return new Promise((resolve,reject)=>{
        resolve('put some butter');
    })
})
const coldDrink = butter.then((b)=>{
    console.log(`Husband: I ${b} on your popcorn`);
    console.log('Husband: Anything else');
    console.log('Wife: I need a cold drink');
    return new Promise((resolve,reject)=>{
        resolve('Pepsi');
    })
})
coldDrink.then((p)=>{
    console.log(`Husband: I got you a ${p} shall we go now`);
    console.log('Wife: Lets go');
})
console.log('Person 4 shows ticket');
console.log('Person 5 shows ticket');