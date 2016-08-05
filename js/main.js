/*!
 * Bohe Technology
 * Copyright 2016
 *
 * Date: Wed Jan 13 15:23:05 2016 
 */
 
$(function(){
	var n=0;
	/*图片都不显示只显示第一张*/
	$(".banner img").hide();
	$(".banner img").eq(0).show();
	$(".num li").removeClass("blueLi");
	$(".num"+n).addClass("blueLi");
	/*点击向右箭头，图片换后一张*/
	$(".rightArrow").click(function(){
		if(n<4){
			n=n+1;	
		}else{
			n=0;
		}
		document.title=n;
		$(".banner img").hide();
		$(".banner img").eq(n).fadeIn/*淡入*/(1000);
		$(".num li").removeClass("blueLi");
		$(".num"+n).addClass("blueLi");
	})
	/*点击向左箭头，图片换前一张*/
	$(".leftArrow").click(function(){
		if(n>0){
			n=n-1;
		}else{
			n=4;
		}
		document.title=n;
		$(".banner img").hide();
		$(".bannerbox img").eq(n).fadeIn/*淡入*/(3000);
		$(".num li").removeClass("blueLi");
		$(".num"+n).addClass("blueLi");
	})
	/*按钮：鼠标指向按钮，当前显示黄色，其n=$(".num li").index(obj);他显示为蓝色*/
	$(".num li").mouseover(function(){
		n=$(".num li").index($(this));
		$(".num li").removeClass("blueLi");
		$(".num"+n).addClass("blueLi");
		
		/*让图像显示*/
		$(".banner img").hide();
		$(".banner img").eq(n).show();	
	})
	var floatImg=function(obj){
		$(".num li").removeClass("blueLi");
		if(n<4){
			n=n+1;	
		}else{
			n=0;
		}
		$(".num"+n).addClass("blueLi");
		/*获取当前按钮是第几个按钮*/
		//n=$(".num li").index(obj);
		/*让图像显示*/
		$(".banner img").hide();
		$(".banner img").eq(n).show();	
		}	
		setInterval(floatImg,6000);
		
	$(".title p").click(function(){
		$(".title p").removeClass("title_1");
		$(this).addClass("title_1");
		/*获取当前按钮是第几个按钮*/
		n=$(".title p").index(this);
		/*让图像显示*/
		$(".main_1").addClass("hid");
		$(".main_1").eq(n).removeClass("hid");	
		});
});


