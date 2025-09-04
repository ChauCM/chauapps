#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful! Deploying to Firebase..."
    # Deploy only hosting to Firebase
    firebase deploy --only hosting
    
    if [ $? -eq 0 ]; then
        echo "Deployment successful!"
    else
        echo "Deployment failed!"
        exit 1
    fi
else
    echo "Build failed! Deployment cancelled."
    exit 1
fi