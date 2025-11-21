#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful! Starting local preview..."
    # Preview the production build
    npm run preview
else
    echo "Build failed! Preview cancelled."
    exit 1
fi

