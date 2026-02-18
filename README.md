# Todo Application

A full-stack todo application with user authentication, built with Next.js + Tailwind CSS (frontend) and FastAPI + SQLite (backend).

## Features

- ✅ User registration and authentication (JWT tokens)
- ✅ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Track progress with statistics
- ✅ Responsive design with Tailwind CSS
- ✅ Secure password hashing with bcrypt

## Project Structure

```
project/
├── backend/           # FastAPI backend
│   ├── main.py       # Main application and API routes
│   ├── database.py   # SQLite database models
│   ├── auth.py       # Authentication utilities
│   ├── schemas.py    # Pydantic schemas
│   └── requirements.txt
└── frontend/         # Next.js frontend
    ├── src/
    │   ├── app/      # Next.js app router pages
    │   ├── components/  # React components
    │   ├── context/  # React context providers
    │   └── lib/      # Utility functions and API client
    └── package.json
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend server:
   ```bash
   python main.py
   ```
   
   Or using uvicorn directly:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8002
   ```

The backend will be available at `http://localhost:8002`

API Documentation: `http://localhost:8002/docs`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the API URL in `.env.local` if needed (default is `http://localhost:8002`):
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8002
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get access token
- `GET /api/auth/me` - Get current user info

### Todos
- `GET /api/todos` - Get all todos for current user
- `POST /api/todos` - Create a new todo
- `GET /api/todos/{id}` - Get a specific todo
- `PUT /api/todos/{id}` - Update a todo
- `DELETE /api/todos/{id}` - Delete a todo

## Security Features

- **Password Hashing**: Passwords are hashed using bcrypt before storage
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: All inputs validated using Pydantic schemas
- **CORS Protection**: Configured to only allow requests from the frontend
- **SQL Injection Protection**: Using SQLAlchemy ORM with parameterized queries

## Technology Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

### Backend
- FastAPI
- SQLite
- SQLAlchemy (ORM)
- Pydantic (Data validation)
- Python-JOSE (JWT tokens)
- Passlib (Password hashing)

## Development Notes

- The backend uses SQLite for simplicity. For production, consider using PostgreSQL or MySQL.
- The JWT secret key should be changed in production (see `backend/auth.py`).
- CORS is configured to allow requests from `http://localhost:3000`. Update this for production deployment.

## License

MIT
