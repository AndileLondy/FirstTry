 // single order lookup does not have "trk" set so we need this check
 if (typeof trk !== 'undefined') {
     if (trk.checkoutStep === 1) {
         mixpanel.track("Checkout Page 1", {
             "Event Type": trk.category,
             "Category": trk.subCategory,
             "Event": trk.eventName,
             "Event Date": trk.eventDate,
             "Venue": trk.venue,
             "Event ID": trk.pid,
             "Venue City": trk.venueCity,
             "Order Quantity": trk.quantity,
             "List Price": trk.listPrice,
             "Ship Price": trk.shipPrice,
             "Order Total": trk.orderTotal - trk.shipPrice
         });
     } else if (trk.checkoutStep === 2) {
         mixpanel.track("Checkout Page 2", {
             "Event Type": trk.category,
             "Category": trk.subCategory,
             "Event": trk.eventName,
             "Event Date": trk.eventDate,
             "Venue": trk.venue,
             "Event ID": trk.pid,
             "Venue City": trk.venueCity,
             "Order Quantity": trk.quantity,
             "List Price": trk.listPrice,
             "Ship Price": trk.shipPrice,
             "Order Total": trk.orderTotal - trk.shipPrice
         });
     } else if (trk.checkoutStep === 3) {
         mixpanel.track("Checkout success", {
             "Event Type": trk.category,
             "Category": trk.subCategory,
             "Event": trk.eventName,
             "Event Date": trk.eventDate,
             "Venue": trk.venue,
             "Event ID": trk.pid,
             "Venue City": trk.venueCity,
             "Order Quantity": trk.quantity,
             "List Price": trk.listPrice,
             "Ship Price": trk.shipPrice,
             "Order Total": trk.orderTotal - trk.shipPrice
         });
     }
 }