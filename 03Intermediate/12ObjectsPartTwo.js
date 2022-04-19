var user = {
    firstName: "Ganesh",
    lastName: "Uthiravasagam",
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} has enrolled in ${this.courseList.length} courses`
    }
}

// console.log(user.firstName);
user.buyCourse("React JS")
user.buyCourse("Angular JS")
user.buyCourse("Docker")
user.buyCourse("")
console.log(user.getCourseCount());
console.table(user.courseList);
