(function(){
        $('section').waypoint(function(direction) {
          console.log("hola");
            //var activeSection = $(this).next();
            var activeSection = $(this);
            if(direction === 'down'){
                activeSection = $(this).next();
            }
            //activeSection = $(this);
            var sectionId   = activeSection.attr('id');
            $('ul li').removeClass('active');
            $('ul li.' + sectionId).addClass('active');
            console.log(activeSection);
        });
});
