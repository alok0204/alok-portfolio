# Alok Kumar Vishwas — Full-Stack Personal Portfolio Website

![Portfolio Banner](client/public/images/profile.webp)

> **Internship:** Thiranex Internship — Task 1: Personal Portfolio Website  
> **Developer:** Alok Kumar Vishwas  
> **Degree:** Bachelor of Technology (B.Tech), Computer Science and Engineering (2nd Year)  
> **Institution:** GL Bajaj Institute of Technology & Management, Greater Noida  
> **GitHub:** [https://github.com/alok0204](https://github.com/alok0204)  
> **LinkedIn:** [https://www.linkedin.com/in/alok-kumar-vishwas-628b663a1/](https://www.linkedin.com/in/alok-kumar-vishwas-628b663a1/)  
> **Email:** [alokvishwas786@gmail.com](mailto:alokvishwas786@gmail.com)

---

## 🌟 Project Overview

This repository contains the complete full-stack personal portfolio website for **Alok Kumar Vishwas**, built from scratch to showcase verified academic coursework, confirmed technical competencies, active student projects, and a secure backend contact integration.

The project is structured as a maintainable monorepo comprising a modern **React + Vite + Tailwind CSS** frontend and a secure **Node.js + Express + Prisma ORM + PostgreSQL** REST API.

---

## 🎯 Confirmed Technical Skills

As a 2nd-year Computer Science student, all presented skills reflect verified coursework and active practice:
- **Programming Languages:** C, C++ (Object-Oriented Programming, Data Structures, Algorithms)
- **Web Development:** HTML, CSS, Node.js (REST APIs, asynchronous event loop, server routing)
- **Developer Tools:** Git, GitHub (Version control, branching, repository management)

*Note: Technologies utilized for hosting or building this portfolio (such as React, Vite, and Prisma) are intentionally separated from personal student skill claims to maintain 100% academic authenticity.*

---

## 🚀 Key Features

### Frontend (Client)
- **Sophisticated Dark Theme UI:** Deep navy and charcoal palette with cyan and blue accents, subtle glowing borders, and rounded cards.
- **Dedicated Profile Photograph Presentation:** Custom high-performance responsive container preserving natural facial proportions, soft ambient glow, and skeleton loading state.
- **Hero & Professional Bio:** Clear value proposition without unsupported claims; complete professional introduction.
- **Interactive Projects Showcase:**
  - **Campus Connect:** Student-focused project with verified public GitHub repository (`https://github.com/alok0204/CampusConnect`).
  - **Habit Tracker:** Personal activity tracking project with clearly designated placeholder status pending public release.
  - Interactive project detail modal with technology breakdown and repository status.
- **Education Timeline:** Highlights B.Tech in CSE at GL Bajaj Institute of Technology & Management.
- **Interactive Contact Form:**
  - Client-side validation (length checks, regex email validation).
  - Rate-limited submission to Express REST API.
  - Success and error alerts with copy-to-clipboard email utility.
- **Accessibility & Performance:** Reduced-motion query detection, mobile navigation drawer, dark/light theme switch, and SEO OpenGraph tags.

### Backend (Server REST API)
- **Express.js Architecture:** Modular structure with dedicated controllers, routes, validators, and middlewares.
- **Prisma ORM with PostgreSQL:** Schema modeling for `Project` and `ContactMessage` with automatic seed support.
- **Graceful Resilience:** Includes an active in-memory repository store that keeps local testing fully functional while PostgreSQL credentials are configured.
- **Security Best Practices:**
  - Helmet HTTP security headers.
  - Configurable CORS whitelist for localhost and production hosts.
  - Rate limiting via `express-rate-limit` (spam prevention on `/api/contact`).
  - Sanitization and validation via `express-validator`.
  - Zero public exposure of stored contact inquiries.

---

## 📁 Repository Structure

```
alok-portfolio/
├── client/                     # Frontend Application
│   ├── public/
│   │   ├── images/
│   │   │   ├── profile.webp    # Optimized real profile image
│   │   │   └── profile.jpg     # Image fallback
│   │   ├── favicon.svg         # Monogram vector favicon
│   │   └── og-image.png
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProfileImage.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── Toast.jsx
│   │   ├── sections/           # Portfolio main sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── config/
│   │   │   └── portfolioData.js # Centralized configuration
│   │   ├── hooks/
│   │   │   ├── useTheme.js
│   │   │   └── useReducedMotion.js
│   │   ├── services/
│   │   │   └── api.js          # REST API service client
│   │   ├── styles/
│   │   │   └── index.css       # Tailwind & custom glow styling
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── .env.example
├── server/                     # Backend Application
│   ├── src/
│   │   ├── controllers/        # Request controllers
│   │   │   ├── projectsController.js
│   │   │   └── contactController.js
│   │   ├── db/
│   │   │   └── prisma.js       # Prisma client & repository store
│   │   ├── middleware/         # Security & error handling
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   ├── routes/             # Express API routes
│   │   │   ├── health.js
│   │   │   ├── projects.js
│   │   │   └── contact.js
│   │   ├── validators/         # Input validation schemas
│   │   │   └── contactValidator.js
│   │   └── index.js            # Express server entry point
│   ├── prisma/
│   │   ├── schema.prisma       # PostgreSQL schema models
│   │   └── seed.js             # Initial project seed script
│   ├── package.json
│   └── .env.example
├── package.json                # Root monorepo orchestration
├── .gitignore
├── .env.example
└── README.md
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, Lucide React, Framer Motion |
| **Backend** | Node.js, Express.js, REST API, Express-Validator, Helmet, CORS |
| **Database & ORM** | PostgreSQL, Prisma ORM |
| **Version Control** | Git, GitHub |
| **Deployment Targets**| Frontend: Vercel / GitHub Pages &bull; Backend: Render &bull; Database: Neon / Supabase / Render Postgres |

---

## 📡 REST API Documentation

Base URL: `http://localhost:5000` (or production host)

### 1. Health Check
- **Endpoint:** `GET /api/health`
- **Description:** Returns API status, uptime, and database connectivity.
- **Response:**
  ```json
  {
    "status": "ok",
    "service": "Alok Portfolio API",
    "uptime": 124.5,
    "timestamp": "2026-11-22T22:25:00.000Z",
    "database": "active"
  }
  ```

### 2. Get All Projects
- **Endpoint:** `GET /api/projects`
- **Description:** Retrieves all projects sorted by creation date.
- **Response:**
  ```json
  {
    "success": true,
    "count": 2,
    "data": [
      {
        "id": "campus-connect",
        "title": "Campus Connect",
        "slug": "campus-connect",
        "description": "A student-focused project named Campus Connect.",
        "technologies": ["JavaScript", "HTML", "CSS"],
        "githubUrl": "https://github.com/alok0204/CampusConnect",
        "featured": true
      },
      {
        "id": "habit-tracker",
        "title": "Habit Tracker",
        "slug": "habit-tracker",
        "description": "A personal project focused on tracking activities and building consistent habits.",
        "technologies": ["Planning / In Progress"],
        "githubUrl": null,
        "featured": true
      }
    ]
  }
  ```

### 3. Get Project By ID or Slug
- **Endpoint:** `GET /api/projects/:id`
- **Description:** Retrieves a single project record by its identifier or slug.

### 4. Submit Contact Message
- **Endpoint:** `POST /api/contact`
- **Headers:** `Content-Type: application/json`
- **Rate Limit:** 5 submissions per hour per IP address.
- **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "Hello Alok, I would like to connect regarding your Campus Connect project."
  }
  ```
- **Success Response (201 Created):**
  ```json
  {
    "success": true,
    "message": "Thank you! Your message has been received and securely saved. I will respond as soon as possible.",
    "data": {
      "id": "msg-uuid",
      "createdAt": "2026-11-22T22:25:00.000Z"
    }
  }
  ```
- **Validation Failure Response (400 Bad Request):**
  ```json
  {
    "success": false,
    "error": "Validation failed",
    "errors": [
      { "field": "email", "message": "Please provide a valid email address." }
    ]
  }
  ```

---

## 💻 Local Installation & Setup

### Prerequisites
- Node.js (v18 or v20+ recommended)
- Git installed
- PostgreSQL instance (optional locally, required for production persistence)

### 1. Clone the Repository
```bash
git clone https://github.com/alok0204/alok-portfolio.git
cd alok-portfolio
```

### 2. Install Dependencies
```bash
# Install both frontend and backend dependencies
npm run install:all
```

Or install individually:
```bash
cd client && npm install
cd ../server && npm install
```

### 3. Configure Environment Variables
Copy `.env.example` in each folder:
```bash
# Server environment
cp server/.env.example server/.env

# Client environment
cp client/.env.example client/.env
```

Edit `server/.env` with your PostgreSQL credentials:
```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/alok_portfolio?schema=public
FRONTEND_URL=http://localhost:5173
```

### 4. Database Setup with Prisma
```bash
cd server
# Generate Prisma Client
npx prisma generate

# Apply migrations
npx prisma migrate dev --name init

# Seed database with initial project records
npm run seed
```

### 5. Running Development Servers
In two separate terminals:

**Terminal 1 (Backend API):**
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 (Frontend Client):**
```bash
cd client
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 🚀 Production Deployment Guide

### A. Deploy Frontend to Vercel
1. Push code to GitHub repository `alok0204/alok-portfolio`.
2. Connect your repository on [Vercel](https://vercel.com).
3. Set **Root Directory** to `client`.
4. Configure Build Command: `npm run build` and Output Directory: `dist`.
5. Add Environment Variable:
   - `VITE_API_BASE_URL`: URL of your deployed backend (e.g. `https://alok-portfolio-api.onrender.com`).
6. Click **Deploy**.

### B. Deploy Backend to Render
1. Create a new **Web Service** on [Render](https://render.com).
2. Connect `alok0204/alok-portfolio`.
3. Set **Root Directory** to `server`.
4. Build Command: `npm install && npx prisma generate`
5. Start Command: `npm start`
6. Add Environment Variables:
   - `DATABASE_URL`: Hosted PostgreSQL connection string (from Render Postgres, Neon, or Supabase).
   - `FRONTEND_URL`: Your Vercel frontend URL.
   - `NODE_ENV`: `production`

---

## 🖼️ How to Update Profile Photograph or Project Details

1. **Replace Profile Image:**
   - Save your new image at `client/public/images/profile.webp` (or `profile.jpg`).
   - The UI automatically renders the new photo with preserved aspect ratio and responsive framing.
2. **Edit Projects / Skills:**
   - Edit `client/src/config/portfolioData.js` to update offline defaults.
   - Update database records using `npx prisma studio` in the `server` directory.

---

## 📄 License & Attribution

Designed and developed by **Alok Kumar Vishwas** for the **Thiranex Internship (Task 1)**.  
Licensed under the [MIT License](LICENSE).
