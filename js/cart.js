function addCart(obj) {
    var step1 = $(obj).parent();
    var step = step1.parent();
    var tensach = step.find('.product__text a').text();
    var img = step.find('.product__img img').attr('src');
    var getPrice = step.find('.product__price label').text();
    var gia = new Number(getPrice.replace(/[^0-9]+/g, ""));
    var item = {};
    var bool = false;
    var demCart = 0;
    if (cart.length == 0) {
        var item = {};
        item.tensach = tensach;
        item.img = img;
        item.gia = gia;
        item.sl = 1;
        cart.push(item);
    } else {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].tensach == tensach) {
                cart[i].sl += 1;
                bool = true;
                break;
            } else {
                bool = false;
            }

        }
        if (bool == true) {
            loadCart();
        } else {
            item.tensach = tensach;
            item.img = img;
            item.gia = gia;
            item.sl = 1;
            cart.push(item);
        }
    }
    for (var i = 0; i < cart.length; i++) {
        demCart = demCart + cart[i].sl;
    }
    $('.shop__modal').empty();
    $('.cart__average').text(demCart);
    var mes = "Đã thêm thành công vào giỏ hàng !";
    messageCart(mes);
    $('.message').fadeIn('slow/400/fast', function() {
        $(this).css({
            'opacity': '1',
            'visibility': 'visible'
        });
        $(this).find('.message__img').css('color', 'var(--green)');
    }).delay(2000).fadeOut('slow/400/fast', function() {
        $(this).remove();
    });
    window.loadCart();
}

//Xoá sản phẩm khỏi giỏ hàng

function deleteCart(obj) {
    var step1 = $(obj).parent();
    var step2 = step1.parent();
    var step = step2.parent();
    var tensach = step.find('.cart__title label').text();
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].tensach == tensach) {
            cart.splice(i, 1);
            loadCart();
            var mes = "Đã xóa sản phẩm khỏi giỏ hàng !";
            messageCart(mes);
            $('.message').fadeIn('slow/400/fast', function() {
                $(this).css({
                    'opacity': '1',
                    'transition': '.5s',
                    'visibility': 'visible'
                });
            }).delay(2000).fadeOut('slow/400/fast', function() {
                $(this).remove();
            });
            continue;
        }
    }
}

// Load giỏ hàng.

function loadCart() {
    $('.list__cart').empty();
    $('.list__cart').removeAttr('style');
    $('.cart__sum').empty();
    var thanhtien = 0;
    if (cart.length == 0) {
        var elsum = $(`
			<label class="py-3 mx-3">Giỏ hàng trống !</label>
		`);
        var footer = $(`
			<label>Tổng : 0 ₫</label>
			<a href="cart.html">Xem chi tiết</a>
			<a href="#">Thanh toán</a>
		`);
        $('.list__cart').append(elsum);
        $('.cart__sum').append(footer);
    } else {
        for (var i = 0; i < cart.length; i++) {
            thanhtien += cart[i].sl * cart[i].gia;
            var gia = fomatter.format(cart[i].gia);
            var elpro = $(`
				<div class="py-3 mx-3 cart__product">
					<div class="colum-5 cart__title">
						<img src="${cart[i].img}" alt="">
						<label class="m-0">${cart[i].tensach}</label>
					</div>
					<div class="colum-5">
						<span>SL : ${cart[i].sl}</span>
						<span>${gia}</span>
						<span><i class="fa fa-times-circle" onclick="deleteCart(this)" aria-hidden="true"></i></span>
					</div>
				</div>
			`);
            $('.list__cart').append(elpro);
        }
        var footer = $(`
			<label>Tổng : ${fomatter.format(thanhtien)}</label>
			<a href="cart.html">Xem chi tiết</a>
			<a href="#">Thanh toán</a>
		`);
        $('.cart__sum').append(footer);
        var x = $('.menu_cart').height();
        if (x > 500) {
            $('.list__cart').css({
                'height': '290px',
                'overflow-y': 'scroll'
            });
        }
    }
}

// Message

function messageCart(obj) {
    var mes = $(`
		<div class="message">
			<div class="message__img">
				<i class="fa fa-check-circle" aria-hidden="true"></i>
			</div>
			<div class="message__text">
				${obj}
			</div>
		</div>
	`);
    $('.alert__cart').append(mes);
}