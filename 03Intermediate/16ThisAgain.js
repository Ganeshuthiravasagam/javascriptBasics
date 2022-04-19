// For all regular function calls, this points to window object


console.log(this);

var user = {
  firstName: "Ganesh",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 10", this);
    var UserNew = {
        lastName: 'Uthiravasagam',
        getC: function () {
            console.log('LINE 14', this);
            function Hi() {
                console.log("Hello");
                console.log("LINE 17", this);
              }
              Hi();
        }
    }
    UserNew.getC()
    function sayHello() {
      console.log("Hello");
      console.log("LINE 25", this);
    }
    sayHello();
    console.log("LINE 28", this);
  }
};

user.getCourseCount();
