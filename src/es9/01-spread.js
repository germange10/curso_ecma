const user = {username:'germange10', age:26, country:'arg'}
const {username ,...values }= user;
// lo que haces es pasar los valores de age y country a values
console.log(username)
console.log(values)