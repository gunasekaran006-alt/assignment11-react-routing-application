# React Routing Application - Assignment 11

A multi-page React application built to demonstrate advanced routing concepts using `react-router`. This project features dynamic user profiles, programmatic navigation, and a responsive design.

## ✨ Features
- **Dynamic Routing:** Individual user profiles accessible via URL parameters (`/users/:id`).
- **Active Navigation:** Highlighted links in the navbar to show the current page.
- **404 Handling:** A custom "Not Found" page for undefined routes.
- **Programmatic Navigation:** Uses `useNavigate` for "Back" buttons and redirection.
- **Responsive UI:** Mobile-friendly grid layout for user cards.

## 🛠️ Tech Stack
- **React v19**
- **React Router v7**
- **CSS3** (Mobile-first approach)

## 📂 Project Structure
```text
src/
├── components/   # Reusable UI (Navbar, Footer, UserCard)
├── pages/        # Route components (Home, About, Users, etc.)
├── data/         # Mock user data (users.js)
├── styles/       # Component-specific and global CSS
└── App.js        # Router configuration
```

## 🚀 Getting Started

1. **Install Dependencies:**
   ```bash
   npm create vite@latest [projectname]
   ```

2. **Run the App:**
   ```bash
   npm run dev
   ```

## 📖 Available Routes
- `/` - Home Page with hero section.
- `/about` - Information about the app and mission.
- `/users` - Grid list of all users.
- `/users/:id` - Detailed view of a specific user.
- `*` - Custom 404 Page.
