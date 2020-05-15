function invoke()
{
var interval=setInterval(function(){
if(document.getElementsByClassName("vjs-tech").length>0)
{
var video = document.getElementsByClassName("vjs-tech")[0];
video.currentTime = video.duration;
}
else if (document.querySelectorAll('div[aria-labelledby="go-to-next-item"]').length>0)
{
article(interval);

}
else if(document.querySelectorAll('button[id="next-item"]').length>0)
{
document.querySelectorAll('button[id="next-item"]')[0].click()
}
}, 5000);

}

function article(interval)
{
clearInterval(interval);
setTimeout(function() {
invoke();
document.querySelectorAll('div[aria-labelledby="go-to-next-item"]')[0].click();
},10000);

}

invoke();