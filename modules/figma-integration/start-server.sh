#!/bin/bash

# Figma Integration Server Startup Script
# Usage: ./start-server.sh

echo "🚀 Starting Figma Integration Server..."
echo ""

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Error: Bun runtime is not installed"
    echo "Install Bun: https://bun.sh"
    exit 1
fi

# Navigate to server directory
cd "$(dirname "$0")/server" || exit 1

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    bun install
    echo ""
fi

# Start the server
echo "✅ Starting WebSocket server on port 3055..."
echo "📡 Status endpoint: http://localhost:3055/status"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

bun socket
