$(function(){
	$(".pd_left_hz").on("click","a.xx",function(){
		var i = $(this).text()
		$(".pd_right_1").append("<a hrer='javascript:;' class='xx1'>"+i+"<span class='xx1_1'>"+"</span>"+"</a>");
		$(this).remove();
	})
	$(".pd_right_1").on("click",".xx1",function(){
		var i = $(this).text()
		$(".pd_left_hz").append("<a hrer='javascript:;' class='xx'>"+i+"<span class='xx_1'>"+"</span>"+"</a>");
		$(this).remove();
	})
})
$(function(){
	var $wz =$(".dh1 .dh_1");
	$wz.click(function(){
	$(this).addClass("gl")
		.siblings().removeClass("gl")
		var index = $wz.index(this);
		$(".bg_hz > div.war")
		.eq(index).show()
		.siblings().hide();
	})
})
$(function(){
	$(document).bind("mousewheel",function(){
		$(".zt_nr_left_zt").removeClass("hide");
	})
})
$(function(){
	$(".gdck_1 a").click(function(){
		$(".zt_nr_left_zt").removeClass("hide");
	})
})
$(function(){
  $(window).bind('scroll',function(){
    if($(document).scrollTop()>=100){ 
      $(".hddb").show(); 
    }
    else{ 
      $(".hddb").hide(); 
    } 
  }) 
  $(".hddb").click(function(){ 
    $('body,html').animate({scrollTop:0},1000);
  }) 
})
$(function(){
	$(".hddb").hover(function(){
		$(".hddb a").removeClass("hide");
	},function(){
		$(".hddb a").addClass("hide");
	})
})
$(function(){
	var a = [
		["平安夜女生坠亡","王菲演唱会崩盘","面试后返校跳楼","3苹果卖39888元","16代人守红豆杉","李嘉欣滞留机场",
		"韩曝朴催对话录音","袁惟仁签字离婚","短信直播自杀","何洁回应离婚","全家摇车牌出租","千吨垃圾倾倒长江",
		"迪士尼表演出意外","梁朝伟为缺席致歉","王思聪谈接班万达","护士戏弄危重老人"],["e租宝案已受理","明年养老金仍上调",
		"歼-31改后首飞","贺岁纪念币发行","上坟真车被烧走","点燃男友家后被困","3苹果卖39888元","袁惟仁签字离婚",
		"55岁哈林再当爸","王菲演唱会崩盘","潜规则考生遭拒","韩曝朴催对话录音","遇难地扮日本武士","汤圆吃出钢丝索赔",
		"nba圣诞大战","特朗普女儿被骚扰"]
	]
	$(".left1").click(function(){
		$(".y").toggleClass('y1');
		var i = parseInt(a.length*Math.random())
		var sj = a[i];
		var tem = ""
		for(var j=0;j<sj.length;j++){
			tem += "<div class='nr1'>"+"<a href='javascript:;'>"+sj[j]+"</a>"+"</div>"
		};
		$(".ztnr").html(tem)
	})
})
$(function(){
	$(document).ready(function(){
		$(window).scroll(function(){;
			if($(window).scrollTop()>218){
				$(".bj").removeClass("hide");
				$(".input").addClass('dw');
				$(".xj").addClass('xj1');
			}else{
				$(".bj").addClass("hide");
				$(".input").removeClass('dw')
				$(".xj").removeClass("xj1")
			}
		})
	})
})