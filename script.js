$(function() {
//   (function(){
//     var width = window.innerWidth,
//     height = window.innerHeight;
//     console.log( width + ' : ' + height );

//     if (width >= 768) {
//     //Pen sticks to page (HCP-PAGE)
//     new ScrollMagic.Scene({
//         // duration: 2400,
//         duration: 2400,
//         offset: 0
//     })
//     .setPin(".pen")
//     .addTo(controller);

//     //Pen sticks to page (PATIENT-PAGE)
//     new ScrollMagic.Scene({
//         duration: 2300,
//         offset: 0
//     })
//     .setPin(".patient-pen")
//     .addTo(controller);
// } else if (width < 768) {
//         //Pen sticks to page (HCP-PAGE)
//     new ScrollMagic.Scene({
//         // duration: 2400,
//         duration: 1250,
//         offset: 0
//     })
//     .setPin(".pen")
//     .addTo(controller);

//     //Pen sticks to page (PATIENT-PAGE)
//     new ScrollMagic.Scene({
//         duration: 1250,
//         offset: 0
//     })
//     .setPin(".patient-pen")
//     .addTo(controller);

//     }

// }()); 
  
  
  
  $('[data-scrollmagic]').each(function (index, elem) {
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();
     
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
      triggerElement: elem,
      offset: 0 /* offset the trigger Npx below scene's top */
    })
    .setTween(tl)
    .addTo(scrollMagicController);

    // Add debug indicators fixed on right side
     scene.addIndicators(); 
    

  });
    $('.view-gallery button').on('click', function() {
  $('.box').toggleClass('animated');
  // $('ul').css({
  //   'max-width' : '100%'
  // });
});
});
