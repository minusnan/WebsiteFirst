
    var i=0;
    var image=document.getElementById("image");
    // Добавьте свои картинки в массив через запятую
    var imgs=new Array('media/number 1.jpg', 'media/number 2.jpg','media/number 3.jpg');
    function imgsrc() {
    i++;i%=imgs.length;
    image.src = imgs[i];
}
