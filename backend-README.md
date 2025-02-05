# Chatbot Backend (AWS Lambda)  

This folder contains the **AWS Lambda function** for chatbot processing. It integrates with **Amazon Lex, DynamoDB, and API Gateway**.

## **Features**
✅ Handles chatbot messages  
✅ Stores sessions in **DynamoDB**  
✅ Exposes API via **AWS API Gateway**  

## **Setup**
1. **Install dependencies**
    ```bash
    npm install
    ```

2. **Deploy Lambda Function**
   - Zip the files:
    ```bash
    zip -r chatbot-backend.zip .
    ```
   - Upload `chatbot-backend.zip` to AWS Lambda.

3. **Create API Gateway**
   - Go to **AWS API Gateway** and create a new HTTP API.
   - Integrate it with the Lambda function.
   - Deploy and get the API URL.

4. **Update Frontend**
   - Open `frontend/chatbot-ui/src/Chatbot.js`
   - Replace `API_URL` with the **API Gateway URL**.

---

Explanation of the Code  lambda-function.js :
AWS SDK:
The Lambda function uses the AWS SDK to interact with DynamoDB to store user sessions.

Session Data:
The sessionId and userMessage are parsed from the event.body (which comes from the HTTP POST request made by the React frontend).

DynamoDB Integration:
The session information is saved into a DynamoDB table called ChatbotSessions. You should create this DynamoDB table with the appropriate schema before deploying.

Table Name: ChatbotSessions
Primary Key: sessionId (string)
Bot Response:
For now, the bot responds with a message saying, "You said: [userMessage]". This is a placeholder for an actual AI or Lex-powered response. You can replace this logic with calls to Amazon Lex to handle natural language processing.

API Gateway:
This function is exposed through API Gateway, which allows the frontend to send POST requests to the Lambda function.

Setup for DynamoDB:
Before using this Lambda function, create the ChatbotSessions table in DynamoDB with the following schema:

Table Name: ChatbotSessions
Primary Key: sessionId (String)
How to Deploy Lambda:
Zip the Lambda function:
After saving the Lambda function, zip it to deploy it to AWS:

bash
Copy
Edit
zip -r lambda-function.zip .
Upload to AWS Lambda:

Go to AWS Lambda Console → Create a new Lambda function.
Upload the zip file.
Set the runtime to Node.js and configure the necessary permissions (access to DynamoDB).
API Gateway Integration:

Create a new API Gateway REST API.
Create a POST method and link it to your Lambda function.
Deploy the API and note the API URL for use in the frontend.
 
