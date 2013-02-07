//==============================================================================
function initCountdownEN(year, month, day, hour) {
  
  var start = new Date(year, month - 1, day, hour);      
  
  setInterval(function() {
    var t = start - new Date();
    var days, hours, mins, secs;        
    days = Math.floor(t / (24 * 3600000));
    t -= days * 24 * 3600000;
    hours = Math.floor(t / 3600000);
    t -= hours * 3600000;
    mins = Math.floor(t / 60000);
    t -= mins * 60000;
    secs = Math.floor(t / 1000);
    $('#countdown-text').html('Rendez-vous in '
      + days + (days > 1 ? ' days ' : ' day ') 
      + hours + (hours > 1 ? ' hours ' : ' hour ')
      + mins + (mins > 1 ? ' minutes ' : ' minute ')
      + secs + (secs > 1 ? ' seconds' : ' second')
    );
  }, 1000);
  
}

//==============================================================================
function initCountdownCN(year, month, day, hour) {
  
  var start = new Date(year, month - 1, day, hour);      
  
  setInterval(function() {
    var t = start - new Date();
    var days, hours, mins, secs;        
    days = Math.floor(t / (24 * 3600000));
    t -= days * 24 * 3600000;
    hours = Math.floor(t / 3600000);
    t -= hours * 3600000;
    mins = Math.floor(t / 60000);
    t -= mins * 60000;
    secs = Math.floor(t / 1000);
    $('#countdown-text').html('离活动开始还有 '
      + days + '天 '
      + hours + '小时 '
      + mins + '分钟 '
      + secs + '秒'
    );
  }, 1000);
  
}

//==============================================================================
function initMenuScrollAnimation() {
  
  var SCROLL_TIME = {
    '#about': 800, 
    '#whenwhere': 1200, 
    '#faq': 1400, 
    '#contact': 1800
  };
  
  $('nav a').click(function() {        
    var sectionId;
    if (/(#[^#]+)$/.test(this.href)) {
      sectionId = RegExp.$1;
      $('html, body').animate({        
        scrollTop: $(sectionId).offset().top
      }, SCROLL_TIME[sectionId]);  
    }      
  });
  
}