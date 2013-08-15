Zepto(function($){
  
  function isScrolledIntoView(element){
      var viewTop =    $(window).scrollTop();
      var viewBottom = viewTop + $(window).height();

      var elementTop =  $(element).offset().top;
      var elementBottom = elementTop + $(element).height();

      return ((elementBottom >= viewTop) && (elementTop <= viewBottom)
        && (elementBottom <= viewBottom) &&  (elementTop >= viewTop) );
  }
  
  // Fires when document scrolls, don't need to check that often
  window._scroll_check = false;
  
  var randomIntegerBetween = function(lowest,highest){
    return (Math.ceil(Math.random()*highest) % (highest-lowest+1)) + lowest;
  }

  var wiggleForever = function(element){
    var duration = randomIntegerBetween(2000,5000);
    wiggling(element,duration)
    // Call myself again
    setTimeout(function(){
      wiggleForever(element);
    },duration+100);
  }
  
  var wiggling = function(element,duration){
    var heightWidth = randomIntegerBetween(75,150) + 'px';
    $(element).animate({
      "margin-left": randomIntegerBetween(-100,+100) + 'px',
      "margin-top": randomIntegerBetween(-50,+50) + 'px',
      "height": heightWidth,
      "width": heightWidth
    },duration, 'ease-in-out');
  }
  
  placeWigglesRandomly = function(){
    $('#balanced .circle').each(function(i,el){
      wiggling(el,0)
    })
  }
  placeWigglesRandomly();
  
  var bubble = function(element,duration){
    // Time the bubbles differently
    if(duration > 2000){
      var duration = randomIntegerBetween(2000,duration);
    }
    var heightWidth = randomIntegerBetween(20,40) + 'px';
    $(element).animate({
      "margin-left": randomIntegerBetween(-20,65) + 'px',
      "margin-top": randomIntegerBetween(-30,90) + 'px',
      "height": heightWidth,
      "width": heightWidth
    },duration, 'ease-in-out');
  }

  placeRandomly = function(){
    $('#test-tube-bubbles .circle').each(function(i,el){
      bubble(el,0)
    })
  };
  placeRandomly();
  
  var bubbleForever = function(element){
    var duration = randomIntegerBetween(5000,10000);
    bubble(element,duration)
    // Call myself again
    setTimeout(function(){
      bubbleForever(element,duration);
    },duration+100);
  }
  
  startBubbling = function(){
    if(!window._is_bubbling){
      setTimeout(function(){
        var bubbles = $('#test-tube-bubbles .circle');
        for(var i = 0; i < bubbles.length; i++){
          bubbleForever(bubbles[i]);
        }
        window._is_bubbling = true;
      },2000);
    }
    
  }
  
  startWiggling = function(){
    if(!window._is_wiggling){
      
      // Even once you scroll give it a moment...
      setTimeout(function(){
        $("#balanced .circle").animate({
          "left":"35%",
          "margin-left":"0px",
          "margin-top":"0px",
          "height":"100px",
          "width":"100px"
        },4000, 'ease-in-out');
        
      },750);
      
      setTimeout(function(){
        var circles = $('#balanced .circle');
        for(var i = 0; i < circles.length; i++){
          wiggleForever(circles[i]);
        }
        window._is_wiggling = true;
      },5000);
      
    }
  }
  
  $(document).ready(function(){
    if(isScrolledIntoView($("#test-tube")) && $(window).width() > 799){
      startBubbling();
    }
  })
  $(document).on("scroll",function(){
    // only check every 250
    if(window._scroll_check){
      window.clearTimeout(window._scroll_check);
      window._scroll_check = false;
    }
    window._scroll_check = setTimeout(function(){
      if(isScrolledIntoView($("#balanced"))){
        startWiggling();
      }
      
      if(isScrolledIntoView($("#test-tube")) && $(window).width() > 799){
        startBubbling();
      }
    },250);
  })
})