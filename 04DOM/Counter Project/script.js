var counter = document.querySelector('.counter')
var followers = document.getElementsByClassName('followers')

count = 1
setInterval(() => {
    if (count <= 1000) {
        counter.innerHTML = count;
        count++;
    }
}, 1);


setTimeout(() => {
    followers[0].innerHTML = "Followers on Instagram!"
}, 3000);