const user = ["hitesh", 3, "admin"];
// var role = user[2];
// var name = user[0];

var [firstName, courses, myRole] = user;

console.log(myRole);

const MyUser = {
    name: "hitesh",
    courseCount: 5,
    role: "admin",
  };
  
  // console.log(MyUser.courseCount);
  
  const { name, role, courseCount } = MyUser;
  console.log(role);
  