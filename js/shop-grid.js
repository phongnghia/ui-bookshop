$(document).ready(function() {
	loadCategories();
	loadShopGrid();
});

function loadShopGrid(){

	// Get url

	var url = window.location.href.split("?t=");
	console.log(url[1]);
	dem = 0;

	// Load Breadcrumb

	if(url[1] == "KTE_TLH"){

		// Load title

		$('title').text("Kinh tế - Tâm lý học");
		var ol = $(`
			<li class="breadcrumb-item"><a href="shop-grid.html?t=${url[1]}">Kinh tế - Tâm lý học</a></li>
		`);
		$('.breadcrumb').append(ol);
	}else{
		for(var i = 0 ; i < title.length ; i ++){
			if(title[i].loaisach == url[1]){

				// Load title

				$('title').text(title[i].tenloai);

				var ol = $(`
					<li class="breadcrumb-item"><a href="shop-grid.html?t=${title[i].loaisach}">${title[i].tenloai}</a></li>
				`);
				$('.breadcrumb').append(ol);
			}
		}
	}
	
	// Load Shop grid product

	if(url[1] == "KTE_TLH"){
		for (var i = 0 ; i < arr.length ; i++){
			if(dem == 9){
				continue;
			}else{
				if(arr[i].loaisach == "KTE" || arr[i].loaisach == "TLH"){
					var el = $(`
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
					$('.grid__product').append(el);
					dem++;
				}
			}
		}
		dem = 0;
	}else{
		for (var i = 0 ; i < arr.length ; i++){
			if(dem == 9){
				continue;
			}else{
				if(arr[i].loaisach == url[1]){
					var el = $(`
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
					$('.grid__product').append(el);
					dem++;
				}
			}
		}
		dem = 0;
	}
}