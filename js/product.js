$(document).ready(function() {
	loadData();
});

// BIẾN KHỞI TẠO.

const fomatter = new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 });
var dem = 0;

// LOAD DỮ LIỆU

function loadData(){

	let demCart = 0;
	// LOAD SÁCH GIẢM GIÁ.
	$('.cart__average').text(demCart);

	$('.list__sale').empty();
	for (let i = 0 ; i < arr.length ; i++){
		if(dem == 8){
			continue;
		}else{
			if(arr[i].giamgia >= 50){
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
				$('.list__sale').append(el);
				dem++;
			}
		}
	}
	dem = 0;
	let url = window.location.href.split("html");
	url[1] = "#ALL";
	loadAll(url[1]);
	$('.all__product').addClass('fadeShow');

	// Load major producer

	$('.author__major').empty();
	for (let i = 0 ; i < major.length ; i++){
		if(dem == 4){
			continue;
		}else{
			let el = $(`
				<div class="col-sm-3">
					<div class="author__img text-center">
						<img src="image/producer/${major[i].img}" alt="">
					</div>
					<div class="author__text py-2 text-center ">
						<label>${major[i].tacgia}</label>
					</div>
					<div class="author__research text-center">
						<a href="#">xem chi tiết</a>
					</div>
				</div>
			`);
			$('.author__major').append(el);
			dem++;
		}
	}

}
function loadAll(obj){
	$('.all__product').removeClass('fadeShow');
	$('.all__product').empty();
	
	//LOAD TẤT CẢ SẢN PHẨM

	if(obj == null || obj == "#ALL"){
		for (let i = 0 ; i < arr.length ; i++){
			if(dem == 8){
				continue;
			}else{
				if(arr[i].giamgia >= 40){
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
					$('.all__product').append(el);
					$('.all__product').addClass('fadeShow');
					dem++;
				}
			}
		}
	}else{
		if(obj == "#STN"){
			for (let i = 0 ; i < arr.length ; i++){
				if(dem == 8){
					continue;
				}else{
					if(arr[i].loaisach == "VH_TN"){
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
						$('.all__product').append(el);
						$('.all__product').addClass('fadeShow');
						dem++;
					}
				}
			}
		}else{
			if(obj == "#SNN"){
				for (let i = 0 ; i < arr.length ; i++){
					if(dem == 8){
						continue;
					}else{
						if(arr[i].loaisach == "QLKD" || arr[i].loaisach == "KH_VT"){
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
							$('.all__product').append(el);
							$('.all__product').addClass('fadeShow');
							dem++;
						}
					}
				}
			}else{
				if(obj == "#OTHER"){
					for (let i = 0 ; i < arr.length ; i++){
						if(dem == 8){
							continue;
						}else{
							if(arr[i].loaisach == "TSHK" || arr[i].loaisach == "TLH" || arr[i].loaisach == "TNHI"){
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
								$('.all__product').append(el);
								$('.all__product').addClass('fadeShow');
								dem++;
							}
						}
					}
				}
			}
		}
	}
}
function btnProduct(obj) {
	let url = $(obj).attr('href');
	dem = 0;
	loadAll(url);
}
function loadCategories() {
	let sum = 0;
	for(let i = 0 ; i < title.length ; i++){
		for(let j = 0 ; j < arr.length ; j ++){
			if(arr[j].loaisach == title[i].loaisach){
				sum = sum + 1;
			}
		}
		let getLink = document.getElementById(title[i].loaisach).href = "shop-grid.html?t="+title[i].loaisach;
		let node = document.getElementById(title[i].loaisach).children;
		node[0].innerHTML = "("+sum+")";
		sum = 0;
	}
}