$("li.down").click(function(e){
	   var _this=$(this);
	   if(_this.is(".down-up")){
	     $(this).removeClass("down-up");
	   }else{
		   $(this).addClass("down-up");
	   }
	   e.stopPropagation();
    })
$("body").click(function(){
	$("li.down").removeClass("down-up");
});