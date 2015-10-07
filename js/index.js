//banner滚动
$.fn.bannerSlide=function(){
	var _this=$(this),
	    _liA=_this.find("li"),
		maxL=_liA.length,
		index=0,next=1,
		clearTime=null,
		time=1E4,left,right,
		speen=5E2;
	if(maxL<2){return false;}
	//创建按钮对象
	 var objNum=document.createElement("div");
	 objNum.className="num";
	 var _span=document.createElement("span");
	_liA.each(function(i){
		var j=document.createElement("span");
		(i===0)&&(j.className="on");
		objNum.appendChild(j);
	});
	_this[0].appendChild(objNum);
	var _i=document.createElement("i");
	left=_i.cloneNode(true),right=_i.cloneNode(true);
	left.className="left comm_icon";
	_this[0].appendChild(left);
	right.className="right comm_icon";
	_this[0].appendChild(right);
	 var _spanObj=$(objNum).find("span");
	left=_this.find(".left"),right=_this.find(".right");
	 //移动的函数
	var move=function(){
		if(next>index){
			_liA.css({"left":"100%", "display":"block"});
		_liA.eq(index).css({"left":"0"}).animate({"left":"-100%"},speen);
		_liA.eq(next).animate({"left":0},speen,function(){
			index=next;
			_spanObj.removeClass().eq(index).addClass("on");
			if(next+1>=maxL){next=0;}else{next++;}
		});
		}else{
			_liA.css({"left":"-100%", "display":"block"});
		_liA.eq(index).css({"left":"0"}).animate({"left":"100%"},speen);
		_liA.eq(next).animate({"left":"0"},speen,function(){
			index=next;
			_spanObj.removeClass().eq(index).addClass("on");
			if(next+1>=maxL){next=0;}else{next++;}
		});
		}
		
	}
	clearTime=setInterval(move,time);
	//点按钮却换图片
	
	_this.find(".num span").click(function(){
		var _onIndex=$(this).index();
		
		if(_liA.is(":animated")||_onIndex===index){return false;}
		next=_onIndex;
		move();
		return false;
	});
	left.click(function(){
		if(_liA.is(":animated")){return false;}
		index-=1;
		if(index<0)index=maxL-1;
		_liA.css({"left":"-100%", "display":"block"});
		_liA.eq(index).css({"left":"0"}).animate({"left":"100%"},speen);
		_liA.eq(next).animate({"left":"0"},speen,function(){
			index=next;
			_spanObj.removeClass().eq(index).addClass("on");
			if(next+1>=maxL){next=0;}else{next++;}
		});
	});
	right.click(function(){
		if(_liA.is(":animated")){return false;}
		_liA.css({"left":"100%", "display":"block"});
		_liA.eq(index).css({"left":"0"}).animate({"left":"-100%"},speen);
		_liA.eq(next).animate({"left":0},speen,function(){
			index=next;
			_spanObj.removeClass().eq(index).addClass("on");
			if(next+1>=maxL){next=0;}else{next++;}
		});
	});
	right.hover(function(){//清空动画效果
			clearInterval(clearTime);
			clearTime=null;
	},function(){//重新启动动画
		if(clearTime){
			clearInterval(move);
			clearTime=null;
		}
		clearTime=setInterval(move,time);
	});
	left.hover(function(){//清空动画效果
			clearInterval(clearTime);
			clearTime=null;
	},function(){//重新启动动画
		if(clearTime){
			clearInterval(move);
			clearTime=null;
		}
		clearTime=setInterval(move,time);
	});
	_this.hover(function(){//清空动画效果
			clearInterval(clearTime);
			clearTime=null;
	},function(){//重新启动动画
		if(clearTime){
			clearInterval(move);
			clearTime=null;
		}
		clearTime=setInterval(move,time);
	});
}
//背景移动效果
$(function(){
	window.onload=function(){
		var ban=$(".banner"),h=ban.find("img:eq(0)").height();
		ban.css({"height":h+"px"});
		ban.find("li").css({position:"absolute","display":"none"});
		ban.find("li:eq(0)").css({position:"absolute","display":"block"});
		ban.bannerSlide();
	}
    $(window).resize(function(){
		var ban=$(".banner"),h=ban.find("img:eq(0)").height();
		ban.css({"height":h+"px"});
	});

 $(".query li").hover(function(){
	 $(this).find(".name").stop(false,true).slideDown(500);
 },function(){
	 $(this).find(".name").stop().slideUp(500);
 })
 
   
});

$(".query li:odd").addClass("even");
if(isIE<9){
		$(".maxk").addClass("ie_bg_9");
		$(".query li:odd").addClass("even");
		$(".collection  .more").addClass("more-ie-bg");
	}
