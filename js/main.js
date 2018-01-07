$(window).load(function() {
    $("#preloader").fadeOut("slow");
});


$(document).ready(function() {
    $.ajax({
     type:"GET",
       url:"https://api.data.gov.in/resource/95944150-9ef3-457e-b991-0e4929d407b8?format=json&api-key=579b464db66ec23bdd0000014f8e0dd7773847b25df37f4cf70397c2",
       data: {},
    success: function(data){
        console.log(data);
         list1 = [];
        list2 = [];
        for (var i =0; i < data[records].length; i ++){
            list1.push(data[records][i]['area_afforested_in_plan_period_000_hectares_'])
            list2.push(data[records][i]['afforestation_expenditure_in_plan_period_ten_million_'])
               console.log(data['records'][i]['five_year_plan_period']);
            
            
        } 
           console.log(list1);
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



//            typeIt.js properties start from here



$("#string1").typeIt({
    strings: "Afforestation",
    speed: 80,
    autoStart: false
});

$("#string2").typeIt({
    strings: "Afforestation is the establishment of a forest or stand of trees in an area where there was no previous tree cover. Reforestation is the reestablishment of forest cover, either naturally (by natural seeding, coppice, or root suckers) or artificially (by direct seeding or planting).",
    speed: 0.1,
    autoStart: false
});
$("#string3").typeIt({
    strings: "About",
    speed: 80,
    autoStart: false
});


$("#string4").typeIt({
    strings: "Afforestation refers to the process of converting a non-forest land into a forest. Afforestation is highly important to maintain the biodiversity.India is an emerging or developing country whereas the controlling of Carbon emission is very much challenging for the policy makers. The main reason is that India needs much more versatile industries to create jobs for unemployment youths which can directly increase the per capita income and the overall GDP (Gross Domestic Product).Large industries and power plants need a large area to set up its facilities. In India, deforestation has happened in the past for creating Infrastructure (National Highways, Airports, etc.), Industries (Steel, Power, Fast Moving Consumer Goods – FMCG, Engineering, etc.), Mining (Coal, Minerals, Metals, etc.), Oil and Gas exploration, Thermal Power plants, etc.",
    speed: 0.1,
    autoStart: false
});
$("#string5").typeIt({
    strings: " Causes of Deforestation",
    speed: 80,
    autoStart: false
});
$("#string6").typeIt({
    strings: " We already mentioned that one of the causes of deforestation is harvesting natural resources through logging. Wood is a valuable raw material in construction or manufacturing, and the practice of logging prepares the trees for those purposes.However, forests are often cleared because those in charge of the woodland want to use the area for a different purpose. This is seen in all types of forests and all over the world, but arguably the most devastated forest areas are in the tropics. Tropical forests are forests that span both sides of the Equator, and they are the most diverse ecosystems on the planet.In tropical forests, as well as forests farther away from the Equator, one of the main causes of deforestation is to make room for agriculture. Whether the farming is by individuals who wish to grow only enough food for their own use or performed commercially, agriculture is often cited as the leading cause of deforestation. Cattle ranching is another cause of deforestation. Much like farmers, cattle ranchers clear forests to make room for grazing cattle.",
    speed: 0.1,
    autoStart: false
});
$("#string7").typeIt({
    strings: "Why we need Afforestation?",
    speed: 80,
    autoStart: false
});
$("#string8").typeIt({
    strings: "Afforestation in drainage basin enhances interception and storage and reduces the surface runoff. This reduces a river’s discharge and so makes it less likely to flood. Afforestation, when combined with floodplain zoning, can be very effective in reducing the risk of flooding. Forests help reduce the impact of flooding by delaying and reducing the size of floods, dispersing the water in a more gradual manner than over bare ground. The tree roots decrease erosion and stabilize the soil, this means that less soil is carried by surface runoff and through flow into the river, reducing the channel capacity. Due to afforestation new habitats are created for wildlife. Vast destruction of forest areas leaves animals homeless. Forests provide a home, food source and place of protection for most species of animal. Therefore planting new trees and plant and creating forest lands will provide shelter to these animals. It will also provide grazing facilities and solve the problem of fodder for cattle.",
    speed: 0.1,
    autoStart: false
});
$("#string9").typeIt({
    strings: "Steps taken by Govt.",
    speed: 80,
    autoStart: false
});
$("#string10").typeIt({
    strings: "As per India State of Forest Report-2013, the total forest cover in the country is 697,898 square kilometers which is 21.23% of the total geographical area of the country. There is a net increase of 5871 square kilometers in the forest cover of the country as compared with India State of Forest Report-2011. It is also a fact that the density of population has increased in the State of Maharashtra, Karnataka, Chhattisgarh, Odisha and Jharkhand. In order to increase the forest and tree cover and improve the quality of existing forest, afforestation in the country is taken up under various Centrally Sponsored Schemes such as National Afforestation Programme (NAP), Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS), Integrated Watershed Management Programme (IWMP), National Bamboo Mission (NBM) and under Compensatory Afforestation Fund Management and Planning Authority (CAMPA), 13th Finance Commission Grant, different State Plan/ Non- Plan Schemes including externally aided projects. National Afforestation Programme (NAP) of the Ministry of Environment & Forests is a 100% Centrally Sponsored Scheme for Afforestation and tree plantation and eco-restoration of degraded forests and adjoining areas in the country. The Scheme is being implemented through a decentralized mechanism of State Forest Development Agency (SFDA) at State level, Forest Development Agency (FDA) at Forest Division level and Joint Forest Management Committees (JFMCs) at Village levels. The Ministry has also released funds to the tune of Rs.4994.55 lakhs and 1265.50 lakhs to the states in the financial year 2012-13 and 2013-14 for preparatory activities for implementation of Green India Mission. The activities undertaken by the State Governments under preparatory phase include institutional strengthening, training, identification of landscapes and preparation of Perspective Plan for implementation of Green India Mission.",
    speed: 0.1,
    autoStart: false
});
$("#string11").typeIt({
    strings: "Conclusion",
    speed: 80,
    autoStart: false
});
$("#string12").typeIt({
    strings: "Afforesting is a positive effort in curbing the over-use and destruction of natural forests. If done with proper planning and at appropriate sites, it can become a commercially viable solution for many human needs without harming the balance of nature.",
    speed: 0.1,
    autoStart: false
});


