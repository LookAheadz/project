$(function(){
	var $qh = $(".qh .zy a");
	$qh.click(function(){
		$(this).addClass("xg spr")
		.siblings().removeClass('xg spr');
		var dq = $qh.index(this);
		$(".zy1 > ul")
			.eq(dq).show()
			.siblings().hide();
	})
})