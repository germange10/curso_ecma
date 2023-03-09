const anotherFunction = ()=>{
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve("gj")
        }else{
            reject ("dat")
        }
    })
}

anotherFunction()
.then (response=> console.log(response))
.catch(err => console.log(err))
.finally(()=> console.log('finnally'))