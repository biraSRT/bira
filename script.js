let vid = document.getElementById("vid");
let mutebtn = document.getElementById("mutebtn");

//add event listeners
mutebtn.addEventListener("click", vidmute, false);

//function
function vidmute() {
    if(vid.muted) {
        vid.muted = false;
        mutebtn.innerHTML = "Mute";
    } else {
        vid.muted = true;
        mutebtn.innerHTML = "Unmute"
    }
}