$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    $('.anit').each(function(){
        var ourScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.73,
        reverse: false
        
    })
    .setClassToggle(this, 'fade-in') // add the class to show up
    .addTo(controller);
        
        
        
        
        
        
        
    });
    
    
    $('.f-s').each(function(){
    var ourScene2 = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.73,
    reverse: false,
        
    })
    .setClassToggle(this, 'ff-s') // add the class to show up
    .addTo(controller);
        
        
        
        
        
        
        
    });
    

    
    
    
    
});