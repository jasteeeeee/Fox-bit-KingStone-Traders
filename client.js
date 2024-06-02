paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '1000.00' // Static amount for demonstration purposes; you can make it dynamic
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            console.log('Transaction completed by ' + details.payer.name.given_name);
            // Optionally, implement post-transaction logic (e.g., update database, redirect)
            alert('Payment successful. Thank you!');
        });
    },
    onError: function(err) {
        console.error('Error during payment processing:', err);
        alert('An error occurred during payment processing. Please try again.');
    }
}).render('#paypal-button-container');
