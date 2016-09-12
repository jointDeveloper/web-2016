(function(){

  var makeCounter = (function () {
    var counter = 0;
    var increment = function (x) {
      if (typeof x == 'number') {
        counter += x;
      } else {
        counter += 1;
      }
    }
    var decrement = function (x) {
      if (typeof x == 'number') {
        counter -= x;
      } else {
        counter -= 1;
      }
    }
    var changeCounter = function (x) {
      if (typeof x == 'number') {
        counter = x;
      }
    }
    var getCounter = function () {
      return counter;
    }
    return {
      increment: increment,
      decrement: decrement,
      changeCounter: changeCounter,
      getCounter: getCounter
    }
  })();

  var setImage = function (current,next){
    current.src = next.src.replace("_small","");//actualiza la nueva imagen
  }

  var advanceImage = function (current,next,j){//imagen ppal y la imagen i de la lista
    setImage(current,next);
    i.changeCounter(j);
  }

  var restoreImage = function (current,lis){//imagen ppal y lista de imagenes(para poner en la que ibamos)
    current.src = lis[i.getCounter()].getElementsByTagName("img")[0].src;//actualiza la nueva imagen
  }

  var NextImg = function (img,lis){//imagen ppal y lista de imagenes disponibles
    i.increment();
    if(i.getCounter() >= lis.length){
      i.changeCounter(0);
    }
    console.log("i : ", i.getCounter());
    var nextImg = lis[i.getCounter()].getElementsByTagName("img")[0];
    setImage(img,nextImg);
  }

  var PrevImg = function (img,lis){
    i.decrement();
    console.log("i : ", i.getCounter());
    if(i.getCounter() == -1){
      i.changeCounter(lis.length-1);
    }
    var prevImg = lis[i.getCounter()].getElementsByTagName("img")[0];
    setImage(img,prevImg);
  }

  var changeInfo = function (){ //imageInfo
    var newText = document.querySelectorAll(".galeria li")[i.getCounter()].getElementsByTagName("P")[0].innerHTML;
    console.log("i : " , i.getCounter());
    console.log(newText);
    imageInfo.innerHTML = newText;
  }

  /*-----------main-----------*/

  var i = makeCounter;
  var a = 1;
  console.log("i inicial : " , i.getCounter());

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
