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
    },250);
  })
  
  var randomIntegerBetween = function(lowest,highest){
    // console.log(arguments);
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
  var wiggling = function(elment,duration){
    $(elment).animate({
      "margin-left": randomIntegerBetween(-30,+30) + 'px',
      "margin-top": randomIntegerBetween(-20,+20) + 'px',
    },duration, 'ease-in-out');
  }
  
  startWiggling = function(){
    if(!window._is_wiggling){
      setTimeout(function(){
        
        var circles = $('#balanced .circle');
        for(var i = 0; i < circles.length; i++){
          wiggleForever(circles[i]);
        }
        window._is_wiggling = true;
      },2000);
    }
  }
})