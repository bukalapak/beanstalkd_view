(function() {

  $(document).ready(function() {
    $("#connection-select").change(function(){
      $(this).parent("form").submit();
    });
  });

})();
