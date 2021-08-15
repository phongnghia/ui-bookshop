$(document).ready(function() {
});
function tabAcc(obj){
	$('.account__menu ul li a').removeClass('active');
	$('.tab').removeClass('account__active');
	$(obj).addClass('active');
	var title = $(obj).text();
	var url = $(obj).attr('href');
	$('.account__title label').text(title);
	$(url).addClass('account__active');
}