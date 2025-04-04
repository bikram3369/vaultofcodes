const leftArrow = document.getElementById("left-arr")
const rightArrow = document.getElementById("right-arr")

let video1 = document.getElementById("video-1")
let video2 = document.getElementById("video-2")
let video3 = document.getElementById("video-3")
let video4 = document.getElementById("video-4")
let video5 = document.getElementById("video-5")


function toggleControls(video,bool) {

    if (bool) {
        video.setAttribute("controls","controls") 
        }
    else {
        if (video.hasAttribute("controls")) {
            video.removeAttribute("controls")  
        } 
    }
}

rightArrow.onclick = function() {


    video1.style.left = "102%"
    video2.style.left = "-33%"
    video3.style.left = "0"
    video4.style.left = "32.5%"
    video5.style.left = "69%"

    video3.style.width = "31%"
    video3.style.height = "80%"
    video3.style.top = "10%"

    video4.style.width = "35%"
    video4.style.height = "100%"
    video4.style.top = "0%"   

    toggleControls(video3,false)
    toggleControls(video4,true)

    video1.pause();
    video1.currentTime = 0;
    video2.pause();
    video2.currentTime = 0;
    video3.pause();
    video3.currentTime = 0;
    video4.pause();
    video4.currentTime = 0;
    video5.pause();
    video5.currentTime = 0;

    video1.style.zIndex = 20
    video2.style.zIndex = 25
    video3.style.zIndex = 25
    video4.style.zIndex = 75
    video5.style.zIndex = 25

    let tempVideo1 = video1
    
    video1 = video2
    video2 = video3
    video3 = video4
    video4 = video5
    video5 = tempVideo1
};

leftArrow.onclick = function() {


    video1.style.left = "0"
    video2.style.left = "32.5%"
    video3.style.left = "69%"
    video4.style.left = "102%"
    video5.style.left = "-33%"

    video3.style.width = "31%"
    video3.style.height = "80%"
    video3.style.top = "10%"

    video2.style.width = "35%"
    video2.style.height = "100%"
    video2.style.top = "0%"   

    toggleControls(video3,false)
    toggleControls(video2, true)

    video1.pause();
    video1.currentTime = 0;
    video2.pause();
    video2.currentTime = 0;
    video3.pause();
    video3.currentTime = 0;
    video4.pause();
    video4.currentTime = 0;
    video5.pause();
    video5.currentTime = 0;
    
    video1.style.zIndex = 25
    video2.style.zIndex = 75
    video3.style.zIndex = 25
    video4.style.zIndex = 25
    video5.style.zIndex = 20

    let tempVideo5 = video5
    
    video5 = video4
    video4 = video3
    video3 = video2
    video2 = video1
    video1 = tempVideo5
};
