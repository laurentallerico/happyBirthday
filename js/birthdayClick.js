

//document.onload.addEventListener
let song = ["Hap-", "-py", "birth-", "-day", "to", "you!", "Hap-", "-py", "birth-", "-day", "to", "you!", "Hap-", "-py",
    "bi-", "-i-", "-ii-", "-iii-", "-iiii-", "-iiiii-", "-iiiiii-", "-irth-", "-daaaay-", "dear", "To-", "-nyyyyyyyyy!",
    "Hap-", "-py", "birth-", "-day", "to", "YOU!"];
let chords = ["re.mp3", "re.mp3", "mi.mp3", "re.mp3", "sol.mp3", "faSharp.mp3", "re.mp3", "re.mp3",
    "mi.mp3", "re.mp3", "la.mp3", "sol.mp3", "re.mp3", "re.mp3", "re2.mp3", "re2.mp3",
    "re2.mp3", "re2.mp3", "re2.mp3", "re2.mp3", "re2.mp3", "re2.mp3", "si.mp3", "sol.mp3",
    "faSharp.mp3", "mi.mp3", "do.mp3", "do.mp3", "si.mp3", "sol.mp3", "la.mp3", "sol.mp3"];
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let colorOption = 0;
let option = 0;

document.addEventListener("click", function (event) {
    var img1 = "./images/ialreadytoldyouoncewithmymouth.jpg";
    var img2 = "./images/chicken.jpg"
    if (option == chords.length - 1) {
        document.body.background = "url(img1)";
    }
    if (option == 0) {
        document.body.background = "url(img2)";
    }
    var chord = new Audio("music/" + chords[option]);
    chord.play();
    let phrase = song[option];
    let color = colors[colorOption];
    let button = document.createElement("button");
    document.getElementById("main").appendChild(button);
    button.innerHTML = phrase;
    if (option == song.length - 1) option = 0;
    else option++;
    if (colorOption == colors.length - 1) colorOption = 0;
    else colorOption++;
    let x = event.clientX;
    let y = event.clientY;
    button.style.left = x + "px";
    button.style.top = y + "px";
    button.style.color = color;
    if (color == "yellow") button.style.backgroundColor = "black";
});