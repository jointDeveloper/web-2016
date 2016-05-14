(function(){

  var i = 0;

  function NextImg(img,lis){//imagen ppal y lista de imagenes disponibles
    i += 1;
    if(i == 4){
      i = 0;
    }
    var nextImg = lis[i].getElementsByTagName("img")[0];
    img.src = nextImg.src;//actualiza la nueva imagen
  }

  function PrevImg(img,lis){
    i -= 1;
    if(i == -1){
      i = 3;//hasta el tamaño de la lista de imagenes
    }
    var prevImg = lis[i].getElementsByTagName("img")[0];
    img.src = prevImg.src;//actualiza la nueva imagen
  }

  var lis = document.getElementsByClassName("galeria")[0].getElementsByTagName("li");
  var arrows = document.getElementsByClassName("imagen")[0].getElementsByTagName("a");

  var next = arrows[2];
  var prev = arrows[0];
  var imgppal = arrows[1].getElementsByTagName("img")[0];

  next.addEventListener("click",function(){
    NextImg(imgppal,lis);
  });
  prev.addEventListener("click",function(){
    PrevImg(imgppal,lis);
  });

}())
