$(document).ready(function(){
   var scrollorama1 = $.scrollorama({
        blocks:'.box'
    });
    scrollorama1.animate('#certificate', {
        delay:1150, duration: 1070, property: 'top', start: 2500, end: -550    
    });
    scrollorama1.animate('#certificate2', {
        delay:1250, duration: 1100, property: 'top', start: 3000, end: -550
    });
    scrollorama1.animate('#quote', {
        delay:1300, duration: 1200, property: 'top', start: 3500, end: -550
    });
    scrollorama1.animate('#pikachu', {
        delay:1400, duration: 1300, property: 'top', start: 4000, end: -500
    });
    scrollorama1.animate('#ishop', {
        delay:1500, duration: 1400, property: 'top', start: 4500, end: -550
    });
    scrollorama1.animate('#design1', {
        delay:1600, duration: 1500, property: 'top', start: 5000, end: -550
    });
    scrollorama1.animate('#design2', {
        delay:1700, duration: 1600, property: 'top', start: 5500, end: -550
    });
    scrollorama1.animate('#android', {
        delay:1800, duration: 1700, property: 'top', start:6000, end: -550
    });
    scrollorama1.animate('#ttt', {
        delay:1810, duration: 1800, property: 'top', start:6500, end: -300
    });
    scrollorama1.animate('#simon', {
        delay:1850, duration: 1900, property: 'top', start: 7000, end: -300
    });
    
   
    var scrollorama2 = $.scrollorama({
        blocks:'.box_title'
    });
    scrollorama2.animate('#certificate_title', {
        delay:1000, duration: 1200, property: 'top', start: 2300, end: -276   
    });
    scrollorama2.animate('#certificate2_title', {
        delay:1070, duration: 1300, property: 'top', start: 2800, end: -276
    });
    scrollorama2.animate('#quote_title', {
        delay:1100, duration: 1450, property: 'top', start: 3200, end: -276
    });
    scrollorama2.animate('#pikachu_title', {
        delay:1200, duration: 1550, property: 'top', start: 3700, end: -276
    });
    scrollorama2.animate('#ishop_title', {
        delay:1300, duration: 1650, property: 'top', start: 4200, end: -276
    });
    scrollorama2.animate('#design1_title', {
        delay:1400, duration: 1750, property: 'top', start: 4700, end: -276
    });
    scrollorama2.animate('#design2_title', {
        delay:1500, duration: 1850, property: 'top', start: 5200, end: -276
    });
    scrollorama2.animate('#android_title', {
        delay:1600, duration: 1950, property: 'top', start: 5700, end: -276
    });
    scrollorama2.animate('#ttt_title', {
        delay:1650, duration: 1990, property: 'top', start: 6200, end: -276
    });
    scrollorama2.animate('#simon_title', {
        delay:1750, duration: 2050, property: 'top', start: 6700, end: -276
    });
    
    var scrollorama3 = $.scrollorama({
        blocks:'.scroller'
    });
    
    scrollorama3.animate('#layer1', {
        delay:80, duration: 4000, property: 'top', start: 8000, end: -8000
    })
    
    scrollorama3.animate('#layer2', {
        delay:80, duration: 4000, property: 'bottom', start: 8000, end: -8000
    });
    
    scrollorama3.animate('.mynav', {
        delay:50, duration: 300, property: 'top', start: 0, end: -75
    });
    scrollorama3.animate('#myLogo', {
        delay:50, duration: 300, property: 'top', start: 10, end: -75
    });
    
   // $('.portfolio').parallax({imageSrc:'white_back.jpeg', speed:'0.2', position:'center'});
   // $('.about').parallax({imageSrc:'WEB-DESIGNER-ECOMMERCE-WEB-DEVELOPMENT.jpg', speed:'0.2', position:'center'});
});