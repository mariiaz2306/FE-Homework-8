

for(i=1; i<=10; i+=2){
    console.log(i)
}
////////////////////////////////
const arr = [20, 55]
   
for(let i = 20; i <= 55; i++) {
console.log(i) 
}
///второй вариант
for(let i = 55; i>=20; i--){
console.log(i)
}
///////////////////////////

const arr = [3, 5, 11, 2, 8, 1, 6];
for(let i = 0; i <=arr.length; i++){
    console.log(arr[i])
}

//////////////////////////////////
 numbers_squared = [3, 5, 11, 2, 8, 1, 6]
 const totalNumbers = []
 totalNumbers.push(numbers_squared[0] ** 2, numbers_squared[1] ** 2, numbers_squared[2] ** 2, numbers_squared[3] ** 2, numbers_squared[4] ** 2, numbers_squared[5]** 2, numbers_squared[6] ** 2)
console.log(totalNumbers);
let lastElem 
lastElem = totalNumbers[6]
console.log(lastElem)
//////////////////////////////////////

const user = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 20,
    salary: 500
}
console.log(`User's name is ${user.firstName} ${user.lastName}. He is ${user.age} years old`)