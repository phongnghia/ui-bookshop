$(document).ready(function() {
	
	loadSingleProduct();

});

let url = window.location.href.split("?id=");

function loadSingleProduct () {
	
	// Get url
	
	// let url = window.location.href.split("?id=");
	let getLoai;

	// Load Breadcrum item
	// Get id

	for(let i = 0 ; i < arr.length ; i++){
		if(arr[i].id == url[1]){

			// Load Title

			$('title').text(arr[i].tensach);

			// Load Breadcrum item

			for(let j = 0 ; j < title.length ; j ++){
				if(title[j].loaisach == arr[i].loaisach){
					let ol = $(`
						<li class="breadcrumb-item"><a href="shop-grid.html?t=${arr[i].loaisach}">${title[j].tenloai}</a></li>
						<li class="breadcrumb-item active"><a href="single-product.html?id=${arr[i].id}">${arr[i].tensach}</a></li>
					`);
					$('.breadcrumb').append(ol);
					// Load Categories
					$('.single__categori a').text(title[j].tenloai);
				}
			}

		// Load Product view

			// Image product
			$('.single__img img').attr("src", "image/product/big_img/"+arr[i].img);

			// Title product
			$('.product__tilte h5').text(arr[i].tensach);

			// Price product
			let sale = (arr[i].giamgia/100);
			let price = $(`
				<label>${fomatter.format(arr[i].giagoc - (arr[i].giagoc*sale))}</label>
				<span class="price mx-3">${fomatter.format(arr[i].giagoc)}</span>
				<span class="sale mx-3">- ${arr[i].giamgia}%</span>
			`);
			$('.single__price').append(price);

		// Load Product details
			for(let k = 0 ; k < details.length ; k ++){
				if(details[k].id == arr[i].id){
					let tr = $(`
						<tr>
							<td>Mã sản phẩm</td>
							<td>No.0000${arr[i].id}</td>
						</tr>
						<tr>
							<td>Nhà cung cấp</td>
							<td>${details[k].nhacc}</td>
						</tr>
						<tr>
							<td>Nhà xuất bản</td>
							<td>${details[k].nhaxb}</td>
						</tr>
						<tr>
							<td>Tác giả</td>
							<td>${details[k].tacgia}</td>
						</tr>
						<tr>
							<td>Năm xuất bản</td>
							<td>${details[k].namxb}</td>
						</tr>
						<tr>
							<td>Hình thức bìa</td>
							<td>${details[k].hinhthuc}</td>
						</tr>
						<tr>
							<td>Trọng lượng</td>
							<td>${details[k].trongluong}</td>
						</tr>
						<tr>
							<td>Số trang</td>
							<td>${details[k].sotrang}</td>
						</tr>
						<tr>
							<td>Người dịch</td>
							<td>${details[k].nguoidich}</td>
						</tr>
					`);
					$('.single__details tbody').append(tr);
				}
			}
			getLoai = arr[i].loaisach;
		}
	}

	// Load related product of single product 
	
	$('.related__product').empty();
	for (let i = 0 ; i < arr.length ; i++){
		if(dem == 8){
			continue;
		}else{
			if(arr[i].loaisach == getLoai){
				let el = $(`
					<div class="product__woo">
						<div class="product__img">
							<img src="image/product/big_img/${arr[i].img}" alt="">
						</div>
						<div class="product__text pt-2 text-center">
							<a href="single-product.html?id=${arr[i].id}">${arr[i].tensach}</a>
						</div>
						<div class="product__cart">
							<i class="fa fa-shopping-cart" onclick="addCart(this)" aria-hidden="true"></i>
						</div>
						<div class="product__price">
							<label>${fomatter.format(arr[i].giagoc-(arr[i].giagoc*arr[i].giamgia)/100)}</label>
							<span class="mx-2">${fomatter.format(arr[i].giagoc)}</span>
							<span class="mx-2">${arr[i].giamgia}%</span>
						</div>
					</div>
				`);
				$('.related__product').append(el);
				dem++;
			}
		}
	}
	dem = 0;
	loadCategories();

}
function showModal(){
	let qty = document.querySelector('.single__qty input').value;
	for(let i = 0 ; i < arr.length ; i++){
		if(arr[i].id == url[1]){
			let el= $(`
				<div class="modal__product">
					<i class="fa fa-times close__modal" onclick="closeModal()" aria-hidden="true"></i>
					<div class="row">
						<div class="col-sm-6 single__img">
							<!-- Image product -->
							<img src="image/product/big_img/${arr[i].img}" alt="">
						</div>
						<div class="col-sm-6 modal__body">
							<div class="single__title product__tilte">
								<h5>
									${arr[i].tensach}
								</h5>
							</div>
							<div class="single__price py-3 border-bottom">
								<label>${fomatter.format(arr[i].giagoc-(arr[i].giagoc*arr[i].giamgia)/100)}</label>
								<span class="mx-2">${fomatter.format(arr[i].giagoc)}</span>
								<span class="mx-2">${arr[i].giamgia}%</span>
							</div>
							<div class="single__qty pt-4">
								<span class="font-weight-bold">Số lượng : </span>
								<label class="mb-0 mx-3">${qty}</label>
							</div>
							<div class="single__buy py-4">
								<button class="m-0 w-50">Mua ngay</button>
							</div>
						</div>
					</div>
				</div>
			`);
			$('.modal__popup').append(el);
		}
	}
	$('.modal__popup').fadeIn('slow', function() {
		$('.modal__popup').css({
			'opacity' : '1',
			'visibility' : 'visible',
			'z-index' : '99999999'
		});
	});
}
function closeModal(){
	$(".modal__popup").fadeOut('slow', function() {
		$(this).removeAttr('style');
		$(this).empty();
	});
}