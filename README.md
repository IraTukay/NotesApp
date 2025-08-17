# Notes App

## Project Description

**Notes App** is a full-stack web application that allows users to securely register, log in, and manage personal notes.  
The frontend is built using React, while the backend is powered by Django REST Framework, with user authentication and note storage.  
The project is deployed via WSO2 Choreo, with backend APIs and a managed PostgreSQL database.
The project can be run locally or deployed using Docker, with a PostgreSQL database for persistent storage.

## Features

- User authentication (registration, login, logout)
- JWT-based access control
- Create, edit, and delete personal notes
- Notes are private and tied to the authenticated user
- Responsive and user-friendly interface
- Persistent storage using PostgreSQL
- Hosted via Choreo with secure API routing
- Can be run locally or via Docker containers

## Technologies Used

### Frontend

- **React** — for building the user interface
- **Axios** — for API requests
- **React Router** — for routing and protected routes
- **CSS** — for styling

### Backend

- **Django & Django REST Framework** — for creating RESTful APIs
- **JWT Authentication** — for secure login
- **PostgreSQL** — for storing notes and user data
- **Choreo** — for deployment and managed backend services
- **Docker** — for containerized deployment

##  Installation and Setup

### Backend (Django) - Local Setup

1. **Clone the repository and navigate to the project folder:**

```bash
git clone https://github.com/IraTukay/NotesApp.git
cd NotesApp
```

2. **Create and activate a virtual environment:**

```bash
python3 -m venv env
source env/bin/activate
```

3. **Navigate to the backend directory and install dependencies:**

```bash
cd backend
pip install -r requirements.txt
```

4. **Apply database migrations:**

```bash
python3 manage.py migrate
```

5. **Start the development server:**

```bash
python3 manage.py runserver
```

### Frontend (React) - Local Setup
1. **Navigate to the frontend directory:**

```bash
cd ../frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a .env file in the root of the frontend folder with your backend URL:**

```bash
VITE_API_URL = "http://127.0.0.1:8000"
```
4. **Start the React development server:**

```bash
npm run dev
```

### Running with Docker

1. **Clone the repository:**

```bash
git clone https://github.com/IraTukay/NotesApp.git
cd NotesApp
```

2. **Build and run the containers:**

```bash
docker-compose up --build
```

3. **Access the application:**


Frontend: http://localhost:3000   

Backend API: http://localhost:8000



4. **Stop the containers:**

```bash
docker-compose down
```



## Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: https://github.com/IraTukay
- Email: ir.tukay@gmail.com

