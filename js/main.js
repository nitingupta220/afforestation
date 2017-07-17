$(window).load(function() {
    $("#preloader").fadeOut("slow");
});


$(document).ready(function() {
    $.ajax({
     type:"GET",
       url:"http://api.data.gov.in/resource/89fb1d3e-e7f6-4730-9bd6-ed835f02f738?format=json&api-key=YOURKEY",
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


