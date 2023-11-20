   // basic IO configuration
   var io_bbout_element_id = 'ioBlackBox'; // populate ioBlackBox in form
   var io_install_stm = false; // do not install ActiveX
   var io_install_flash = false; // do not install flash
   var io_exclude_stm = 12; // exclude Active X on XP and higher

   $(function() {
       var applePayEnabled = true;
       if (applePayEnabled) {
           enableTfsApplePayIfCompatible(function() {
               var applePayDisplayName = "TicketSales.com";
               window.ApplePayInstance = initApplePaySinglePage(applePayDisplayName);
           });
       }
   });