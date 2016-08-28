function mostrarItemHc(panel){
var itemHoraCodigo = document.getElementById("opcionItemHorasDeCodigo");
var itemEntrenamiento = document.getElementById("opcionItemEntrenamiento");
var itemDesarrollo = document.getElementById("opcionItemDesarrolloDeProyectos");

  if (panel==1){

    itemHoraCodigo.style.display='block';
    itemEntrenamiento.style.display='none';
    itemDesarrollo.style.display='none';
  }
  if (panel==2){
    itemHoraCodigo.style.display='none';
    itemEntrenamiento.style.display='block';
    itemDesarrollo.style.display='none';
  }
  if (panel==3){
    itemHoraCodigo.style.display='none';
    itemEntrenamiento.style.display='none';
    itemDesarrollo.style.display='block';
  }
}
