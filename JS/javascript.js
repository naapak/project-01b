


$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1050:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

});


 $(document).ready( function(){

	
 	$(".button1").on("click",function(){
 		$("#counter").show();
 			var current_val =$("#counter").val();
			 var new_value = parseInt(current_val++) +1; 
			 $("#counter").val(new_value);

										});

									});