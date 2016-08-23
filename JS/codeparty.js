(function(){

  var i = 0;

  function setImage(current,next){
    current.src = next.src.replace("_small","");//actualiza la nueva imagen
  }

  function advanceImage(current,next,j){//imagen ppal y la imagen i de la lista
    setImage(current,next);
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
    setImage(img,nextImg);
  }

  function PrevImg(img,lis){
    i -= 1;
    if(i == -1){
      i = lis.length;//hasta el tamaño de la lista de imagenes
    }
    var prevImg = lis[i].getElementsByTagName("img")[0];
    setImage(img,prevImg);
  }

  function changeInfo(imageInfo){
    var newText = document.querySelectorAll(".galeria li")[i].getElementsByTagName("P")[0].innerHTML;
    console.log(newText);
    imageInfo.innerHTML = newText;
  }

  /*-----------main-----------*/

  var gallery = document.querySelector(".galeria"),
      lis = document.getElementsByClassName("galeria")[0].getElementsByTagName("li"),
      arrows = document.getElementsByClassName("panelup")[0].getElementsByTagName("a"),
      imageInfo = document.querySelector(".panelup .info .letra"),
      displayInfo = document.querySelector(".displayInfo"),
      closeInfo = document.querySelector(".close"),
      eventInfo = document.querySelector("#EventInformation");

  var next = arrows[2],
      prev = arrows[0],
      imgppal = arrows[1].getElementsByTagName("img")[0];

  changeInfo(imageInfo);

  arrows[1].addEventListener("click",function(ev){
    ev.preventDefault();
  });

  next.addEventListener("click",function(ev){
    ev.preventDefault();
    NextImg(imgppal,lis);
    changeInfo(imageInfo);
  });
  prev.addEventListener("click",function(ev){
    ev.preventDefault();
    PrevImg(imgppal,lis);
    changeInfo(imageInfo);
  });

  // Event Delegation
  gallery.addEventListener('click', function (ev) {
    if (ev.target.nodeName === 'IMG') {
      for(var j = 0; j < lis.length; j++){
        var img = lis[j].getElementsByTagName("img")[0];
        if(img === ev.target){
          advanceImage(imgppal,ev.target,j);
          changeInfo(imageInfo);
        }
      }
    }
  });

  displayInfo.addEventListener("click",function(ev){
    ev.preventDefault();
    eventInfo.className = "";
  });

  closeInfo.addEventListener("click",function(){
    eventInfo.className = "hidden";
  });

}())
