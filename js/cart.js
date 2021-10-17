// Add cart
function addCart(obj) {
    let step1 = $(obj).parent();
    let step = step1.parent();
    let tensach = step.find('.product__text a').text();
    let img = step.find('.product__img img').attr('src');
    let getPrice = step.find('.product__price label').text();
    let gia = new Number(getPrice.replace(/[^0-9]+/g, ""));
    let item = {};
    let bool = false;
    let demCart = 0;
    if (cart.length == 0) {
        let item = {};
        item.tensach = tensach;
        item.img = img;
        item.gia = gia;
        item.sl = 1;
        cart.push(item);
    } else {
        for (let i = 0; i < cart.length; i++) {
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
    for (let i = 0; i < cart.length; i++) {
        demCart = demCart + cart[i].sl;
    }
    $('.shop__modal').empty();
    $('.cart__average').text(demCart);
    let mes = "Đã thêm thành công vào giỏ hàng !";
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

// Delete product from cart
function deleteCart(obj) {
    let step1 = $(obj).parent();
    let step2 = step1.parent();
    let step = step2.parent();
    let tensach = step.find('.cart__title label').text();
    let dem = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].tensach == tensach) {
            cart.splice(i, 1);
            loadCart();
            let mes = "Đã xóa sản phẩm khỏi giỏ hàng !";
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
    for(let i = 0 ; i < cart.length; i++){
        dem = dem + cart[i].sl;
    }
    $('.cart__average').text(dem);
}

// Load cart

function loadCart() {
    $('.list__cart').empty();
    $('.list__cart').removeAttr('style');
    $('.cart__sum').empty();
    let thanhtien = 0;
    if (cart.length == 0) {
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
    } else {
        for (let i = 0; i < cart.length; i++) {
            thanhtien += cart[i].sl * cart[i].gia;
            let gia = fomatter.format(cart[i].gia);
            let elpro = $(`
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
        let footer = $(`
			<label>Tổng : ${fomatter.format(thanhtien)}</label>
			<a href="cart.html">Xem chi tiết</a>
			<a href="#">Thanh toán</a>
		`);
        $('.cart__sum').append(footer);
        let x = $('.menu_cart').height();
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
    let mes = $(`
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