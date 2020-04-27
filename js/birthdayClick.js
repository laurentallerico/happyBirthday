

//document.onload.addEventListener
let song = ["Hap-", "-py", "birth-", "-day", "to", "you!", "Hap-", "-py", "birth-", "-day", "to", "you!", "Hap-", "-py",
    "bi-", "-i-", "-ii-", "-iii-", "-iiii-", "-iiiii-", "-iiiiii-", "-irth-", "-daaaay-", "-y", "-yy", "-yyy",
    "-yyyy", "dear", "To-", "-o-", "-oo-", "-ooo-", "-nyyyyyyyyy!", "Hap-", "-py", "birth-", "-day", "to", "YOU!"];
let chords = ["Re.mp3", "Re.mp3", "Mi.mp3", "Re.mp3", "Sol.mp3", "Fa#.mp3", "Re.mp3", "Re.mp3",
    "Mi.mp3", "Re.mp3", "La.mp3", "Sol.mp3", "Re.mp3", "Re.mp3", "Re2.mp3", "Re2.mp3",
    "Re2.mp3", "Re2.mp3", "Re2.mp3", "Re2.mp3", "Re2.mp3", "Re2.mp3", "Si.mp3", "Si.mp3", "Si.mp3",
    "Si.mp3", "Si.mp3", "Sol.mp3", "Fa#.mp3", "Fa#.mp3", "Fa#.mp3", "Fa#.mp3", "Mi.mp3",
    "Do.mp3", "Do.mp3", "Si.mp3", "Sol.mp3", "La.mp3", "Sol.mp3"];
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let colorOption = 0;
let option = 0;


document.addEventListener("click", function (event) {
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