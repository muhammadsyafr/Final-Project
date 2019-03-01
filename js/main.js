AOS.init();

$(".hadir").click(function(){
        swal({
            title: "Forbidden",
            text: "Anda Harus Login Terlebih Dahulu!",
            icon: "warning",
            button: "OK",
            type: "error"
          });     
})