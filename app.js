
$("#name").keyup(function(event){
  $(".invalid-feedback-name").hide();
  $("#name").removeClass("valid");
  $("#name").removeClass("invalid");
  $("#cardName").text( $("#name").val() );

});

$("#name").focusout(function(event){
  $(this).removeClass("valid");
  $(this).removeClass("invalid");
  if ( $(this).val() ){
    $("#name").addClass("valid");
  } else{
    $(".invalid-feedback-name").show();
    $("#cardName").addClass("invalid");
  }
});


$("#cardNumber").keyup(function(event){
  $(".invalid-feedback-cardNumber").hide();
  $("#cardNumber").removeClass("valid");
  $("#cardNumber").removeClass("invalid");

  var temp = $("#cardNumber").val();
  temp = temp.replace(/\s/g, '');

  var formattedText = "";
  var count = 1;
  for (const char of temp) {
    formattedText += char;
    if (count % 4 == 0) {
      formattedText += ' ';
    }
    count++;
  }

  $("#cardNumber").val( temp );
  $("#cNumber").text( formattedText );


});

$("#cardNumber").focusout(function(event){
  $("#cardNumber").removeClass("valid");
  $("#cardNumber").removeClass("invalid");
  var re = /^((\d{4}[-|" "|\.])|(\d{4})){3}\d{4}$/;
  if (! re.test($("#cardNumber").val()) ){
    $(".invalid-feedback-cardNumber").show();
    $("#cardNumber").addClass("invalid");
  } else{
    $("#cardNumber").addClass("valid");
  }
});

$("#mm").keyup(function(event){
  $(".invalid-feedback-mm").hide();
  $("#mm").removeClass("valid");
  $("#mm").removeClass("invalid");
  $("#month").text( $("#mm").val() );

});
$("#mm").focusout(function(event){
  $("#mm").removeClass("valid");
  $("#mm").removeClass("invalid");
  var re=/^\d{2}$/;
  if (! re.test($("#mm").val()) ){
    $(".invalid-feedback-mm").show();
    $("#mm").addClass("invalid");
  } else{
    $("#mm").addClass("valid");
  }
});

$("#yy").keyup(function(event){
  $(".invalid-feedback-yy").hide();
  $("#yy").removeClass("valid");
  $("#yy").removeClass("invalid");
  $("#year").text( $("#yy").val() );

});
$("#yy").focusout(function(event){
  $("#yy").removeClass("valid");
  $("#yy").removeClass("invalid");
  var re=/^\d{2}$/;
  if (! re.test($("#yy").val()) ){
    $(".invalid-feedback-yy").show();
    $("#yy").addClass("invalid");
  } else{
    $("#yy").addClass("valid");
  }
});

$("#cvcNumber").keyup(function(event){
  $(".invalid-feedback-cvcNumber").hide();
  $("#cvcNumber").removeClass("valid");
  $("#cvcNumber").removeClass("invalid");
  $("#cvc").text( $("#cvcNumber").val() );

});
$("#cvcNumber").focusout(function(event){
  $("#cvcNumber").removeClass("valid");
  $("#cvcNumber").removeClass("invalid");
  var re=/^\d{3}$/;
  if (! re.test($("#cvcNumber").val()) ){
    $(".invalid-feedback-cvcNumber").show();
    $("#cvcNumber").addClass("invalid");
  } else{
    $("#cvcNumber").addClass("valid");
  }
});



$("#confirm").click(function(){
  $(".customerInformation").hide();
  $(".thankYou").show();
});

$("#continue").click(function(){
  $(".thankYou").hide();
  $(".customerInformation").show();
  document.getElementById("cardForm").reset();
});
