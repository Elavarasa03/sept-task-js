//Promise All
// const p1=Promise.resolve(2);
// const p2=1200;
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("Sk")},2000);
// })


// Promise.all([p1,p2,p3]).then((values)=>{
//     document.getElementById('prom').innerHTML=values;
// });


//Promise Race
// const p3=new Promise((resolve,rejet)=>{
//     setTimeout(()=>{
//         resolve('one')
//     },5000)
// })

// const p4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Two')
//     },9000)
// })

// Promise.race([p3,p4]).then((values)=>{
//     document.getElementById("prom").innerHTML=values;
// })


//Promise Any


// const p5=new Promise((resolve,reject)=>{
//     reject("Always Fails")
// })
// const p6=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Done Quick")
//     },2000)
// })
// const p7=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Too Fast")
//     },1000)
// })

// Promise.any([p5,p6,p7]).then((values)=>{
//     document.getElementById("prom").innerHTML=values;
// })



let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 900); 
});

async function asyncFunc() {
let result = await promise; 
    console.log(result);
    console.log('hello');}
asyncFunc();