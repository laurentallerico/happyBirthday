

//document.onload.addEventListener
let song = ["Hap", "py", "birth", "day", "to", "you!", "Hap", "py", "birth", "day", "to", "you!", "Happ", "y",
    "y", "y", "y", "y", "y", "y", "bir", "r", "r", "th", "daaaa", "y", "yy", "yyy", "yyyy", "dear", "To", "ny",
    "Hap", "py", "birth", "day", "to", "YOU!"];
let option = 0


document.addEventListener("click", function (event) {
    let phrase = song[option]
    let button = document.createElement("button");
    document.getElementById("main").appendChild(button);
    button.innerHTML = phrase;
    if (option == song.length - 1) option = 0;
    else option++;
    let x = event.clientX
    let y = event.clientY
    button.style.left = x + "px"
    button.style.top = y + "px"
});