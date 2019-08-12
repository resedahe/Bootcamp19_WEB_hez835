$(document).ready(function(){

  drawChart();
  

});

function drawChart(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['Hunting food','Drinking Coffee','Working in tech', 'Watching Movies', 'Reading books','Doing Yoga','Drawing rabbits','Visiting arts exhibition', 'Playing the violin','Traveling outside the island'],
        datasets: [{
           label: 'My Weekdays before joining DT',
            data: [3,8,10,1,6,8,2,0,1,0],
            fill:true,
            backgroundColor: 'rgba(188, 227, 222,0.6)',
            pointHoverBackgroundColor: '#9cdbd8',
            pointBackgroundColor: '#71bdb9',
            bordercolor: '#d190aa',
            boderwitdh: 3
        },
        {
           label: 'My Weekends and free time before joining DT',
            data: [10,2,0,3,2,6,7,7,3,4],
            backgroundColor: 'rgba(237, 185, 189, 0.6)',
            pointHoverBackgroundColor: '#FFC0CB',
            pointBackgroundColor: '#f08b95',
            bordercolor: '#76a8a0',
            boderwitdh: 3

        }]

    }


});
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};