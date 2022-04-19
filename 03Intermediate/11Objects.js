var user = {
    firstName: "Ganesh",
    lastName: "Uthiravasagam"
}

console.log(user.firstName);
console.log(user["firstName"]);

user.firstName = 2;

console.log(user);
console.table(user);