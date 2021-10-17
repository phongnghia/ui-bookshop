$(document).ready(function() {
    $('.content__title h5').text("Trang chủ");
    $('.admin__list ul li a').click(function() {
        clickAdmin(this);
    });
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Văn học', 'Tiểu sử hồi ký', 'Kinh tế - Tâm lý học', 'Quản lý kinh doanh', 'Khoa học viễn tưởng', 'Văn phòng phẩm'],
            datasets: [{
                label: '# of Votes',
                data: [21, 56, 13, 15, 22, 35],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});

function clickAdmin(obj) {
    $('.content__title h5').empty();
    $('.admin__list ul li a').removeClass('admin__active');
    $(obj).addClass('admin__active');
    let url = $(obj).attr('href');
    $('.admin__item').hide();
    $(url).show();
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].code == url) {
            $('.content__title h5').text(tab[i].ten);
        }
    }
}
let tab = [{
        code: "#home",
        ten: "Trang chủ"
    },
    {
        code: "#mn_product",
        ten: "Quản lý sản phẩm"
    },
    {
        code: "#mn_bill",
        ten: "Quản lý hóa đơn"
    },
    {
        code: "#mn_user",
        ten: "Quản lý khách hàng"
    },
    {
        code: "#change",
        ten: "Thay đổi thông tin"
    }
]