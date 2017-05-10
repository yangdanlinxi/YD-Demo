$(function(){    		 
			$('.btn-menu').click(function(){
				$('.btn-menu li').toggleClass('open');
				if( !$('.btn-menu li').hasClass('open') ){  
					$(".btn-bar").css({
						'transform':'translateY(35px)',
						'opacity': '0'
					});
	            }else{  
	            	$(".btn-bar").css({
						'transform':'translateY(0)',
						'opacity': '1'
					});
	            }  
			});
		});
		var timer2=null;
		var arr=[95,90,80,50]
    	timer2=setInterval(function(){

    		var top=$('#page2').offset().top;
    		if (!top) {
			function canvas(id,n){
			var oC = document.querySelector(id);
			var ctx = oC.getContext('2d');
			var angle = 0;
			var timer=null;
			var start=-Math.PI/2;
			var num=n;
			clearInterval(timer2);
			
			timer=setInterval(() => {

				ctx.clearRect(0,0,oC.width,oC.height);
				ctx.font = "36px a";
				ctx.fillStyle = 'white';
				ctx.fillText(`${num}%`,100,140);
				ctx.textAlign = 'center';
				ctx.beginPath();
				ctx.arc(100,125,60,-Math.PI/2,`${Math.PI*2*num/1000*angle/10-Math.PI/2}`);
				ctx.lineWidth=10;
				ctx.strokeStyle='white';
				ctx.stroke();
				angle++;
				if (angle==100) {
					clearInterval(timer)
				}
			},16)
		}
		canvas('#box1-can',arr[0]);
		canvas('#box2-can',arr[1]);
		canvas('#box3-can',arr[2]);
		canvas('#box4-can',arr[3]);
			}
    	},30)	