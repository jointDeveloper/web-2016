(function(){

  var i = 0;

  function setImage(current,next){//imagen ppal y la imagen i de la lista
    current.src = next.src;//actualiza la nueva imagen
  }

  function advanceImage(current,next,j){//imagen ppal y la imagen i de la lista
    current.src = next.src;//actualiza la nueva imagen
    i = j;
  }

  function restoreImage(current,lis){//imagen ppal y lista de imagenes(para poner en la que ibamos)
    current.src = lis[i].getElementsByTagName("img")[0].src;//actualiza la nueva imagen
  }

  function NextImg(img,lis){//imagen ppal y lista de imagenes disponibles
    i += 1;
    if(i == lis.length){
      i = 0;
    }
    var nextImg = lis[i].getElementsByTagName("img")[0];
    img.src = nextImg.src;//actualiza la nueva imagen
  }

  function PrevImg(img,lis){
    i -= 1;
    if(i == -1){
      i = lis.length;//hasta el tamaño de la lista de imagenes
    }
    var prevImg = lis[i].getElementsByTagName("img")[0];
    img.src = prevImg.src;//actualiza la nueva imagen
  }

  /*-----------main-----------*/

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

  /*for(var j = 0; j < lis.length; j++){
    var img = lis[j].getElementsByTagName("img")[0];
    img.addEventListener("mouseover",function(){
      setImage(imgppal,img);
      console.log("hola");
    });
  }

  for(var j = 0; j < lis.length; j++){
    var img = lis[j].getElementsByTagName("img")[0];
    img.addEventListener("mouseover",function(){
      restoreImage(img,lis);
      console.log("adios");
    });
  }*/

  for(var j = 0; j < lis.length; j++){
    var img = lis[j].getElementsByTagName("img")[0];
    img.addEventListener("onclick",function(){
      advanceImage(img,lis,j);
      console.log("click");
    });
  }

}())
