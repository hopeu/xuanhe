$(function(){
	$('.js-m,.js-m1,.js-m2,.js-m3').each(function() {
		var _this = $(this);
		if ($(window).scrollTop() > _this.offset().top - $(window).height()*0.9) {
			_this.addClass('animate');
		}
	});

	$(window).scroll(function(){
	 	$('.js-m,.js-m1,.js-m2,.js-m3').each(function() {
			var _this = $(this);
			if ($(window).scrollTop() > _this.offset().top - $(window).height()*0.9) {
				_this.addClass('animate');
			}
		});
	})

	$('.nav-click').click(function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on');
			$('.sidebar,.main,.header-m').addClass('move');
			var h=$(window).height();
			$('.container').css('height',h);
		}else{
			$(this).removeClass('on');
			$('.sidebar,.main,.header-m').removeClass('move');
			$('.container').css('height','auto');
		}
	});

	$('.side ul li.l .top').click(function(){
		if($('#dowebok').length==0){
			$("html, body").animate({scrollTop: 0}, 800);
		}else{

		}
	})

	if(!$('#dowebok').length==0){
		$('.side ul li.l .top').attr('href','#page1');
	}
})
//绗笁鏂规墿灞曠毊鑲?
function alert_tips(_msg) {
	layer.alert(_msg, {
		icon: 2,
		skin: 'layer-ext-moon' //璇ョ毊鑲ょ敱layer.seaning.com鍙嬫儏鎵╁睍銆傚叧浜庣毊鑲ょ殑鎵╁睍瑙勫垯锛屽幓杩欓噷鏌ラ槄
	})
}
function alert_true(_msg) {
	layer.alert(_msg, {
		icon: 1,
		skin: 'layer-ext-moon' //璇ョ毊鑲ょ敱layer.seaning.com鍙嬫儏鎵╁睍銆傚叧浜庣毊鑲ょ殑鎵╁睍瑙勫垯锛屽幓杩欓噷鏌ラ槄
	})
}
function alert_url(_msg, _url) {
	layer.open({
		icon: 1,
		content: _msg,
		btn: ['确定'],
		closeBtn: 0,
		yes: function (index, layero) {
			window.location.href = _url;
		},
		btn2: function (index, layero) {

		},
		cancel: function () {
			//鍙充笂瑙掑叧闂洖璋?
		}
	});
}

function fcHeaderSearch() {
	var _keys = $.trim($("#txtHeaderKeys").val());
	if (_keys == "") {
		alert_tips("请输入关键词");
		return false;
	}
	location.href = "/search/?keys=" + _keys;
	return false;
}