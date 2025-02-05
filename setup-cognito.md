# AWS Cognito Setup  

Follow these steps to set up **AWS Cognito User Authentication** for the chatbot.

### **1. Create a Cognito User Pool**
1. Go to **AWS Cognito Console** → "User Pools".
2. Click **Create user pool**.
3. Name it: `ChatbotUserPool`.
4. Choose **email-based sign-in**.
5. Configure password policy as needed.
6. Click **Create** and note the **User Pool ID**.

### **2. Create an App Client**
1. Inside **ChatbotUserPool**, go to **App integration** → "App clients".
2. Click **Create App Client**.
3. Enable "Generate client secret".
4. Click **Create** and note the **App Client ID**.

### **3. Set Up an Identity Pool**
1. Go to **AWS Cognito Console** → "Identity Pools".
2. Click **Create Identity Pool**.
3. Link it to your User Pool.
4. Note the **Identity Pool ID**.

### **4. Update `aws-config.js` in Frontend**
Replace placeholders in `frontend/chatbot-ui/src/aws-config.js` with your **User Pool ID, App Client ID, and Identity Pool ID**.

---

Instructions:
Set S3 Bucket and Region:
Replace the your-s3-bucket-name and your-aws-region placeholders with your actual S3 bucket name and AWS region (e.g., us-east-1).

Permissions:
Make sure you have the necessary AWS CLI permissions to interact with S3, including the s3:Sync and s3:PutBucketWebsite actions.

Run Script:
After saving the script, make it executable and run it:

bash
Copy
Edit
chmod +x deploy-frontend.sh
./deploy-frontend.sh
What This Script Does:
Builds your React application (npm run build).
Syncs the build directory with your S3 bucket, ensuring all files are uploaded.
Sets the S3 bucket as a static website, making it publicly accessible.
Outputs the S3 URL where the frontend is deployed.
After running this script, your React.js frontend will be live on your S3 bucket and accessible at the provided URL! 🌐


