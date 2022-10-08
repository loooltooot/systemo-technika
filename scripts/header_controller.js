let header = document.getElementById("main-header");

let stick = () => {
    if(document.documentElement.scrollTop >= 960) {
        header.classList.add("sticked");
    }
    if(document.documentElement.scrollTop <= 960) {
        header.classList.remove("sticked");
    }
}

let unstick = () => {
    if(document.documentElement.scrollTop >= 960) {
        header.classList.remove("sticked");
    }
}

window.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        stick();
     }
    if (e.deltaY > 0) {
        unstick();
     }
})