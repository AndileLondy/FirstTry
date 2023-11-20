 var BRAINTREE_CLIENT_TOKEN = "production_43vjpp82_vfxt7qtqsh83t6wz";
 var TFS_MERCHANT_ACCOUNT_ID = "TicketFulfillmentServicesLP_instant";
 var BT_PAYPAL_DISPLAY_NAME = "TicketSales.com";
 var braintreeOptions = isInsuranceOfferedPaypal ? { authorization: BRAINTREE_CLIENT_TOKEN, merchantAccountId: TFS_MERCHANT_ACCOUNT_ID } : { authorization: BRAINTREE_CLIENT_TOKEN };


 $(document).ready(function() {
     if ($("#paypalCheckoutType").is(":visible")) {
         initBTPaypal(1104.00);
     }

     var $nonce = $("#bt-nonce");

     var placeOrderButton = $("#checkoutSubmit");
     var placeOrderApplePayButton = $("#applePayCheckoutSubmit");
     var placeOrderWarningText = $("#defaultPlaceOrderWarningText");
     var placeOrderWarningTextApplePay = $("#applePayPlaceOrderWarningText");

     if (!$("#paypalCheckoutType").is(":checked") && !$("#creditCardCheckoutType").is(":checked") && !$("#applePayCheckoutType").is(":checked")) {
         $('.paypalCheckout').hide();
         $('.creditCardCheckout').hide();
         $('.applePayCheckout').hide();
         placeOrderButton.show();
         placeOrderApplePayButton.hide();
         placeOrderWarningText.show();
         placeOrderWarningTextApplePay.hide();
     } else if ($("#creditCardCheckoutType").is(":checked")) {
         $('.paypalCheckout').hide();
         $('.creditCardCheckout').show();
         $('.applePayCheckout').hide();
         placeOrderButton.show();
         placeOrderApplePayButton.hide();
         placeOrderWarningText.show();
         placeOrderWarningTextApplePay.hide();
     } else if ($("#paypalCheckoutType").is(":checked")) {
         initBTPaypal(1104.00);
         $('.paypalCheckout').show();
         $('.creditCardCheckout').hide();
         $('.applePayCheckout').hide();
         placeOrderButton.show();
         placeOrderApplePayButton.hide();
         placeOrderWarningText.show();
         placeOrderWarningTextApplePay.hide();
     } else if ($("#applePayCheckoutType").is(":checked")) {
         $('.paypalCheckout').hide();
         $('.creditCardCheckout').hide();
         $('.applePayCheckout').show();

         placeOrderButton.hide();
         placeOrderApplePayButton.show();
         placeOrderWarningText.hide();
         placeOrderWarningTextApplePay.show();

         if ($nonce.val() === "") {
             $nonce.val("apple-pay");
         }
     }

     $("#paypalCheckoutType").click(function() {
         initBTPaypal(1104.00);
         $('.paypalCheckout').show();
         $('.creditCardCheckout').hide();
         $('.applePayCheckout').hide();
         $('.ticketInsurance').toggle(hasInsuranceOffer && isInsuranceOfferedPaypal);
         placeOrderButton.show();
         placeOrderApplePayButton.hide();
         placeOrderWarningText.show();
         placeOrderWarningTextApplePay.hide();
     });

     $("#creditCardCheckoutType").click(function() {
         $('.paypalCheckout').hide();
         $('.creditCardCheckout').show();
         $('.applePayCheckout').hide();
         $('.ticketInsurance').toggle(hasInsuranceOffer && isInsuranceOfferedCreditCard);
         if (!$("#billingIsShipping").is(":checked")) {
             $(".billingAddressFormAndSelectWrapper").show();
         }

         placeOrderButton.show();
         placeOrderApplePayButton.hide();
         placeOrderWarningText.show();
         placeOrderWarningTextApplePay.hide();

         if ($nonce.val() === "apple-pay") {
             $nonce.val("");
         }
     });

     $("#applePayCheckoutType").click(function() {
         $('.paypalCheckout').hide();
         $('.creditCardCheckout').hide();
         $('.applePayCheckout').show();
         $('.ticketInsurance').hide();

         placeOrderButton.hide();
         placeOrderApplePayButton.show();
         placeOrderWarningText.hide();
         placeOrderWarningTextApplePay.show();

         if ($nonce.val() === "") {
             $nonce.val("apple-pay");
         }
     });

 });