$(function(){
	var cd = $(".num span").length;
	var index=0;
	var dhsj;
	$(".num span").click(function(){
		index = $(".num span").index(this);
		showImg(index);
	}).eq(0).click();
	$(".lb").hover(function(){
		clearInterval(dhsj);
	},function(){
		dhsj = setInterval(function(){
			showImg(index)
			index++;
			if (index==cd) {index=0;}
		},3000);
	}).trigger('mouseleave')
})
function showImg(index){
	var zz = $(".lb").height();
	$(".tp").children().eq(index).stop(true).animate({opacity:1},1000).siblings().stop(true).animate({opacity:0},1000);
	$(".num span").removeClass("on")
	.eq(index).addClass('on');
}
