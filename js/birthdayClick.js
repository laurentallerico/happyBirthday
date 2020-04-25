

//document.onload.addEventListener
let bunch = ["Happy", "Birthday", "Tony"]
let option = 0
let phrase = bunch[option]

document.getElementsByTagName('body').addEventListener("click", function () {
    document.getElementById("main").innerHTML = phrase;
    if (option == 2) option = 0;
    else option++;
});

// clear text box on DOM load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('main').innerHTML = "Testing";
});