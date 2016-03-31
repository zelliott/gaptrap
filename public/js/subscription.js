var ref = new Firebase("https://gaptrap.firebaseio.com/");

$('.subscribe-form').submit(function (e) {
  e.preventDefault();

  var data = {
    email: $('.email').val()
  };

  ref.child('/emails').set(data, function (error) {
    if (error) {

    }

    $('.subscribe').html(
      '<div class="subscribe-success"><span class="oi oi-l" data-glyph="thumb-up"></span>You\'re all set.</div>'
    );
  });
});
