$(function(){
	var l_img=$("#more_img .l_img img");
	$("#more_img li ").click(function(){
		var _img=$(this).find("img");
		l_img.attr("src",_img.attr("src"));
	})
	if(isIE<9){
		$(".query li:odd").addClass("even");
	}
	
})