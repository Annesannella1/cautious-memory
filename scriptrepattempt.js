
$(function() {
  
  $('[data-scrollmagic]').each(function (index, elem) {
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();
     
    var tween = TweenMax.to("#animate", 0.5,
                            {scale: 1.3,repeat: 5,yoyo: true}); 
    
    // Create Animations
    var title = $(elem).find('h3'),
        text = $(elem).find('p'),
        btn = $(elem).find('a');
    
    var tl = new TimelineMax({pause: true});    
    tl.add("start") // add timeline label
      .fromTo(title, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(text, 0.4, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(btn, 0.4, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
    
    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
      triggerElement: "#trigger", duration: 100%,
    })
    .setTween(tween)
    .addTo(scrollMagicController);

    // Add debug indicators fixed on right side
     scene.addIndicators(); 
  });
});
