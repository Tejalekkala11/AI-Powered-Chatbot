const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // Extract session and user message from the request
    const { sessionId, userMessage } = JSON.parse(event.body);

    // Save session data to DynamoDB
    try {
        await dynamoDB.put({
            TableName: "ChatbotSessions",  // DynamoDB table name
            Item: {
                sessionId: sessionId,
                userMessage: userMessage,
                timestamp: Date.now()
            }
        }).promise();
    } catch (err) {
        console.log("Error saving session:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error saving session data' }),
            headers: { "Content-Type": "application/json" }
        };
    }

    // Simulate a bot response (you can replace this with Amazon Lex integration)
    const botResponse = `You said: "${userMessage}"`;

    // Return response to the user
    return {
        statusCode: 200,
        body: JSON.stringify({ message: botResponse }),
        headers: { "Content-Type": "application/json" }
    };
};

