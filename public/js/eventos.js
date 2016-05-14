(function(){

  var i = 0;

  function NextImg(img){
    i += 1;
    if(i == 4){
      i = 0;
    }
    //img.src = "../public/images/CodeParty2015Pereira/"+i+".jpg";
    //galeria.src
    alert(i);
  }

  function PrevImg(img){
    i -= 1;
    if(i == -1){
      i = 3;//hasta el tamaño de la lista de imagenes
    }
    alert(i);
  }

  var lis = document.getElementsByClassName("galeria")[0].getElementsByTagName("li");
  var arrows = document.getElementsByClassName("imagen")[0].getElementsByTagName("a");

  var next = arrows[2];
  var prev = arrows[0];
  var imgppal = arrows[1];

  next.addEventListener("click",function(){
    NextImg(imgppal);
  });
  prev.addEventListener("click",function(){
    PrevImg(imgppal);
  });

}())
