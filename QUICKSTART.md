# Todo Application - Quick Start Guide

## 🎉 Your application is ready!

A full-stack todo application has been successfully created with:
- **Frontend**: Next.js 14 + Tailwind CSS + TypeScript
- **Backend**: FastAPI + SQLite + JWT Authentication
- **Features**: User registration, login, and complete todo CRUD operations

## 🚀 Currently Running

Both servers are currently running:
- **Backend**: http://localhost:8002
- **Frontend**: http://localhost:3000
- **API Documentation**: http://localhost:8002/docs

## 📱 How to Use

### 1. Access the Application
Open your browser and go to: **http://localhost:3000**

### 2. Create an Account
- Click "Sign up" on the login page
- Enter your email, username, and password
- You'll be automatically logged in after registration

### 3. Use the Todo App
- Add new tasks with titles and optional descriptions
- Mark tasks as complete by clicking the checkbox
- Delete tasks using the trash icon
- View your progress statistics at the top

## 🛠️ Project Structure

```
project/
├── backend/                    # FastAPI Backend
│   ├── main.py                # Main application & API routes
│   ├── database.py            # SQLite models (User, Todo)
│   ├── auth.py                # JWT authentication utilities
│   ├── schemas.py             # Pydantic data schemas
│   ├── requirements.txt       # Python dependencies
│   └── todos.db              # SQLite database (auto-created)
│
├── frontend/                   # Next.js Frontend
│   ├── src/
│   │   ├── app/              # Next.js app router pages
│   │   │   ├── page.tsx      # Login page (home)
│   │   │   ├── register/     # Registration page
│   │   │   └── dashboard/    # Main todo dashboard
│   │   ├── components/       # React components
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── context/          # React context
│   │   │   └── AuthContext.tsx  # Auth state management
│   │   └── lib/              # Utilities
│   │       └── api.ts        # API client functions
│   ├── package.json
│   └── .env.local            # Environment variables
│
├── README.md                  # Detailed documentation
├── start.sh                   # Startup script
└── QUICKSTART.md             # This file
```

## 🔑 Key Features

### Security Features
- ✅ Password hashing with bcrypt
- ✅ JWT token-based authentication
- ✅ Protected API routes
- ✅ Input validation with Pydantic
- ✅ CORS protection
- ✅ SQL injection protection (SQLAlchemy ORM)

### Backend API Endpoints

**Authentication:**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login (returns JWT token)
- `GET /api/auth/me` - Get current user info

**Todos:**
- `GET /api/todos` - List all user's todos
- `POST /api/todos` - Create new todo
- `GET /api/todos/{id}` - Get specific todo
- `PUT /api/todos/{id}` - Update todo
- `DELETE /api/todos/{id}` - Delete todo

### Frontend Pages
- **Login Page** (`/`) - User authentication
- **Register Page** (`/register`) - New user registration
- **Dashboard** (`/dashboard`) - Todo management interface

## 🔄 Restarting the Application

If you need to restart the servers:

```bash
# From the project root directory
./start.sh
```

Or manually:

```bash
# Terminal 1 - Backend
cd backend
python main.py

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 🧪 Testing the API

You can test the API using the interactive Swagger UI:
- Visit: http://localhost:8002/docs
- Use the login endpoint to get a token
- The token will be automatically used for authenticated endpoints

Or use curl:

```bash
# Register
curl -X POST http://localhost:8002/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","username":"username","password":"password123"}'

# Login
curl -X POST http://localhost:8002/api/auth/login \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=user@example.com&password=password123"

# Get todos (replace TOKEN with your access token)
curl http://localhost:8002/api/todos \
  -H "Authorization: Bearer TOKEN"
```

## 📝 Default Test Account

A test account has been created during setup:
- **Email**: test@example.com
- **Username**: testuser
- **Password**: testpass123

## 🎨 UI Features

- Responsive design that works on mobile and desktop
- Beautiful gradient backgrounds
- Real-time progress tracking
- Smooth animations and transitions
- Clean, modern interface with Tailwind CSS
- Loading states and error handling

## 🔧 Configuration

### Backend Configuration
Edit `backend/main.py` to change:
- Server port (default: 8002)
- CORS allowed origins
- JWT secret key (in `backend/auth.py`)

### Frontend Configuration
Edit `frontend/.env.local` to change:
- `NEXT_PUBLIC_API_URL` - Backend API URL

## 📦 Dependencies

### Backend
- FastAPI - Web framework
- SQLAlchemy - Database ORM
- Pydantic - Data validation
- Python-JOSE - JWT tokens
- Passlib - Password hashing
- Uvicorn - ASGI server

### Frontend
- Next.js 14 - React framework
- React 18 - UI library
- TypeScript - Type safety
- Tailwind CSS - Styling

## 🐛 Troubleshooting

**Backend won't start:**
- Check if port 8002 is available
- Ensure all dependencies are installed: `pip install -r requirements.txt`
- Check logs: `cat /tmp/backend.log`

**Frontend won't start:**
- Check if port 3000 is available
- Ensure all dependencies are installed: `npm install`
- Check logs: `cat /tmp/frontend.log`
- Verify `.env.local` has correct API URL

**API requests fail:**
- Ensure backend is running
- Check CORS settings in `backend/main.py`
- Verify authentication token is valid

## 📚 Next Steps

1. **Customize the UI**: Edit components in `frontend/src/components/`
2. **Add features**: Extend the API in `backend/main.py`
3. **Change styling**: Modify Tailwind classes or `tailwind.config.js`
4. **Deploy**: Follow deployment guides for Next.js and FastAPI

## 🎯 Enjoy Your Todo App!

Your full-stack todo application is ready to use. Start adding tasks and managing your productivity!

For detailed documentation, see `README.md`.
