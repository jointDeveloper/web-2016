(function(){

  function Perfiles(){
      window.location="HTML/perfiles.html";
  }
  function Comunidad(){
      window.location="HTML/comunidad.html";
  }
  function About(){
      window.location="HTML/about.html";
  }
  function Eventos(){
      window.location="HTML/eventos.html";
  }
  function Portafolio(){
      window.location="HTML/portafolio.html";
  }
  function Contacto(){
      window.location="HTML/contacto.html";
  }
  function Apoyanos(){
      window.location="HTML/apoyanos.html";
  }
  function Blog(){
      window.location="HTML/blog.html";
  }

  var perfiles = document.getElementsByClassName('Perfiles'),
      comunidad = document.getElementsByClassName('Comunidad'),
      about = document.getElementsByClassName('About'), //quienes somos
      eventos = document.getElementsByClassName('Eventos'),
      portafolio = document.getElementsByClassName('Portafolio'),
      contacto = document.getElementsByClassName('Contacto'),
      apoyanos = document.getElementsByClassName('Apoyanos'),
      blog = document.getElementsByClassName('Blog');

  perfiles[0].addEventListener("click",Perfiles);
  comunidad[0].addEventListener("click",Comunidad);
  about[0].addEventListener("click",About);
  eventos[0].addEventListener("click",Eventos);
  portafolio[0].addEventListener("click",Portafolio);
  contacto[0].addEventListener("click",Contacto);
  apoyanos[0].addEventListener("click",Apoyanos);
  blog[0].addEventListener("click",Blog);

}())
