// JavaScript Document
//tab
(function(c){c.fn.extend({actual:function(d,m){if(!this[d])throw'$.actual => The jQuery method "'+d+'" you called does not exist';var a=c.extend({absolute:!1,clone:!1,includeMargin:!1},m),g=this.eq(0),h,b;if(!0===a.clone)h=function(){g=g.clone().attr("style","position: absolute !important; top: -1000 !important; ").appendTo("body")},b=function(){g.remove()};else{var k=[],l="",e;h=function(){e=g.parents().addBack().filter(":hidden");l+="visibility: hidden !important; display: block !important; ";!0===
a.absolute&&(l+="position: absolute !important; ");e.each(function(){var a=c(this),b=a.attr("style");k.push(b);a.attr("style",b?b+";"+l:l)})};b=function(){e.each(function(a){var b=c(this);a=k[a];void 0===a?b.removeAttr("style"):b.attr("style",a)})}}h();h=/(outer)/.test(d)?g[d](a.includeMargin):g[d]();b();return h},
smartShow:function(opts){var defaultOptions={url:'a.php',closest:'.smart-closest',panel:'.smart-item',param:'key',dataWrap:'li',dataType:'json',wrapClass:'current',success:function(){},operate:function(){}},options=$.extend(defaultOptions,opts);return this.each(function(key,obj){var node=$(options.panel),fn={},temp,getData=null,showList=null,autoShow=false,isChrome=navigator.userAgent.indexOf('Chrome'),index=-1;$(obj).attr('data-smart',true);$(options.panel).attr('data-smartpanel',true);getData=function(value){$.ajax({type:'get',url:options.url,data:options.param+'='+encodeURIComponent(value),dataType:options.dataType,success:function(data){if(data){options.success(data);autoShow=true;index=-1;var nodes=$(options.panel).find(options.dataWrap);if(nodes.length){nodes.bind({mouseover:function(){index=$(this).index();$(this).addClass(options.wrapClass).siblings().removeClass(options.wrapClass)},click:function(){$(obj).val($(this).html().replace(/<[^>]+>/g,''));$(options.panel).hide();autoShow=false;options.operate(index,$(this).html());return false}})}}}})};showList=function(val){(temp!=val&&val!='')?getData(val):0};$(obj).bind({keydown:function(){temp=$(obj).val()},keyup:function(event){var item=node.find(options.dataWrap),keyCode=event.keyCode,value=$.trim($(obj).val()),fn={},length=item.length;fn={moveTo:function(k){if(k<0){index=k=length-1}if(k>length-1){index=k=0}item.eq(k).addClass(options.wrapClass).siblings().removeClass(options.wrapClass);$(obj).val(item.eq(k).html().replace(/<[^>]+>/g,''))}};if(keyCode===38){if(!autoShow){return}fn.moveTo(--index);return false}else if(keyCode===40){if(!autoShow){return}fn.moveTo(++index);return false}else if(keyCode===13){autoShow=false;showList(value);options.operate(index,item.eq(index).html().replace(/<[^>]+>/g,''));return false}if(value==''){$(options.panel).html('').hide();autoShow=false}if(isChrome==-1){showList(value)}},focus:function(){var value=$.trim($(obj).val());showList(value)}});if(isChrome>-1){$(obj).bind('input',function(){var value=$.trim($(obj).val());showList(value)})}$(document).bind('click',function(event){var target=$(event.target);if(target.attr('data-smart')!='true'&&target.parent().attr('data-smartpanel')!='true'){$(options.closest).hide();$(options.panel).hide();autoShow=false;index=-1}})})},


tab:function(d){var m=null,a=c.extend(!0,{type:"mouseover",triggerClass:"current",tab:"ul:first > li",panelClass:"panel",defaultPanel:0,async:{state:!1,url:"a.php",type:"get",dataType:"json",
data:[],error:function(){},success:function(a,c){}},slideTab:{trigger:".factor",sliding:!1,vertical:!1,speed:300},opacity:!1,delay:200,operate:function(){}},d);a.delay="click"===a.type?0:a.delay;m=function(a){for(var c=a.length,b=0,k={};b<c;b++)k[a[b].split("=")[0]]=a[b].split("=")[1];return k};return this.each(function(d,h){var b=c(h).find(a.tab),k=c(h).find("."+a.panelClass),l,e="left",p="width",q={},t=null,r=null,n=null;l=!0===a.opacity?600:0;!0===a.slideTab.sliding?!0===a.slideTab.vertical?(e=
"top",p="height",c(a.slideTab.trigger).height(b.eq(a.defaultPanel).actual("outerHeight"))):c(a.slideTab.trigger).width(b.eq(a.defaultPanel).actual("outerWidth")):0;t=function(a){q[e]=b.eq(a).position()[e];q[p]="width"===p?b.eq(a).actual("outerWidth"):b.eq(a).actual("outerHeight");return q};r=function(f){var d=a.async.data[f],e="",g={};b.eq(a.defaultPanel).attr("data-j-tab",1);b.eq(f).addClass(a.triggerClass).siblings().removeClass(a.triggerClass);c(h).find(a.slideTab.trigger).animate(t(f),a.slideTab.speed);
!0===a.async.state&&"1"!==b.eq(f).attr("data-j-tab")&&0!==d&&(e=1===a.async.url.split(",").length?a.async.url.split(",")[0]:a.async.url.split(",")[f],g=-1<d.indexOf("&")?m(d.split("&")):m(d.split()),c.ajax({url:e,type:a.async.type,data:g,dataType:a.async.dataType,error:function(){a.async.error(k.eq(f))},success:function(c){b.eq(f).attr("data-j-tab",1);a.async.success(k.eq(f),c)}}));k.eq(f).fadeIn(l).siblings("."+a.panelClass).hide();a.operate(f)};r(a.defaultPanel);b.bind(a.type,function(){var b=c(this).index();
clearTimeout(n);n=setTimeout(function(){r(b)},a.delay)});b.mouseout(function(){clearTimeout(n);n=null})})}})})(jQuery);

