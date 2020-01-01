$(document).ready(function(){
    
    /*---------------sticky nav-------------------*/
    $('.features').waypoint(function(direction){
        
        if(direction =='down')
            $('nav').addClass('sticky');
        else
            $('nav').removeClass('sticky');
    },{offset: '60px'});
    
    /*---------------button scroll-------------------*/
    $('.im-hungry').click(function(){
        
        $('html,body').animate({scrollTop: $('.plans').offset().top}, 1000)
    });
    
    $('.show-me-more').click(function(){
        
        $('html,body').animate({scrollTop: $('.features').offset().top}, 1000)
    });
    
    /*---------------nav scroll-------------------*/
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
      )
    })
    
});