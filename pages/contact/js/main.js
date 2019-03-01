
AOS.init();

$("#submit").click(function(){

    var first = $("#first").val();
    var last = $("#last").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var fixEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(first == '' || last == '' || email == '' || message == ''){
        swal({
            title: "Cek Fields",
            text: "Ada form yang belum terisi",
            icon: "warning",
            button: "ok",
          });
    }
    else {
        swal({
            title: "Berhasil",
            text: "Berhasil mengirimkan data ke Formspree",
            icon: "success",
            button: "ok",
          });
          
    }        
    
})
