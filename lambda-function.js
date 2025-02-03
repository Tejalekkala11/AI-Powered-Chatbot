exports.handler = async (event) => {
    const intentName = event.currentIntent.name;
    if (intentName === 'BookTrip') {
        return {
            dialogAction: {
                type: 'Close',
                fulfillmentState: 'Fulfilled',
                message: {
                    contentType: 'PlainText',
                    content: 'Your trip has been booked!',
                },
            },
        };
    }
};
