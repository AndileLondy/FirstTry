  $(function() {
      if ($('body').hasClass("step-1")) {
          $('#breadcrumb-stepper-1').addClass("active-step");
      }
      if ($('body').hasClass('step-2')) {
          $('#breadcrumb-stepper-1').addClass('complete-step');
          $('#breadcrumb-stepper-2').addClass('active-step');
      }
      if ($('body').hasClass('step-3')) {
          $('#breadcrumb-stepper-1, #breadcrumb-stepper-2').addClass('complete-step');
          $('#breadcrumb-stepper-3').addClass('active-step');
      }
  });

  var isInsuranceOfferedCreditCard = true;
  var isInsuranceOfferedPaypal = false;
  var isCreditCardSelected = false;
  var isPaypalSelected = false;