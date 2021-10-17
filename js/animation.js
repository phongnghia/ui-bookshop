$(document).ready(function() {
	Effect();
});
function Effect(){
	window.addEventListener("scroll",function(){
		let header = document.querySelector('.header__sticky');
		let cart = document.querySelector('.cart__average');
		header.classList.toggle("sticky",window.scrollY > 0);
		cart.classList.toggle("cart__active",window.scrollY > 0);
	});
	$('.menu__dropdown').hover(function() {
		$(this).css({
			'opacity' : '1',
			'visibility' : 'visible',
			'top' : '100%'
		})
	}, function() {
		$(this).removeAttr('style');
	});
	$('.list__sale').slick({
		slidesToShow: 4,
		infinite: false
	});
	$('.related__product').slick({
		slidesToShow: 3,
		infinite: false
	});
	$('.menu__product a').click(function() {
		$('.menu__product a').removeClass('active__menu');
		$(this).addClass('active__menu');
	});

	// Load cart
	
	if(cart.length == 0){
		let elsum = $(`
			<label class="py-3 mx-3">Giỏ hàng trống !</label>
		`);
		let footer = $(`
			<label>Tổng : 0 ₫</label>
			<a href="cart.html">Xem chi tiết</a>
			<a href="#">Thanh toán</a>
		`);
		$('.list__cart').append(elsum);
		$('.cart__sum').append(footer);
	}

	// Button search

	$(".btn__search").click(function(){
		$(".search").fadeIn(function(){
			$(".search").css({
				"display" : "block",
				"z-index" : "999999"
			});
		});
		
	});
	$(".close-search").click(function(){
		$(".search").fadeOut(function(){
			$(".search").hide('slow');
		});
		$('body').removeAttr('style');
	});
}