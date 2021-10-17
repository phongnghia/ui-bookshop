// Init array
let arr = [
	{
		id: 1,
		loaisach: "QLKD",
		tensach: "Kỹ Năng Đàm Phán Hiệu Quả Trong Kinh Doanh",
		img: "damphanhieuqua.jpg",
		giagoc: 129000,
		giamgia: 50
	},
	{
		id: 2,
		loaisach: "TLH",
		tensach: "Thuật Đắc Nhân Tâm Nâng Tầm Hiệu Suất",
		img: "dacnhantam.jpg",
		giagoc: 119000,
		giamgia: 50
	},
	{
		id: 3,
		loaisach: "TLH",
		tensach: "Nghệ thuật giao tiếp nơi công sở",
		img: "giaotiepcs.jpg",
		giagoc: 110000,
		giamgia: 50
	},
	{
		id: 4,
		loaisach: "TSHK",
		tensach: "Đại học hay học đại",
		img: "hocdaidaihoc.png",
		giagoc: 129000,
		giamgia: 50
	},
	{
		id: 5,
		loaisach: "TNHI",
		tensach: "Hoàng tử bé - Tập 8",
		img: "hoangtube.jpg",
		giagoc: 49000,
		giamgia: 50
	},
	{
		id: 6,
		loaisach: "QLKD",
		tensach: "Chiến lược kẻ thắng",
		img: "chienluockethang.jpg",
		giagoc: 149000,
		giamgia: 50
	},
	{
		id: 7,
		loaisach: "TSHK",
		tensach: "Nokia - Từ sụp đổ đến hồi sinh",
		img: "nokia.jpg",
		giagoc: 198000,
		giamgia: 50
	},
	{
		id: 8,
		loaisach: "TSHK",
		tensach: "Trump - Đừng bao giờ bỏ cuộc",
		img: "trumpdungbaogiobocuoc.jpg",
		giagoc: 65000,
		giamgia: 10
	},
	{
		id: 9,
		loaisach: "TSHK",
		tensach: "The Big Four - 4 Đại gia kiểm toán",
		img: "4daigiakiemtoanbia1.jpg",
		giagoc: 168000,
		giamgia: 40
	},
	{
		id: 10,
		loaisach: "TSHK",
		tensach: "Titan - Gia Tộc Rockefeller",
		img: "titan_2.jpg",
		giagoc: 499000,
		giamgia: 20
	},
	{
		id: 11,
		loaisach: "TSHK",
		tensach: "Khi Hơi Thở Hóa Thinh Không",
		img: "khihoithohoathinhkhong.jpg",
		giagoc: 109000,
		giamgia: 20
	},
	{
		id: 12,
		loaisach: "TSHK",
		tensach: "Điệp Viên Hoàn Hảo X6 (Tái Bản 2019)",
		img: "diepvienx6.jpg",
		giagoc: 168000,
		giamgia: 20
	},
	{
		id: 13,
		loaisach: "TSHK",
		tensach: "Homo Deus - Lược Sử Tương Lai",
		img: "homes_dues.jpg",
		giagoc: 189000,
		giamgia: 17
	},
	{
		id: 14,
		loaisach: "TSHK",
		tensach: "Nhật Ký Đặng Thùy Trâm (Tái Bản 2018)",
		img: "dangthuytram.jpg",
		giagoc: 76000,
		giamgia: 20
	},
	{
		id: 15,
		loaisach: "TSHK",
		tensach: "Nhật Ký Phi Công Tiêm Kích",
		img: "phicongtiemkich.jpg",
		giagoc: 150000,
		giamgia: 15
	},
	{
		id: 16,
		loaisach: "TSHK",
		tensach: "Bị Theo Dõi - Bí Mật An Ninh Mạng ",
		img: "bitheodoi.jpg",
		giagoc: 378000,
		giamgia: 20
	},
	{
		id: 17,
		loaisach: "TSHK",
		tensach: "Con Về ",
		img: "conve.jpg",
		giagoc: 59000,
		giamgia: 20
	},
	{
		id: 18,
		loaisach: "VH_TN",
		tensach: "Từ Điển Tiếng “Em” ",
		img: "VH_tudientiengem.jpg",
		giagoc: 69000,
		giamgia: 20
	},
	{
		id: 19,
		loaisach: "VH_TN",
		tensach: "Con Chim Xanh Biếc Bay Về - Tặng Kèm 6 Postcard ",
		img: "VH_conchimxanhbietbayve.jpg",
		giagoc: 15000,
		giamgia: 25
	},
	{
		id: 20,
		loaisach: "VH_TN",
		tensach: "Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2020) ",
		img: "VH_tobinhyen.jpg",
		giagoc: 78000,
		giamgia: 20
	},
	{
		id: 21,
		loaisach: "VH_TN",
		tensach: "Xin Chào Tình Yêu ",
		img: "VH_xinchaotinhyeu.jpg",
		giagoc: 59000,
		giamgia: 20
	},
	{
		id: 22,
		loaisach: "VH_TN",
		tensach: "Vui Vẻ Không Quạu Nha ",
		img: "VH_vuivekoquau.jpg",
		giagoc: 75000,
		giamgia: 20
	},
	{
		id: 23,
		loaisach: "VH_TN",
		tensach: "Nhà Giả Kim (Tái Bản 2020) ",
		img: "VH_nhagiakim.jpg",
		giagoc: 79000,
		giamgia: 15
	},
	{
		id: 24,
		loaisach: "VH_TN",
		tensach: "Có Một Người Từng Là Tất Cả ",
		img: "VH_comotnguoitunglaall.jpg",
		giagoc: 96000,
		giamgia: 20
	},
	{
		id: 25,
		loaisach: "VH_TN",
		tensach: "Dấu Xưa, Vui Lành - Bìa Cứng ",
		img: "VH_dauxua.jpg",
		giagoc: 59000,
		giamgia: 20
	},
	{
		id: 26,
		loaisach: "VH_TN",
		tensach: "Dấu Chân Trên Cát (Tái Bản 2020) ",
		img: "VH_dauchantrencat.jpg",
		giagoc: 148000,
		giamgia: 20
	},
	{
		id: 27,
		loaisach: "VH_TN",
		tensach: "Hai Số Phận - Bìa Cứng ",
		img: "VH_haisophan.jpg",
		giagoc: 175000,
		giamgia: 17
	},
	{
		id: 28,
		loaisach: "TNHI",
		tensach: "Polar Bears Past Bedtime (Magic Tree House, No. 12) ",
		img: "polar.jpg",
		giagoc: 105000,
		giamgia: 15
	}
];
let title = [
	{
		loaisach: "VH_TN",
		tenloai: "Văn học trong nước"
	},
	{
		loaisach: "KTE",
		tenloai: "Kinh tế"
	},
	{
		loaisach: "NNGU",
		tenloai: "Ngoại ngữ"
	},
	{
		loaisach: "VH_NN",
		tenloai: "Văn học nước ngoài"
	},
	{
		loaisach: "TSHK",
		tenloai: "Tiểu sử - hồi ký"
	},
	{
		loaisach: "QLKD",
		tenloai: "Quản lý kinh doanh"
	},
	{
		loaisach: "TLH",
		tenloai: "Tâm lý học"
	},
	{
		loaisach: "KHVT",
		tenloai: "Khoa học - viễn tưởng"
	},
	{
		loaisach: "TNHI",
		tenloai: "Thiếu nhi"
	},
	{
		loaisach: "TEM",
		tenloai: "Sách trẻ em"
	},
	{
		loaisach: "GKTK",
		tenloai: "Giáo khoa - tham khảo"
	},
	{
		loaisach: "VPP",
		tenloai: "Văn phòng phẩm"
	}
];
let details = [
	{
		id: 1,
		nhacc: "1980 Books",
		nhaxb: "NXB Đại học kinh tế Quốc dân",
		tacgia: "Scott Gerber, Ryan Pauph",
		hinhthuc: "Bìa mềm",
		nguoidich: "Hà Tiến Hưng",
		namxb: 2019,
		trongluong: 350,
		sotrang: 336
	},
	{
		id: 2,
		nhacc: "1980 Books",
		nhaxb: "NXB Lao Động",
		tacgia: "Mackenzie Kyle",
		hinhthuc: "Bìa mềm",
		nguoidich: "Trương Thị Quế Anh",
		namxb: 2018,
		trongluong: 350,
		sotrang: 324
	},
	{
		id: 3,
		nhacc: "1980 Books",
		nhaxb: "NXB Phụ Nữ",
		tacgia: "Jessica Higgins",
		hinhthuc: "Bìa mềm",
		nguoidich: "Phạm Lan Anh",
		namxb: 2019,
		trongluong: 280,
		sotrang: 252
	},
	{
		id: 4,
		nhacc: "1980 Books",
		nhaxb: "NXB Đại học kinh tế Quốc dân",
		tacgia: "Martin Krengel",
		hinhthuc: "Bìa mềm",
		nguoidich: "Ngân Hà",
		namxb: 2017,
		trongluong: 500,
		sotrang: 460
	},
	{
		id: 5,
		nhacc: "1980 Books",
		nhaxb: "NXB Thế Giới",
		tacgia: "Nhiều Tác Giả",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2017,
		trongluong: 200,
		sotrang: 56
	},
	{
		id: 6,
		nhacc: "1980 Books",
		nhaxb: "NXB Lao Động",
		tacgia: "Suzuki Hiroki",
		hinhthuc: "Bìa mềm",
		nguoidich: "Nhật Linh",
		namxb: 2019,
		trongluong: 400,
		sotrang: 376
	},
	{
		id: 7,
		nhacc: "1980 Books",
		nhaxb: "NXB Công Thương",
		tacgia: "Risto Siilasmaa",
		hinhthuc: "Bìa mềm",
		nguoidich: "Dương Thục Nữ",
		namxb: 2019,
		trongluong: 300,
		sotrang: null
	},
	{
		id: 8,
		nhacc: "NXB Trẻ",
		nhaxb: "NXB Trẻ",
		tacgia: "Donald J.Trump & Meredith Mclver",
		hinhthuc: "Bìa mềm",
		nguoidich: "Võ Công Hùng",
		namxb: 2017,
		trongluong: 220,
		sotrang: 216
	},
	{
		id: 9,
		nhacc: "Bestbooks Việt Nam",
		nhaxb: "NXB Tài Chính",
		tacgia: "Ian D Gow, Stuart Kells",
		hinhthuc: "Bìa mềm",
		nguoidich: "Phúc Chi",
		namxb: 2020,
		trongluong: 300,
		sotrang: 272
	},
	{
		id: 10,
		nhacc: "Alpha Books",
		nhaxb: "NXB Thế Giới",
		tacgia: "Ron Chernow",
		hinhthuc: "Bìa cứng",
		nguoidich: null,
		namxb: 2020,
		trongluong: 1500,
		sotrang: 1062
	},
	{
		id: 11,
		nhacc: "Alpha Books",
		nhaxb: "NXB Lao Động",
		tacgia: "Paul Kalanithi",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 250,
		sotrang: 236
	},
	{
		id: 12,
		nhacc: "FIRST NEWS",
		nhaxb: "NXB Hồng Đức",
		tacgia: "Larry Berman",
		hinhthuc: "Bìa mềm",
		nguoidich: "Đỗ Hùng",
		namxb: 2019,
		trongluong: 500,
		sotrang: 392
	},
	{
		id: 13,
		nhacc: "Nhã Nam",
		nhaxb: "NXB Thế Giới",
		tacgia: "Yuval Noah Harari",
		hinhthuc: "Bìa mềm",
		nguoidich: "Dương Ngọc Trà",
		namxb: 2018,
		trongluong: 520,
		sotrang: 508
	},
	{
		id: 14,
		nhacc: "Nhã Nam",
		nhaxb: "NXB Hội Nhà Văn",
		tacgia: "Đặng Thuỳ Trâm",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2018,
		trongluong: 300,
		sotrang: 290
	},
	{
		id: 15,
		nhacc: "NXB Trẻ",
		nhaxb: "NXB Trẻ",
		tacgia: "Nguyễn Đức Soát",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 450,
		sotrang: 440
	},
	{
		id: 16,
		nhacc: "Phanbook",
		nhaxb: "NXB Đà Nẵng",
		tacgia: "Edward Snowden",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 380,
		sotrang: 373
	},
	{
		id: 17,
		nhacc: "Phụ Nữ",
		nhaxb: "NXB Phụ Nữ Việt Nam",
		tacgia: "Đào Hải Ninh",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 150,
		sotrang: 176
	},
	{
		id: 18,
		nhacc: "Skybooks",
		nhaxb: "NXB Phụ Nữ Việt Nam",
		tacgia: "Khotudien",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 300,
		sotrang: 280
	},
	{
		id: 19,
		nhacc: "NXB Trẻ",
		nhaxb: "NXB Trẻ",
		tacgia: "Nguyễn Nhật Ánh",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 400,
		sotrang: 396
	},
	{
		id: 20,
		nhacc: "Skybooks",
		nhaxb: "NXB Phụ Nữ Việt Nam",
		tacgia: "Kulzsc",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 120,
		sotrang: 96
	},
	{
		id: 21,
		nhacc: "AZ Việt Nam",
		nhaxb: "NXB Hà Nội",
		tacgia: "Hiên",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 150,
		sotrang: 176
	},
	{
		id: 22,
		nhacc: "Skybooks",
		nhaxb: "NXB Phụ Nữ Việt Nam",
		tacgia: "Ở Đây Zui Nè",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: null,
		trongluong: 300,
		sotrang: 280
	},
	{
		id: 23,
		nhacc: "Nhã Nam",
		nhaxb: "NXB Hội Nhà Văn",
		tacgia: "Paulo Coelho",
		hinhthuc: "Bìa mềm",
		nguoidich: "Lê Chu Cầu",
		namxb: 2020,
		trongluong: 220,
		sotrang: 227
	},
	{
		id: 24,
		nhacc: "AZ Việt Nam",
		nhaxb: "NXB Văn Học",
		tacgia: "Trí",
		hinhthuc: "Bìa cứng",
		nguoidich: null,
		namxb: 2020,
		trongluong: 250,
		sotrang: 232
	},
	{
		id: 25,
		nhacc: "ZGROUP",
		nhaxb: "NXB Hà Nội",
		tacgia: "Bạch Lạc Mai",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 400,
		sotrang: 376
	},
	{
		id: 26,
		nhacc: "FIRST NEWS",
		nhaxb: "NXB Tổng Hợp TPHCM",
		tacgia: "Nguyên Phong",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 2020,
		trongluong: 450,
		sotrang: 432
	},
	{
		id: 27,
		nhacc: "Huy Hoang Bookstore",
		nhaxb: "NXB Văn học",
		tacgia: "Jeffrey Archer",
		hinhthuc: "Bìa cứng",
		nguoidich: "Nguyễn Việt Hải",
		namxb: 2018,
		trongluong: 800,
		sotrang: 768
	},
	{
		id: 28,
		nhacc: "Random House",
		nhaxb: "Random House Books for Young Readers",
		tacgia: "Mary Pope Osborne",
		hinhthuc: "Bìa mềm",
		nguoidich: null,
		namxb: 1998,
		trongluong: 73,
		sotrang: 96
	}
];
let cart = [];
let major = [
	{
		tacgia: "Nguyễn Nhật Ánh",
		img: "nnanh.jpg"
	},
	{
		tacgia: "Trang Hạ",
		img: "trangha.jpg"
	},
	{
		tacgia: "Nguyễn Phong Việt",
		img: "npv.jpg"
	},
	{
		tacgia: "Nguyễn Ngọc Thạch",
		img: "nnthach.jpg"
	}
];