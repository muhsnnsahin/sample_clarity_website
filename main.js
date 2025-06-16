$(document).ready(function () {
  // Modal açma işlemi (page2 için)
  $("#openModal").click(function () {
    var myModal = new bootstrap.Modal(document.getElementById("infoModal"));
    myModal.show();
  });

  // İletişim formu validasyon ve animasyon (page3 için)
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    var form = this;

    // Bootstrap validasyon
    if (!form.checkValidity()) {
      e.stopPropagation();
      $(form).addClass("was-validated");
      return;
    }

    // Gönderme animasyonu
    var submitBtn = $(form).find("button[type='submit']");
    submitBtn.prop("disabled", true).text("Gönderiliyor...");

    // Basit animasyon örneği (loading simülasyonu)
    setTimeout(function () {
      $("#formResponse").html(
        '<div class="alert alert-success" role="alert">Mesajınız başarıyla gönderildi!</div>'
      );
      submitBtn.prop("disabled", false).text("Gönder");
      form.reset();
      $(form).removeClass("was-validated");
    }, 1500);
  });
});
