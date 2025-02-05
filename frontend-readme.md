# Chatbot Frontend (React.js)  

This is the **React.js frontend** for the AI-powered chatbot. It integrates with **Amazon Lex, AWS Lambda, API Gateway, and AWS Cognito**.

## **Features**
✅ AWS Cognito authentication  
✅ Chatbot UI for sending messages  
✅ React.js app deployed to AWS S3  

## **Setup**
1. **Install dependencies**
    ```bash
    npm install
    ```

2. **Update AWS Configuration**
   - Open `src/aws-config.js`
   - Replace placeholders with **Cognito User Pool ID, App Client ID, Identity Pool ID**

3. **Start Development Server**
    ```bash
    npm start
    ```

4. **Build & Deploy to S3**
    ```bash
    npm run build
    cd ../../deployment
    bash deploy-frontend.sh
    ```

📌 **Access chatbot at**:  
http://your-s3-bucket-name.s3-website-region.amazonaws.com

