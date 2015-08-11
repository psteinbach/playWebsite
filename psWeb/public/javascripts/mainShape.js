var enableSubmit = function(button) {
    $(button).removeAttr("disabled");
}

$('.shape').shape();
$( document ).ready(function() {

/*    $('#firstSide').blurjs({
        source: '#frontPageImage',
    	overlay: 'rgba(0,100,100,0.1)',
    	offset: { x: -40, y: -25 }
    });*/


    var shapeSide = 1;
    function chooseSide(turnVal) {
    	var nextSide = shapeSide + turnVal;
    	if(nextSide === 0 || nextSide == 4){
    		shapeSide = 4;
    		console.log("Fourth");
    		$('.shape').shape('set next side', '.fourth.side');
        }
    	else if (nextSide == 1 || nextSide == 5){
    	    shapeSide = 1;
    		console.log("First");
    		$('.shape').shape('set next side', '.first.side');
    	}
    	else if (nextSide == 2){
    	    shapeSide = 2;
    	    console.log("Second");
    		$('.shape').shape('set next side', '.second.side');
    	}
    	else {
    	    shapeSide = 3;
    	    console.log("Third");
    		$('.shape').shape('set next side', '.third.side');
    	}
    }
    
    
    
    $( "#rightArrow" ).click(function(){
	    chooseSide(1);
        $('.shape').shape('flip right');
        var button = this;
        $(this).attr("disabled", true);
        setTimeout(function() { enableSubmit(button) }, 700);
    });
    
    $( "#leftArrow" ).click(function(){
	    chooseSide(-1);
        $('.shape').shape('flip left');
        var button = this;
        $(this).attr("disabled", true);
        setTimeout(function() { enableSubmit(button) }, 700);
    }); 
});

