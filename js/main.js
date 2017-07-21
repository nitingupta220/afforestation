$(window).load(function() {
    $("#preloader").fadeOut("slow");
});


$(document).ready(function() {
    $.ajax({
     type:"GET",
       url:"https://api.data.gov.in/resource/89fb1d3e-e7f6-4730-9bd6-ed835f02f738?format=json&api-key=YOURKEY",
       data: {},
    success: function(data){
         list1 = [];
        list2 = [];
        for (var i =0; i < data['records'].length; i ++){
            list1.push(data['records'][i]['area_afforested_in_plan_period_000_hectares_'])
            list2.push(data['records'][i]['afforestation_expenditure_in_plan_period_ten_million_'])
//                console.log(data['records'][i]['five_year_plan_period']);
            
            
        } 
//            console.log(list1)
        var ctx = document.getElementById("myChart").getContext("2d");
        var chart = new Chart(ctx, {
        type : 'bar',
         data: {
            labels: ["1951-56", "1956-61", "1961-66", "1966-69", "1969-74", "1974-1979", "1979-1980", "1980-1985", "1985-1990", "1990-91" ],
            datasets: [{
                label: "Area Afforested In Plan Period ( '000 hectares)",
                backgroundColor: '#DCE35B',
                borderColor: '#DCE35B',
                
                data: list1,


            },{
                label: "Afforestation Expenditure In Plan Period (` Ten Million)",
                backgroundColor: '#45B649',
                borderColor: '#45B649',
                data: list2,
                


            }],

        },
        options : {}
    });
//            console.log(data['records']);
       
        
//        console.log(list1);
//        console.log(list2);


    },
 });



    
    
   
    
});



$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 600) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-fixed-top").css("background-color", "#45B649"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-fixed-top").css("background-color", "#45B649"); // if not, change it back to transparent
        }
      });
    });


            $(document).ready(function(){
              // Add scrollspy to <body>
              $('body').scrollspy({target: ".navbar", offset: 50});   

              // Add smooth scrolling on all links inside the navbar
              $("#navbar a button").on('click', function(event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                  // Prevent default anchor click behavior
                  event.preventDefault();

                  // Store hash
                  var hash = this.hash;

                  // Using jQuery's animate() method to add smooth page scroll
                  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                  $('html, body').animate({
                    scrollTop: $(hash).offset().top
                  }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                  });
                }  // End if
              });
            });
            


//Video settings 
var video = document.querySelector('video');
var container = document.querySelector('#container');

var setVideoDimensions = function () {
  // Video's intrinsic dimensions
  var w = video.videoWidth;
  var h = video.videoHeight;
  
  // Intrinsic Ratio
  // Will be more than 1 if W > H and less if W < H
  var videoRatio = (w / h).toFixed(2);
  
  // Get the container's computed styles
  //
  // Also calculate the min dimensions required (this will be
  // the container dimentions)
  var containerStyles = window.getComputedStyle(container);
  var minW = parseInt( containerStyles.getPropertyValue('width') );
  var minH = parseInt( containerStyles.getPropertyValue('height') );
  
  // What's the min:intrinsic dimensions
  //
  // The idea is to get which of the container dimension
  // has a higher value when compared with the equivalents
  // of the video. Imagine a 1200x700 container and
  // 1000x500 video. Then in order to find the right balance
  // and do minimum scaling, we have to find the dimension
  // with higher ratio.
  //
  // Ex: 1200/1000 = 1.2 and 700/500 = 1.4 - So it is best to
  // scale 500 to 700 and then calculate what should be the
  // right width. If we scale 1000 to 1200 then the height
  // will become 600 proportionately.
  var widthRatio = minW / w;
  var heightRatio = minH / h;
  
  // Whichever ratio is more, the scaling
  // has to be done over that dimension
  if (widthRatio > heightRatio) {
    var newWidth = minW;
    var newHeight = Math.ceil( newWidth / videoRatio );
  }
  else {
    var newHeight = minH;
    var newWidth = Math.ceil( newHeight * videoRatio );
  }
  
  video.style.width = newWidth + 'px';
  video.style.height = newHeight + 'px';
};

video.addEventListener('loadedmetadata', setVideoDimensions, false);
window.addEventListener('resize', setVideoDimensions, false);