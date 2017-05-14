$(function(){
	$("#sbtn").click(function(){
					var $value=$("#txt").val();
					var $p=$("<p></p>");
					$p.addClass("p");
					$p.text($value);
					$("#txt").val("");//点击过后设置文本框内容为空
					var tops=Math.floor(Math.random()*($("#content").innerHeight()-30));
					var fontsizes=16+Math.floor(Math.random()*10);
					var rgbs="rgb(" + Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+")";	
					$p.css({"top":tops,"font-size":fontsizes,"color":rgbs});
					$("#content").append($p);
					var timer=Math.ceil(Math.random()*8000)+8000;
					$p.stop().animate({"left":"-500px"},timer,function(){
						$(this).remove();
					});	
				});
			   $("#qbtn").click(function() {
	               p.remove();
	               $('#content').empty();
    });
})