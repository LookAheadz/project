$(function(){
	var $wz =$(".wz a");
	$wz.click(function(){
	$(this).addClass("zt1 qh")
		.siblings().removeClass("zt1 qh")
		var index = $wz.index(this);
		$(".qhbz >div.img")
		.eq(index).show()
		.siblings().hide();
		}).hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		})
	})