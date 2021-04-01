const img_src = ["img/mikuImg.jpg", "img/shimakazeImg.jpg", "img/ninoImg.jpg"];
let num = -1;
 
function slide_time() {
    if (num === 2) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById("slide_img").src = img_src[num];
}
 
setInterval(slide_time, 5300);