# AI-Powered Chatbot with AWS and React

This project demonstrates the creation and deployment of an **AI-powered chatbot** using **Amazon Lex**, **AWS Lambda**, **API Gateway**, **DynamoDB**, **AWS Cognito** for authentication, and **React.js** for the frontend. The chatbot can be deployed to **AWS S3** as a static website.

## **Features**
- **Natural Language Understanding:** Powered by **Amazon Lex**.
- **Backend Logic:** Handled by **AWS Lambda** with session storage in **DynamoDB**.
- **Frontend:** Built using **React.js**, deployed on **AWS S3**.
- **Authentication:** Managed using **AWS Cognito**.
- **Web Interface:** Provides a user-friendly interface for interacting with the chatbot.

## **Tech Stack**
- **Frontend:** React.js, AWS S3 (for deployment)
- **Backend:** AWS Lambda, API Gateway
- **Authentication:** AWS Cognito
- **Database:** DynamoDB
- **Other Services:** Amazon Lex, AWS SDK

## **Project Structure**
-- check file project-structure.md


## **Setup Instructions**

### **1. Backend Setup (AWS Lambda + DynamoDB)**

	#### **Step 1: Setup DynamoDB**
		1. Go to the **AWS Management Console** and navigate to **DynamoDB**.
		2. Create a new table named **ChatbotSessions**.
   			- **Primary Key:** `sessionId` (String)
		3. After setting up the table, make sure that your Lambda function has the appropriate permissions to interact with DynamoDB.

	#### **Step 2: Deploy Lambda Function**
		1. Clone the repository or navigate to the `backend/` folder.
		2. Create a zip file of the `lambda-function.js` file:
	   		```bash
	  		 zip -r lambda-function.zip .
		3.Go to the AWS Lambda Console and create a new Lambda function.
		4.Upload the zip file you just created and select Node.js as the runtime.
		5.Attach the DynamoDB permissions to the Lambda execution role.
		6.Link the Lambda function with an API Gateway to expose an endpoint for your frontend.
	#### **Step 3: Deploy API Gateway
		1.Go to AWS API Gateway Console.
		2.Create a new HTTP API.
		3.Integrate the API with the Lambda function.
		4.Deploy the API and note the API URL.
### **2. Frontend Setup (React.js + AWS Cognito)
	 #### **Step 1: Setup AWS Cognito
		1.Navigate to AWS Cognito and create a new User Pool for authentication.
		2.Create an App Client within the User Pool (do not generate a secret).
		3.Create an Identity Pool that will allow authentication through the User Pool.
	#### **Step 2: Setup React Application
		1.Go to the frontend/chatbot-ui/ directory.
		2.Run npm install to install the necessary dependencies.
		3.Open the src/aws-config.js file and add the following AWS configuration:
			-User Pool ID
			-App Client ID
			-Identity Pool ID
	#### **Step 3: Start Development Server
		1.In the frontend/chatbot-ui/ directory, run:
			npm start
		This will start the React development server locally.

### **3. Deploy Frontend to S3
	#### **Step 1: Build React App
		1.Go to the frontend/chatbot-ui/ directory.
		2.Run the build command:

			npm run build
	#### **Step 2: Deploy to S3 using the Shell Script
		1.In the deployment/ directory, run the following command to deploy the frontend to AWS S3:
			./deploy-frontend.sh
		   This script will:
			Build the React app.
			Sync the build files to your specified S3 bucket.
			Set the S3 bucket for static website hosting.
		2.After deployment, access your frontend at:
			http://your-s3-bucket-name.s3-website-region.amazonaws.com
### **4. API URL Configuration
	After deploying your API Gateway, you’ll need to configure the frontend to interact with the backend API.
		1.Open the React frontend code in frontend/chatbot-ui/src/Chatbot.js.
		2.Replace the placeholder API_URL with your API Gateway URL.
	

How to Test the Chatbot
	1.Open the frontend URL after deployment.
	2.Log in using AWS Cognito (based on the authentication setup).
	3.Type a message in the chatbot interface.
	4.The Lambda function will process the message, save the session data to DynamoDB, and return a response.
	5,The chatbot will respond back in the chat interface.


Additional Notes
Lambda and DynamoDB Permissions: Ensure your Lambda function has the correct IAM roles and permissions to read/write to DynamoDB and invoke API Gateway.
Cognito Authentication: Make sure to correctly configure Cognito and Cognito Identity Pool for handling authenticated requests in your React frontend.


Contributing
Feel free to fork this repository, open issues, and submit pull requests! Contributions are welcome.


This root README.md will guide you through setting up the backend, frontend, and authentication services while providing a structured approach to deploying the AI-powered chatbot. It should cover everything needed to successfully configure, deploy, and interact with the chatbot in production.


