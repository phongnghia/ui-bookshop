var el = document.getElementById('image');
var arr = el.getAttribute('src').split('user/');
var resize = new Croppie(el, {
    viewport: { width: 512, height: 512 },
    boundary: {
        width: 512,
        height: 512,
    },
    showZoomer: true,
    mouseWheelZoom: 'ctrl'
});
resize.bind({
    url: el.getAttribute('src'),
});