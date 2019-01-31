// Your code here!
alert('I love ducks');

var date = new Date();

alert(date);

alert(2 + 2);

console.log("the date is" + date);

document.body.innerHTML = "<h1> The date is" + date + "<h1>";

document.body.innerHTML = "<h1> The date is " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "<h1> ";

function myfunctin() {
    alert("This will load from the function ");
}