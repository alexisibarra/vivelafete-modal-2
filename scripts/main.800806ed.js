function toggle_visibility(a){var b=document.getElementById(a);b.style.display="block"==b.style.display?"none":"block"}function closeModal(){var a=$.magnificPopup.instance;a.close()}$(".open-popup-link").magnificPopup({type:"inline",midClick:!0}),$.magnificPopup.open({items:{src:"#test-popup",type:"inline"}});