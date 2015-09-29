
$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});



$.magnificPopup.open({
    items: {
        src: '#test-popup',
        type: 'inline'
    }
});

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

function closeModal(){
    var magnificPopup = $.magnificPopup.instance;
// save instance in magnificPopup variable
    magnificPopup.close();
}
