#!/bin/bash

echo "Starting Todo Application..."
echo "============================"

# Start backend
echo "Starting backend server on http://localhost:8012..."
cd backend
python main.py > /tmp/backend.log 2>&1 
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Check if backend is running
if ps -p $BACKEND_PID > /dev/null; then
    echo "✓ Backend started successfully (PID: $BACKEND_PID)"
else
    echo "✗ Failed to start backend"
    exit 1
fi

# Start frontend
echo "Starting frontend server on http://localhost:8011..."
cd frontend
npm run dev > /tmp/frontend.log 2>&1 
FRONTEND_PID=$!
cd ..

# Wait for frontend to start
sleep 5

# Check if frontend is running
if ps -p $FRONTEND_PID > /dev/null; then
    echo "✓ Frontend started successfully (PID: $FRONTEND_PID)"
else
    echo "✗ Failed to start frontend"
    kill $BACKEND_PID
    exit 1
fi

echo ""
echo "============================"
echo "Application started!"
echo "Backend:  http://localhost:8011"
echo "Frontend: http://localhost:8012"
echo "API Docs: http://localhost:8011/docs"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for interrupt
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" INT TERM

# Keep script running
wait
