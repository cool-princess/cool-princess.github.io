var val1 = 100;
var $circle1 = $('#svg1 #bar1');

var radius1 = $circle1.attr('r');
var circumference1 = Math.PI*(radius1*2);

$circle1.css({ strokeDashoffset: circumference1});

var pct1 = (val1/100)*circumference1;

var obj1 = {
  pct1: 0
};

TweenLite.to(obj1, .7, {
  pct1: -pct1,
  delay: 1,
  onUpdate: function () {
    $circle1.css({ strokeDashoffset: obj1.pct1-circumference1});
  }
});

var val2 = 100;
var $circle2 = $('#svg2 #bar2');

var radius2 = $circle2.attr('r');
var circumference2 = Math.PI*(radius2*2);

$circle2.css({ strokeDashoffset: circumference2});

var pct2 = (val2/100)*circumference2;

var obj2 = {
  pct2: 0
};

TweenLite.to(obj2, .7, {
  pct2: -pct2,
  delay: 1,
  onUpdate: function () {
    $circle2.css({ strokeDashoffset: obj2.pct2-circumference2});
  }
});

var val3 = 100;
var $circle3 = $('#svg3 #bar3');

var radius3 = $circle3.attr('r');
var circumference3 = Math.PI*(radius3*2);

$circle3.css({ strokeDashoffset: circumference3});

var pct3 = (val3/100)*circumference3;

var obj3 = {
  pct3: 0
};

TweenLite.to(obj3, .7, {
  pct3: -pct3,
  delay: 1,
  onUpdate: function () {
    $circle3.css({ strokeDashoffset: obj3.pct3-circumference3});
  }
});

$(window).on('load', function() {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });

  $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
    aos_init();
  });

});

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 60 - Math.random() * 30;


  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 80;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

function menuClick(x) {
  x.classList.toggle("rotate");
  document.querySelector(".main-part").classList.toggle("swift1");
  document.querySelector(".menu-bar").classList.toggle("expand");
  document.querySelector(".menu-bar-section").classList.toggle("show");
  document.querySelector(".menu-bar-header").classList.toggle("zero");
}

function mobileMenuClick(x) {
  document.querySelector(".side-bar").classList.toggle("swift2");
}

jQuery(function($) {
  $('.main-part').on('scroll', function() {
     if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      document.querySelector(".menu-bar-bottom-to-scroll").classList.add("hide");
      document.querySelector(".menu-bar-top-to-scroll").classList.add("d-flex");
     }
     else if($(this).scrollTop() == 0) {
      document.querySelector(".menu-bar-bottom-to-scroll").classList.remove("hide");
      document.querySelector(".menu-bar-top-to-scroll").classList.remove("d-flex");
     }
  });
});
