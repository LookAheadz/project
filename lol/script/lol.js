$(function(){
	var cd = $("#left .conent .lb .num a").length;
	var index = 0;
	var dh;
	$("#left .conent .lb .num a").hover(function(){
		index = $("#left .conent .lb .num a").index(this);
		showImg(index);
	}).eq(0);
	$("#left .conent .lb").hover(function(){
		clearInterval(dh);
	},function(){
		dh = setInterval(function(){
			showImg(index)
			index++;
			if (index==cd){index=0;}
		},3000);
	}).trigger('mouseleave')
})
function showImg(index){
	var zq = $("#left .conent .lb").height();
	$("#left .conent .lb .img").children().eq(index).stop(true).animate({opacity:1},1000).siblings().stop(true).animate({opacity:0},1000);
	$(" #left .conent .lb .num a").removeClass("on")
	.eq(index).addClass('on');
}
$(function(){
	var zz = $("#left .right .lb1 .num1 a").length;
	var index = 0;
	var yd;
	$("#left .right .lb1 .num1 a").click(function(){
		index = $("#left .right .lb1 .num1 a").index(this);
		img(index);
	}).eq(0);
	$("#left .right .lb1").hover(function(){
		clearInterval(yd);
	},function(){
		yd = setInterval(function(){
			img(index)
			index++;
			if (index==zz) {index=0}
		},2000);
	}).trigger('mouseleave')
})
function img(index){
	var ss = $("#left .right .lb1").height();
	$("#left .right .lb1 .img1").children().eq(index).stop(true).animate({opacity:1},1000).siblings().stop(true).animate({opacity:0},1000);
	$("#left .right .num1 a").removeClass("ls")
	.eq(index).addClass('ls');
}
$(function(){
	var zy = $("#right .top .num2 a").length;
	var index = 0;
	var gm
	$("#right .top .num2 a").click(function(){
		index = $("#right .top .num2 a").index(this);
		hr(index);
	}).eq(0);
	$("#right .top .lb2").hover(function(){
		clearInterval(gm);
	},function(){
		gm = setInterval(function(){
			hr(index)
			index++;
			if (index==zy) {index=0}
		},5000);
	}).trigger('mouseleave')
})
function hr(index){
	var xs = $("#right .top .lb2").height();
	$("#right .top .lb2 .img2").children().eq(index).stop(true).animate({opacity:1},1000).siblings().stop(true).animate({opacity:0},1000);
	$("#right .top .lb2 .num2 a").removeClass("ls1")
	.eq(index).addClass('ls1')
}


$(function(){
	var $list = $("#left .list");
	var $smokes = $list.find('.smoke');
	$smokes.data({sd:1});

	$list.on('mouseenter',function(){
		var $this = $(this);
		var index = $this.index();
		$this.find('.name').stop(true).css({top:40,opacity:0}).animate({top:55,opacity:1},400);
		$this.find('.solo').stop(true).css({marginTop:10,opacity:0}).animate({marginTop:0,opacity:1},400);
		$this.find('.tx').stop(true).css({left:-12,opacity:0}).animate({left:4,opacity:1},400);
		$this.find('.smoke').data('sd',3);
	});
	$list.on('mouseleave',function(){
		var $this = $(this);
		var index = $this.index();
		$this.find('.smoke').data('sd',1);
	});
	setInterval(doSmoke,40);
	function doSmoke(){
		$smokes.each(function(index){
			var $this = $(this);
			var bpy = parseInt($this.css('backgroundPositionY'));
			var target = bpy-$this.data('sd');
			if(target<-701){
				target = 0;
			}
			$this.css("backgroundPositionY",target);
		});
	}


});