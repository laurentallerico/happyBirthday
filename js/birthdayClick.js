

//document.onload.addEventListener
let song = ["Hap-", "-py", "birth-", "-day", "to", "you!", "Hap-", "-py", "birth-", "-day", "to", "you!", "Hap-", "-py",
    "bi-", "-i-", "-i-", "-i-", "-i-", "-i-", "-i-", "-irth-", "-daaaay-", "-y", "-yy", "-yyy", "-yyyy", "dear", "To-", "-o-",
    "-oo-", "-ooo-", "-nyyyyyyyyy!", "Hap-", "-py", "birth-", "-day", "to", "YOU!"];
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let colorOption = 0;
let option = 0;


document.addEventListener("click", function (event) {
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
});