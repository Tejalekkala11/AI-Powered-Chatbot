#!/bin/bash

# Define variables
S3_BUCKET_NAME="your-s3-bucket-name"  # Replace with your S3 bucket name
REGION="your-aws-region"  # Replace with your AWS region (e.g., us-east-1)
BUILD_DIR="frontend/chatbot-ui/build"

# Step 1: Build the React app
echo "Building the React app..."
cd frontend/chatbot-ui
npm run build

# Step 2: Sync build files to the S3 bucket
echo "Syncing build files to S3 bucket..."

aws s3 sync $BUILD_DIR s3://$S3_BUCKET_NAME/ --region $REGION --delete

# Step 3: Set S3 bucket as a static website (if not already configured)
echo "Configuring S3 bucket as a static website..."
aws s3 website s3://$S3_BUCKET_NAME/ --index-document index.html --error-document index.html --region $REGION

# Step 4: Output the S3 website URL
echo "Frontend deployed successfully!"
echo "You can access the frontend at: http://$S3_BUCKET_NAME.s3-website-$REGION.amazonaws.com"

