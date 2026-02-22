// Dynamic API URL based on current window location
const getApiUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8012';
};

export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
  user_id: number;
}

export interface User {
  id: number;
  email: string;
  username: string;
  created_at: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

async function fetchWithAuth(
  url: string,
  options: RequestInit = {},
  token?: string
): Promise<Response> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${getApiUrl()}${url}`, {
    ...options,
    headers,
  });

  return response;
}

// Auth API
export async function register(email: string, username: string, password: string): Promise<User> {
  const response = await fetch(`${getApiUrl()}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, username, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || 'Registration failed');
  }

  return response.json();
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', password);

  const response = await fetch(`${getApiUrl()}/api/auth/login`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || 'Login failed');
  }

  return response.json();
}

export async function getCurrentUser(token: string): Promise<User> {
  const response = await fetchWithAuth('/api/auth/me', {}, token);

  if (!response.ok) {
    throw new Error('Failed to get current user');
  }

  return response.json();
}

// Todo API
export async function getTodos(token: string): Promise<Todo[]> {
  const response = await fetchWithAuth('/api/todos', {}, token);

  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }

  return response.json();
}

export async function createTodo(
  token: string,
  title: string,
  description?: string
): Promise<Todo> {
  const response = await fetchWithAuth('/api/todos', {
    method: 'POST',
    body: JSON.stringify({ title, description }),
  }, token);

  if (!response.ok) {
    throw new Error('Failed to create todo');
  }

  return response.json();
}

export async function updateTodo(
  token: string,
  todoId: number,
  updates: Partial<Todo>
): Promise<Todo> {
  const response = await fetchWithAuth(`/api/todos/${todoId}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
  }, token);

  if (!response.ok) {
    throw new Error('Failed to update todo');
  }

  return response.json();
}

export async function deleteTodo(token: string, todoId: number): Promise<void> {
  const response = await fetchWithAuth(`/api/todos/${todoId}`, {
    method: 'DELETE',
  }, token);

  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }
}