var topDis = 0;
if($('.table-box').length != 0){
	topDis = $('.table-box').offset().top;
}
var control = {
	init:function(){this.inputVal();this.headerSearch();this.mainNav();this.sideNav();this.showNode();this.showMore();this.tab();this.layDate();this.searchDrop();this.removeNode();this.pageChange();this.pubPop();this.goTop();this.tableFun();this.fixTable()},
	topDis:function(){if($('.table-box').length!=0){return $('.table-box').offset().top}else{return 0}},
	inputVal:function(){function inputDef(obj,text){obj.on({focus:function(){var val=$.trim(obj.val());if($.trim(obj.val())==text){obj.val('').css('color','#34444d')}},blur:function(){var val=$.trim(obj.val());if(val==''){obj.val(text).css('color','#aeb8c6')}else{obj.val(val)}}})}inputDef($('.header-inbox'),'请输入基金代码/名称/简拼/组合名称/要找的功能')},
		headerSearch : function(){  //搜索下拉框出现
			function show(val){
				if(val.length != 0){
					$('.header-drop').show();
				}else{
					$('.header-drop').hide();
				}
			}
			$('.header-inbox').on({
				
				keyup : function(){
					var val = $.trim($(this).val());
					show(val);
				},
				keydown : function(){
					var val = $.trim($(this).val());
					show(val);
				},
				click : function(event){
					var val = $.trim($(this).val());
					show(val);
					event.stopPropagation();
				}
			})
			$('.header-drop-list li').on('click',function(){
				$(this).parents('.header-drop').hide();	
			})
			$(document).click(function(e){
			   	var target = $(e.target);
				if($.isEmptyObject(target.closest('.header-drop')[0])){
					$('.header-drop').hide();
				}
			});
			
		},
		mainNav : function(){ //左侧导航
			var that = this;
			$('.nav-tit-menu').on({
				mouseenter : function(){
					$(this).parent().addClass('active');
					if($(this).hasClass('show-drop')){
						$(this).addClass('show-drop-hover');
					}
				},
				mouseleave : function(){
					$(this).parent().removeClass('active');
					if($(this).hasClass('show-drop')){
						$(this).removeClass('show-drop-hover');
					}
				}
			})
			
			function showDetail(){ //显示左侧导航的text函数 
				function tagName(obj){
					if($('.main').hasClass('main-nav-mini')){	
						obj.on({
							mouseenter : function(){
								var offTop = $(this).offset().top-80,
									text = $(this).find('.hover-text').html();
								$('.nav-hover-detail').show().css({'top':offTop})
								$('.nav-hover-detail-con').html(text);
								
							},
							mouseleave : function(){
								$('.nav-hover-detail').hide();
								$('.nav-hover-detail-con').html('');
							}	
						})
						
					}else{
						obj.on({
							mouseenter : function(){
								$('.nav-hover-detail').hide();
								$('.nav-hover-detail-con').html('');
							},
							mouseleave : function(){
								$('.nav-hover-detail').hide();
								$('.nav-hover-detail-con').html('');
							}	
						})
					}	
					
					
					
				}
				
				tagName($('.nav-home-link'));
				tagName($('.nav-tit-menu'));
				tagName($('.nav-menu-drop li'));
				
				
			}
			
			showDetail();
			var hdLeft = $('.table-hd-left'),
				hdRight = $('.table-hd-right'),
				bdLeft = $('.table-bd-left'),
				bdRight = $('.table-bd-right');
			var scrollLeft = $(window).scrollLeft(),
				scrollTop = $(window).scrollTop(),
				posLeft = $('.main-nav').width() + $('.side-nav').width() + 54,
				fixLeft = -scrollLeft + posLeft;
				headerHeight = $('.header').height() + 1,
				tableHd = $('.table-hd').height()+1;
			$('.nav-tool').on('click',function(){ //导航变宽变窄
				
				if($(this).parents('.main').hasClass('main-nav-mini')){
					$(this).parents('.main').removeClass('main-nav-mini');
					$('.table-auto-hd').width($('.table-auto-bd').width());
					$('.scroll-mar').width($(window).width() - $('.main-nav').width() - $('.side-nav').width()-60);	
					
					var scrollLeft = $(window).scrollLeft(),
						scrollTop = $(window).scrollTop(),
						posLeft = $('.main-nav').width() + $('.side-nav').width() + 54,
						fixLeft = -scrollLeft + posLeft;
						headerHeight = $('.header').height() + 1,
						tableHd = $('.table-hd').height()+1;
					
					$('.fix-compare-btn,.fix-export-btn').css({'left':$('.main-nav').width() + $('.side-nav').width() + 30 + 'px'});
					if($('.table-box').length != 0){
						topDis = $('.table-box').offset().top;
					}
					
					if($(window).scrollTop() > topDis){
						hdRight.css({'top':headerHeight + 'px','left':fixLeft+'px','position':'fixed'});
						$('.table-hd-left').css({'position':'fixed','top':'81px','left':posLeft});
					}
					
					
				}else{
					
					$(this).parents('.main').addClass('main-nav-mini')	;
					$('.table-auto-hd').width($('.table-auto-bd').width());
					$('.scroll-mar').width($(window).width() - $('.main-nav').width() - $('.side-nav').width()-60);
					
					var scrollLeft = $(window).scrollLeft(),
						scrollTop = $(window).scrollTop(),
						posLeft = $('.main-nav').width() + $('.side-nav').width() + 54,
						fixLeft = -scrollLeft + posLeft;
						headerHeight = $('.header').height() + 1,
						tableHd = $('.table-hd').height()+1;
					$('.fix-compare-btn,.fix-export-btn').css({'left':$('.main-nav').width() + $('.side-nav').width() + 30 + 'px'});
					if($('.table-box').length != 0){
						topDis = $('.table-box').offset().top;
					}
					
					if($(window).scrollTop() > topDis){
						hdRight.css({'top':headerHeight + 'px','left':fixLeft+'px','position':'fixed'});
						$('.table-hd-left').css({'position':'fixed','top':'81px','left':posLeft});
					}
				
				}
				showDetail();
				
				
			
				
			})
			
			$('.nav-tit-menu').on('click',function(){ //导航展开、收缩
				$('.nav-menu-drop').slideUp(150);
				$('.nav-tit-menu').removeClass('show-drop');
				$('.nav-tit-menu').removeClass('show-drop-hover');
				if($(this).siblings('.nav-menu-drop').css('display') == 'none'){
					$(this).addClass('show-drop');
					$(this).siblings('.nav-menu-drop').slideDown(150);
					
					
				}else{
					$(this).removeClass('show-drop');
					$(this).removeClass('show-drop-hover');
					$(this).siblings('.nav-menu-drop').slideUp(150);
						
				}
				
				
				
			})	
			
			
		},
		sideNav : function(){//左侧二级导航
			
			
			$('.side-nav-inner .side-nav-item').on({
				mouseenter : function(){
					$(this).addClass('active');
				},
				mouseleave : function(){
					$(this).removeClass('active');
				}
			});
			$('.side-nav-tit-menu').on({
				mouseenter : function(){
					$(this).parent().addClass('active');
					if($(this).hasClass('show-drop')){
						$(this).addClass('show-drop-hover');
					}
				},
				mouseleave : function(){
					$(this).parent().removeClass('active');
					if($(this).hasClass('show-drop')){
						$(this).removeClass('show-drop-hover');
					}
				}
			});
			$('.side-nav-tit-menu').on('click',function(){ //导航展开、收缩
				$('.side-nav-menu-drop').slideUp(150);
				$('.side-nav-tit-menu').removeClass('show-drop');
				$('.side-nav-tit-menu').removeClass('show-drop-hover');
				
				if($(this).siblings('.side-nav-menu-drop').css('display') == 'none'){
					$(this).addClass('show-drop');
					$(this).siblings('.side-nav-menu-drop').slideDown(150);
					
				}else{
					$(this).removeClass('show-drop');
					$(this).removeClass('show-drop-hover');
					$(this).siblings('.side-nav-menu-drop').slideUp(150);	
				}	
				
			})	
			
			
		},
		
		showNode : function(){
			$('.f-code').on({ //公用底部二维码放大显示
				mouseenter : function(){
					$(this).find('.f-bib-code').show(50);
				},
				mouseleave : function(){
					$(this).find('.f-bib-code').hide();
				}
			});
			
			
			
			
		},
		showMore : function(){
			var that = this;
			
			$('.query-sel-list li').on('click',function(){	//筛选条件单选
				$(this).addClass('cur').siblings().removeClass('cur');	
			})
			$('.query-any-list li').on('click',function(){ //筛选条件多选
				$(this).addClass('cur');	
			})
			$('.query-panel-list').each(function(index, element) { 
				$(this).find('li').each(function(index, element) {
					$(this).on('click',function(){
						$('.query-panel-list li').removeClass('cur');
						$(this).parents('.query-more-tab').siblings('.query-sel-list').find('li').removeClass('cur');
						$(this).addClass('cur').siblings().removeClass('cur');
						
						
					})
				});

			});
			$('.z-more-btn').on('click',function(){ //公司更多展开效果
				
				if($(this).hasClass('z-open')){
					$(this).removeClass('z-open').html('<span class="dib vm">更多</span><i class="dib ico vm"></i>').parent().removeClass('extend');
					$(this).siblings('ul').show().siblings('.query-more-tab').hide();
					
					//that.topDis();
					topDis = $('.table-box').offset().top /*-80*/
					//alert(topDis)
					
				}else{
					$(this).addClass('z-open').html('<span class="dib vm">收起</span><i class="dib ico vm"></i>').parent().addClass('extend');
					$(this).siblings('ul').hide().siblings('.query-more-tab').show();
					
					topDis = $('.table-box').offset().top ;
					
				}
				
			});
			
			$('.z-dn-btn').on('click',function(){
				if($(this).hasClass('z-open')){
					$(this).removeClass('z-open').html('<span class="dib vm">更多</span><i class="dib ico vm"></i>').parent().removeClass('extend');
					$(this).siblings('ul').css({'height':'34px'});
					
					
					topDis = $('.table-box').offset().top;
					
					
				}else{
					$(this).addClass('z-open').html('<span class="dib vm">收起</span><i class="dib ico vm"></i>').parent().addClass('extend');
					$(this).siblings('ul').css({'height':'auto'});
					
					topDis = $('.table-box').offset().top ;
					
				}	
			})
			
		},
		tab : function(){
			if($('.query-more-tab').length!=0){
				$('.query-more-tab').tab();
			}
		},
		layDate : function(){
			$('.query-date-inp').on({
				focus : function(){
					$(this).parent().addClass('cur');
					
				},
				blur : function(){
					$(this).parent().removeClass('cur');
					
				}
			})
			if($('.query-date-inp').length != 0){
				laydate({
				  elem: '#query-input'
				  
				});
			}
			
			
		},
		searchDrop : function(){
			
			$('.query-ser-hold').on({
				click : function(){
					
					$('.query-ser-inp').focus();
					$(this).hide();
				}
			})
			jQuery('.query-ser-inp').on({
				focus : function(){
					
					$(this).addClass('active');
				},
				blur : function(){
					var valTxt = $.trim($(this).val());
					if(valTxt == ''){
						$('.query-ser-hold').show();
					}
					$(this).removeClass('active');;
				}
			});
			$('.query-ser-inp').smartShow({ //智能查询
				url : 'http://so.xywy.com/ajax/suggest.php?source=1',
				param : 'keyword',
				panel : '.j-search-drop',
				dataWrap : "li",
				wrapClass : "cur",
				dataType: "jsonp",
				success : function(obj) {
					var str = '',
						arr = [];
				
					$('.query-ser-hold').hide();
					if (obj.result > 0 && obj.data) {
						arr = obj.data.split(',');
						$.each(arr, function(index, val) {
							str += '<li><a href="javascript:;">' + val + '</a></li>';
						});
						
						$('.j-search-drop').html(str).show();
						$(document).on('keydown', function(e){
							if(e.keyCode == 9){
								$('.j-search-drop').html('').hide();
							}
						});
					} else {
						$('.j-search-drop').html('').hide();
					}
				},
				operate : function() {
					$('.query-ser-fm').submit();
				}
			});
			
		},	
		removeNode : function(){
			$(document).on('click','.query-mark-result a',function(e){ //删除标签
				var target = $(e.target);
				target.parent('a').remove();
			});
			$('.query-empty').on('click',function(){ //清空标签
				$('.query-mark-result a').remove();
			})
			
			
		}, 
		pageChange : function(){
			$('.page-all').on('click',function(){
				if($(this).parents('.page-wrap').hasClass('page-no')){
					$(this).parents('.page-wrap').removeClass('page-no')
				}else{
					$(this).parents('.page-wrap').addClass('page-no')
				}
				
			})
		},
		pubPop : function(){
			$('.opc-bg').height($(document).height());
			$('.close-compare-btn').on('click',function(){
				$(this).parents('.pub-compare-box').hide();	
				$('.opc-bg').hide();
			})
			$('.close-compare-max').on('click',function(){
				$(this).parent().hide();
				$('.opc-bg').hide();	
			})
			//对比选择数量限制
			$('.fix-compare-btn,.join-compare').on('click',function(){
				if($('.table-handle').find('.checked-box').length > 3){
					$('.opc-bg').show();
					$('.pub-compare-max').show();
				}
				if($('.table-handle').find('.checked-box').length < 1){
					$('.opc-bg').show();
					$('.pub-compare-box').show();
				}
				
			})
			
		},
		goTop : function(){
			var height = $(window).height();
			$(window).on('scroll',function(){
				var topSet = $(this).scrollTop();
				if(topSet > height){
					$('.go-top').addClass('show-top');
				}else{
					$('.go-top').removeClass('show-top');
				}	
				
			});
			$('.go-top').on('click',function(){
				$('body,html').animate({'scrollTop':0},500);
					
			})	
			
		},
		tableFun : function(){
			
			var that = this;
			//排序按钮
			var tagClass = ['rank-ico-default','rank-ico-down','rank-ico-up'],
				clickNum = 0;
				
			$('.rank-ico').on('click',function(){
				clickNum++;
				if(clickNum > 2){
					clickNum = 1;
				}
				$('.table-hd .rank-ico').attr('class','rank-ico rank-ico-default');
				$(this).attr('class','rank-ico '+tagClass[clickNum] +'');	
			})
			
			//偶数行背景色
			$('.table-bd li:odd').css({'backgroundColor':'#f6f8fa'});
			$('.table-auto-bd li:odd').css({'backgroundColor':'#f6f8fa'});
			$('.table-auto-bd tr:odd').css({'backgroundColor':'#f6f8fa'});
			
			//单选按钮
			var checkOnes = $('.check-btn'),
				liLen = $('.table-bd-left li').length,
				num = $('.checked-box').length;
			checkOnes.bind('click', function(){
				num = $('.checked-box').length;
			   if($(this).hasClass('check-box')){
				   num++;
				   if(num == liLen){
					  num =  liLen;
					}
				   $(this).removeClass('check-box').addClass('checked-box');
				   $(this).attr('data-checked', 'true');
				   
				   
				}else{
					num --
					if(num < 0){
						num = 0;
					}
					$(this).addClass('check-box').removeClass('checked-box');
					$(this).attr('data-checked', 'false');
					$('.check-all-btn').removeClass('checked-all-box').addClass('check-all-box');
				}
				
				if(num > 0){
					$('.export-txt').html('导出Excel');
					$('.fix-export-txt').html('导出');
				}else{
					$('.export-txt').html('全部导出Excel');
					$('.fix-export-txt').html('全部导出');
				}
				
				if(num == liLen){
					$('.check-all-btn').removeClass('check-all-box').addClass('checked-all-box');
				}
				
			});
			
			//全选
			$('.check-all-btn').on('click',function(){
				if($(this).hasClass('check-all-box')){
					$(this).removeClass('check-all-box').addClass('checked-all-box');
					$('.check-btn').removeClass('check-box').addClass('checked-box');
					num = $('.checked-box').length;
					$('.export-txt').html('导出Excel');
					$('.fix-export-txt').html('导出');
				}else{
					$(this).removeClass('checked-all-box').addClass('check-all-box');
					num = $('.checked-box').length;
					$('.check-btn').removeClass('checked-box').addClass('check-box');
					$('.export-txt').html('全部导出Excel');
					$('.fix-export-txt').html('全部导出');
					
				}	
			})

			
			
			//窗口冻结效果
			
			$(window).resize(function() {
				
				window.location.reload();
				if($('.table-box').length != 0){
					topDis = $('.table-box').offset().top;
				}
				
				that.fixTable();
				
                
            });

			
		},
		fixTable : function(){ //滚动时表格冻结
				
			eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('j Q=$(\'.2-7-5\'),B=$(\'.2-7-k\'),m=$(\'.2-o-5\'),D=$(\'.2-o-k\');j t=$(\'.2-5-3\').3()+$(\'.2-k-3\').3()+R,z=$(\'.2-7\').c()+$(\'.2-o\').c()+1;$(\'.w-G\').3($(e).3()-$(\'.l-8\').3()-$(\'.n-8\').3()-O);$(\'.K-k-y\').c($(e).c());$(\'.2-W\').3(t);$(\'.2-M\').3(t+r);$(\'.h-u-g,.h-v-g\').4({\'5\':$(\'.l-8\').3()+$(\'.n-8\').3()+r+\'6\'});$(\'.2-d-7\').3($(\'.2-d-o\').3());i($(\'.2-L\').x!=0){s=$(\'.2-L\').12().9}$(e).11(\'w\',Z(){j a=$(e).X(),q=$(e).q(),C=$(\'.l-8\').3()+$(\'.n-8\').3()+U,p=-a+C;P=$(\'.S\').c()+1,E=$(\'.2-7\').c()+1;Q.4({\'5\':a+\'6\'});m.4({\'5\':a+\'6\'});i(q>s+Y){$(\'.h-u-g,.h-v-g\').T()}N{$(\'.h-u-g,.h-v-g\').V()}i(q>s-O){$(\'.2-7-5\').4({\'f\':\'A\',\'9\':\'J\',\'5\':C});B.4({\'9\':P+\'6\',\'5\':p+\'6\',\'f\':\'A\'});m.4({\'9\':0+\'6\'});D.4({\'I\':E+\'6\'});i($(\'.2-d-7\').x!=0){$(\'.2-d-7\').4({\'f\':\'A\',\'9\':\'J\',\'5\':p+\'6\'})}}N{$(\'.2-7-5\').4({\'f\':\'10\',\'9\':\'0\'});B.4({\'5\':p+\'6\',\'f\':\'H\'});m.4({\'9\':E+\'6\'});D.4({\'I\':0});i($(\'.2-d-7\').x!=0){$(\'.2-d-7\').4({\'f\':\'H\',\'9\':0,\'5\':0})}}j b=$(\'.2-M\').3()+$(\'.l-8\').3()+$(\'.n-8\').3()+r-$(e).3();$(\'.K-y\').4({\'c\':z+F+\'6\',\'5\':a-r+\'6\'});$(\'.13-y\').4({\'c\':z+F+\'6\',\'5\':a+\'6\'});$(\'.w-G\').4({\'14\':a})})',62,67,'||table|width|css|left|px|hd|nav|top|||height|auto|window|position|btn|fix|if|var|right|main|bdLeft|side|bd|fixLeft|scrollTop|30|topDis|tableWidth|compare|export|scroll|length|bg|tableHeight|fixed|hdRight|posLeft|bdRight|tableHd|85|mar|static|marginTop|81px|gray|box|area|else|60|headerHeight|hdLeft|25|header|show|54|hide|container|scrollLeft|80|function|absolute|on|offset|white|marginLeft'.split('|'),0,{}))
			
				
			
			
		}
	
	
	
	





}
control.init();

$('.table-jj-company1').each(function(index, element) {
    var txt = $(this).html().substring(0,6);
	$(this).html(txt)
});
