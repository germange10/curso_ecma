const fnasync = ()=> {
    return new Promise ((resolve,reject)=>{
        (true)
        ? setTimeout(() =>resolve('async'),2000)
        : reject(new error ('error'));

    }) ;
}

const anotherFunction = async () => {
const something = await fnasync();
console.log(something);
console.log('hello');
}
console.log('before')
anotherFunction()
console.log('after')

