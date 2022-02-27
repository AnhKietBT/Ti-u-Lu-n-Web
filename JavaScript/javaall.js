var kichthuoc = document.getElementsByClassName("slide-show")[0].clientWidth;
var chuyenslide = document.getElementsByClassName("chuyen-slide")[0];
var Img = document.getElementsByClassName("picture");
var Max = kichthuoc * Img.length;
Max -= kichthuoc;
var chuyen = 0;
function Next(){
    if(chuyen < Max)
    {
        chuyen += kichthuoc;
        chuyenslide.style.marginLeft = '-' + chuyen + 'px';
    } 
    else 
    {
        chuyen = 0;
        chuyenslide.style.marginLeft = chuyen + 'px';
    }
}
setInterval(function(){
    Next();
},2200);
//hết phần javascript của phần chuyển slide

var click = document.getElementsByClassName("eventclick")[0];
var button = document.getElementsByClassName("but")[0];
var dem = 0;
setTimeout(hidden(),0);
function hidden(){
    click.style.display = 'none';
}
button.addEventListener("click",function(){
    dem += 1;
    if(dem % 2 != 0){
        click.style.display = 'flex';
    }
    else{
        click.style.display = 'none';
    }
})
//hết phần ẩn hiện thẻ