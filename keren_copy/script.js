$(function(){
	
	//헤더 언더바 넓이 강제지정
	//헤더 영역
	$(".line").css("width",$(".header > ul > li").eq(0).width());
	
	$(".header > ul > li").mouseenter(function(){
		var a_width = $(this).children("a").width();
		var li_p = $(this).position().left;
		
		$(".line").stop().animate({
			"width":a_width,
			"left":li_p
		},500);
	});
	
	$(".header > ul > li").mouseleave(function(){
		$(".line").stop().animate({
			"width":$(".header > ul > li").eq(0).width(),
			"left":$(".header > ul > li").eq(0).position().left
		},500);
	});
	// 헤더영역
	
	//please select icon
	
	setInterval(function(){
		
		$(".select_text").stop().animate({
			"top":"-15px"
		},600 ,function(){
			$(".select_text").css("top","15px").stop().animate({
				"top":"0"
			},600);
		});
		
	},7000);
	
	

	//네비 영역

	var pre_clone = $(".nav ul").clone();
	var app_clone = $(".nav ul").clone();

	$(".nav .ul_cover").prepend(pre_clone);
	$(".nav .ul_cover").append(app_clone);
	
	
	var nav_left;
	var i = 0;
	var n = 0;
	
	// 브라우저 시작시 bg_color 강제실행
	$("#main_bg").addClass("bg_color0");
	
	//브라우저 시작시 counting_num 강제실행
	$(".counting_num").text(n+1);
	
	function wheel(event, delta){
		$("#wrap").off("mousewheel DOMMousescroll", wheel);
		if(delta<0){
			// 메인 이미지 변경
			i++;
			if(i==10){i=0;}
			//main_img
			$(".main_img > ul > li").eq(i-1).stop().animate({
				"top":"-150%",
				"left":"-50%",
				"transform":"rotate(-90deg) scale(0.5)"
			},700, 'easeInCubic', function(){
				$(".main_img > ul > li").eq(i).css({"top":"120%","transform":"rotate(120deg) scale(0.5)","left":"50%"}).stop().animate({
					"top":"0",
					"left":"0",
					"transform":"rotate(0deg) scale(1)"
				},400,'easeOutCubic');
				setTimeout(function(){
					$("#wrap").on("mousewheel DOMMousescroll", wheel);
				},400);
			});
			//console.log(i);
			
			//main_title
			$(".main_title > ul > li").eq(i-1).find("img").css("transform-origin","bottom center").stop().animate({
				"transform":"scaleY(1.5)",
				"opacity":"0"
			},400, 'easeInCubic', function(){
				$(".main_title > ul > li").eq(i).find("img").css({
					"opacity":"0",
					"display":"block",
					"transform-origin":"top center",
					"transform":"scaleY(1.5)"
					}).stop().animate({
						"transform":"scaleY(1)",
						"opacity":"1"
					},400, 'easeOutCubic');
			});
			
			//counting_num
			n = i;
			
			$(".counting_num").stop().animate({
				"top":"-20px"
			},700, function(){
				$(".counting_num").text(n+1);
				$(".counting_num").css("top","20px").stop().animate({
					"top":"0"
				},400);
			});
			
			//sub_title
			$(".sub_title > ul > li").eq(i-1).css({"transform-origin":"bottom center","display":"block"}).stop().animate({
				"transform":"scaleY(1.2)",
				"top":"-20px",
				"opacity":"0"
			},700, 'easeInCubic', function(){
				$(".sub_title > ul > li").eq(i-1).css("display","none");
				$(".sub_title > ul > li").eq(i).css({
					"display":"block",
					"opacity":"0",
					"top":"20px"
				}).stop().animate({
					"top":"0",
					"opacity":"1",
					"transform":"scaleY(1)"
				},400);
			});
			
			//sub_title_text , hide_line
			$(".sub_title_text .hide_line").css({
				"width":"0","right":"auto","left":"50%"}).stop().animate({
				"width":"50%"
			},550, 'easeInCubic', function(){
				$(".sub_title_text > ul > li").eq(i-1).stop().hide();
				$(".sub_title_text > ul > li").eq(i).stop().show();
				$(".sub_title_text .hide_line").css({"right":"0","left":"auto"}).stop().animate({
					"width":"0"
				},550);
			});
			
			//main_bg
			if(i==0){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==1){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==2){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==3){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==4){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==5){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==6){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==7){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==8){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==9){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			
			//네비 슬라이드 무한반복
			nav_left = parseInt($(".nav .ul_cover").css("left"));
			
			if(nav_left == -2415){
				$(".nav .ul_cover").stop().animate({
					"left":nav_left-115
				},600, function(){
					$(".nav .ul_cover").css("left","-1380px");
				});
			}else{
				$(".nav .ul_cover").stop().animate({
					"left":nav_left-115
				},600);
			}
			//console.log(i);
			
		}
		else if(delta>0){
			// 메인 이미지 변경
			if(i==-1){i=9;}
			//if(i==10){i=0;}
			i--;
			
			//main_img
			$(".main_img > ul > li").eq(i+1).stop().animate({
				"top":"120%",
				"left":"50%",
				"transform":"rotate(120deg) scale(0.5)"
			},700, 'easeInCubic', function(){
				$(".main_img > ul > li").eq(i).css({"top":"-150%","transform":"rotate(-90deg) scale(0.5)","left":"-50%"}).stop().animate({
					"top":"0",
					"left":"0",
					"transform":"rotate(0deg) scale(1)"
				},400,'easeOutCubic');
				setTimeout(function(){
					$("#wrap").on("mousewheel DOMMousescroll", wheel);
				},400);
			});
			
			//main_title
			$(".main_title > ul > li").eq(i+1).find("img").css("transform-origin","top center").stop().animate({
				"transform":"scaleY(1.5)",
				"opacity":"0"
			},400, 'easeInCubic', function(){
				$(".main_title > ul > li").eq(i).find("img").css({
					"opacity":"0",
					"display":"block",
					"transform-origin":"bottom center"
					}).stop().animate({
						"transform":"scaleY(1)",
						"opacity":"1"
					},400, 'easeOutCubic');
			});
			
			//counting_num
			n = i;
			if(n==-1){n=9;}
			//console.log(n);
			$(".counting_num").stop().animate({
				"top":"20px"
			},700, function(){
				$(".counting_num").text(n+1);
				$(".counting_num").css("top","-20px").stop().animate({
					"top":"0"
				},400);
			});
			
			//sub_title
			$(".sub_title > ul > li").eq(i+1).css({"transform-origin":"top center","display":"block"}).stop().animate({
				"transform":"scaleY(1.2)",
				"top":"20px",
				"opacity":"0"
			},700, 'easeInCubic', function(){
				$(".sub_title > ul > li").eq(i+1).css("display","none");
				$(".sub_title > ul > li").eq(i).css({
					"display":"block",
					"opacity":"0",
					"top":"-20px"
				}).stop().animate({
					"top":"0",
					"opacity":"1",
					"transform":"scaleY(1)"
				},400);
			});
			
			//sub_title_text , hide_line
			$(".sub_title_text .hide_line").css({
				"width":"0","right":"0","left":"auto"}).stop().animate({
				"width":"50%"
			},550, 'easeInCubic', function(){
				$(".sub_title_text > ul > li").eq(i+1).hide();
				$(".sub_title_text > ul > li").eq(i).show();
				$(".sub_title_text .hide_line").css({"left":"50%","right":"auto"}).stop().animate({
					"width":"0"
				},550);
			});
			
			//main_bg
			if(i==-1){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==0){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==1){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==2){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==3){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==4){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==5){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==6){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==7){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			else if(i==8){
				$("#main_bg").removeClass();
				$("#main_bg").addClass("bg_color"+i);
			}
			
			//console.log(i);
			
			//네비 슬라이드 무한반복
			nav_left = parseInt($(".nav .ul_cover").css("left"));
			
			if(nav_left == -920){
				$(".nav .ul_cover").stop().animate({
					"left":nav_left+115
				},600, function(){
					$(".nav .ul_cover").css("left","-1955px");
				});
			}else{
				$(".nav .ul_cover").stop().animate({
					"left":nav_left+115
				},600);
			}
		}
		
	}// wheel
	
	$("#wrap").on("mousewheel DOMMousescroll", wheel);

	
	//네비 클릭시 이미지 변경
	
	$(".ul_cover ul").eq(1).addClass("center");
	$(".ul_cover > ul > li").on("click", nav_click);
	
	function nav_click(){
		
		var nav_index = $(this).index();
		var win_width = $(window).width();
		var nav_left = $(this).offset().left;
		var ul_width = parseInt($(".ul_cover .center").width());
		var li_left = $(this).position().left;
		var result = -(ul_width - (ul_width-li_left));
		//console.log(nav_index, i);
		
		if(i == nav_index) return;
		$(".nav .ul_cover li").off("click", nav_click);
		
		//클릭시 네비게이션 이동
		$(".ul_cover").stop().animate({
			"left" : result
		},400, function(){
			$(".ul_cover").css("left",-ul_width-115*nav_index);
		}); //클릭시 loop
		
		//main_bg 색깔변경
		
		if(nav_index==0){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		else if(nav_index==1){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		else if(nav_index==2){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		else if(nav_index==3){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		else if(nav_index==4){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		else if(nav_index==5){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		else if(nav_index==6){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		else if(nav_index==7){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		else if(nav_index==8){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		else if(nav_index==9){
			$("#main_bg").removeClass();
			$("#main_bg").addClass("bg_color"+nav_index);
		}
		
		
		// 클릭시 윈도우 넓이와 비교후 애니메이션 결정
		if(nav_left > win_width/2){
			//main_img
			$(".main_img > ul > li").eq(i).stop().animate({
				"top":"-150%",
				"left":"-50%",
				"transform":"rotate(-90deg) scale(0.5)"
			},700, 'easeInCubic', function(){
				$(".main_img > ul > li").eq(nav_index).css({"top":"120%","transform":"rotate(120deg) scale(0.5)","left":"50%"}).stop().animate({
					"top":"0",
					"left":"0",
					"transform":"rotate(0deg) scale(1)"
				},400,'easeOutCubic');
				$(".ul_cover > ul > li").on("click", nav_click);
			});
			
			//main_title
			$(".main_title > ul > li").eq(i).find("img").css("transform-origin","bottom center").stop().animate({
				"transform":"scaleY(1.5)",
				"opacity":"0"
			},400, 'easeInCubic', function(){
				$(".main_title > ul > li").eq(nav_index).find("img").css({
					"opacity":"0",
					"display":"block",
					"transform-origin":"top center",
					"transform":"scaleY(1.5)"
					}).stop().animate({
						"transform":"scaleY(1)",
						"opacity":"1"
					},400, 'easeOutCubic');
			});
			
			//counting_num
			$(".counting_num").stop().animate({
				"top":"-20px"
			},700, function(){
				$(".counting_num").text(nav_index+1);
				$(".counting_num").css("top","20px").stop().animate({
					"top":"0"
				},400);
			});
			
			//sub_title
			$(".sub_title > ul > li").eq(i).css({"transform-origin":"bottom center","display":"block"}).stop().animate({
				"transform":"scaleY(1.2)",
				"top":"-20px",
				"opacity":"0"
			},700, 'easeInCubic', function(){
				$(".sub_title > ul > li").css("display","none");
				$(".sub_title > ul > li").eq(nav_index).css({
					"display":"block",
					"opacity":"0",
					"top":"20px"
				}).stop().animate({
					"top":"0",
					"opacity":"1",
					"transform":"scaleY(1)"
				},400);
			});
			
			//sub_title_text , hide_line
			$(".sub_title_text .hide_line").css({
				"width":"0","right":"auto","left":"50%"}).stop().animate({
				"width":"50%"
			},550, 'easeInCubic', function(){
				$(".sub_title_text > ul > li").hide();
				$(".sub_title_text > ul > li").eq(nav_index).stop().show();
				$(".sub_title_text .hide_line").css({"right":"0","left":"auto"}).stop().animate({
					"width":"0"
				},550);
			});
		}
		//
		else if(nav_left < win_width/2){
			
			//main_img
			$(".main_img > ul > li").eq(i).stop().animate({
				"top":"120%",
				"left":"50%",
				"transform":"rotate(120deg) scale(0.5)"
			},700, 'easeInCubic', function(){
				$(".main_img > ul > li").eq(nav_index).css({"top":"-150%","transform":"rotate(-90deg) scale(0.5)","left":"-50%"}).stop().animate({
					"top":"0",
					"left":"0",
					"transform":"rotate(0deg) scale(1)"
				},400,'easeOutCubic');
				$(".ul_cover > ul > li").on("click", nav_click);
			});
			
			//main_title
			$(".main_title > ul > li").eq(i).find("img").css("transform-origin","top center").stop().animate({
				"transform":"scaleY(1.5)",
				"opacity":"0"
			},400, 'easeInCubic', function(){
				$(".main_title > ul > li").eq(nav_index).find("img").css({
					"opacity":"0",
					"display":"block",
					"transform-origin":"bottom center"
					}).stop().animate({
						"transform":"scaleY(1)",
						"opacity":"1"
					},400, 'easeOutCubic');
			});
			
			//counting_num
			$(".counting_num").stop().animate({
				"top":"20px"
			},700, function(){
				$(".counting_num").text(nav_index+1);
				$(".counting_num").css("top","-20px").stop().animate({
					"top":"0"
				},400);
			});
			
			//sub_title
			$(".sub_title > ul > li").eq(i).css({"transform-origin":"top center","display":"block"}).stop().animate({
				"transform":"scaleY(1.2)",
				"top":"20px",
				"opacity":"0"
			},700, 'easeInCubic', function(){
				$(".sub_title > ul > li").css("display","none");
				$(".sub_title > ul > li").eq(nav_index).css({
					"display":"block",
					"opacity":"0",
					"top":"-20px"
				}).stop().animate({
					"top":"0",
					"opacity":"1",
					"transform":"scaleY(1)"
				},400);
			});
			
			//sub_title_text , hide_line
			$(".sub_title_text .hide_line").css({
				"width":"0","right":"0","left":"auto"}).stop().animate({
				"width":"50%"
			},550, 'easeInCubic', function(){
				$(".sub_title_text > ul > li").stop().hide();
				$(".sub_title_text > ul > li").eq(nav_index).stop().show();
				$(".sub_title_text .hide_line").css({"left":"50%","right":"auto"}).stop().animate({
					"width":"0"
				},550);
			});
		}
		
		i = nav_index;
	} //nav_click
	
	
	//window ready
	$(window).ready(function(){
		
		$("#wrap").off("mousewheel DOMMousescroll", wheel);
		$(".ul_cover > ul > li").off("click", nav_click);
		
		//start animate
		$(".header").stop().fadeIn(1500);
		$(".logo").stop().fadeIn(1500);
		
		$(".category .main_title").stop().animate({
			"opacity":"1"
		},1500, function(){
			$(".category #main_bg").stop().animate({
				"top":"0",
				"bottom":"auto",
				"left":"50%",
				"width":"100%",
				"height":"100%"
			},400);
			
			$(".category .main_img > ul > li").stop().fadeIn(1000);
			
			$(".bot_nav .nav .ul_cover").stop().animate({
				"top":"0",
				"opacity":"1"
			},1000, function(){
				$(".right_menu").stop().fadeIn(1000, function(){
					$("#wrap").on("mousewheel DOMMousescroll", wheel);
					$(".ul_cover > ul > li").on("click", nav_click);
				});
			});
			
			$(".select_icon").stop().animate({
				"opacity":"1"
			},600);
		});
		
		// hamberger click
		$(".hamberger").click(function(){
			$(".hamberger").toggleClass("on");
			
			if($(".hamberger").hasClass("on")==false){
				$(".h_menu").css("display","block").stop().animate({
					"transform":"rotate(90deg)"
				},600, function(){
					$(".h_menu").css("display","none");
				});
			}else{
				$(".h_menu").css({"transform":"rotate(-90deg)","display":"block"}).stop().animate({
					"top":"0",
					"left":"0",
					"transform":"rotate(0deg)"
				},600);
			}
		});
		
		//hamberger resize
		$(window).resize(function(){
			var w_width = $(window).width();
			
			if(w_width > 800){
				$(".h_menu").hide();
				$(".hamberger").removeClass("on");
			}
		});
		
	});
	
	




























}); //end