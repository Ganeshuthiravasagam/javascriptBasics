
function doAddition(x) {
    return function (y) {
        console.log(x+y); 
    };
}

// var add5 = doAddition(4);
// add5(4);

doAddition(5)(8);