const Promise1 = new Promise((resolve,reject)=> reject('reject'));
const Promise2 = new Promise((resolve,reject)=> resolve('resolve'));
const Promise3 = new Promise((resolve,reject)=> resolve('resolve2'));

Promise.any([Promise1, Promise2, Promise3])
.then(response=>console.log(response));