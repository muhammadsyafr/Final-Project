$('.carousel').carousel();

AOS.init();

$("#login").click(function(){
    Swal.fire({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: 'animated tada'
      })
})