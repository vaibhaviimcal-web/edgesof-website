#!/bin/bash

# Edgesof Solutions Website - Deployment Script
# This script automates the deployment process to Vercel

echo "🚀 Deploying Edgesof Solutions Website to Vercel..."
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "📦 Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "✅ Vercel CLI ready"
echo ""

# Login to Vercel (if not already logged in)
echo "🔐 Checking Vercel authentication..."
vercel whoami || vercel login

echo ""
echo "🔗 Linking to Vercel project..."
# Link to the existing project
vercel link --yes

echo ""
echo "🏗️  Building and deploying to production..."
# Deploy to production
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📊 Next steps:"
echo "1. Visit your deployment URL (shown above)"
echo "2. Test the contact form"
echo "3. Add custom domain (optional)"
echo "4. Configure environment variables for email (optional)"
echo ""
echo "📚 Documentation:"
echo "- Setup: README.md"
echo "- Deployment: DEPLOYMENT.md"
echo "- Assets: ASSETS_GUIDE.md"
echo ""
echo "🎉 Your website is now live!"