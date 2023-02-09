var clickBtn= document.getElementById("downloadBtn");
var openApp = document.getElementsByClassName("openDiscord");

function urlOpen(url){
    clickBtn.addEventListener("click", function(){
        window.open(url)
        console.log("Its working")
    })
}

clickBtn.addEventListener("click", urlOpen("https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86"));


openApp[0].addEventListener("click", function(){
    window.open("discord://")
    console.log("Its working")
});

