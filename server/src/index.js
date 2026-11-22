import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import healthRouter from './routes/health.js';
import projectsRouter from './routes/projects.js';
import contactRouter from './routes/contact.js';
import { generalLimiter } from './middleware/rateLimiter.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security HTTP headers
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.some((allowed) => origin === allowed || allowed === '*')) {
      return callback(null, true);
    }
    // Allow any Vercel preview or production deployments for this project
    if (/https:\/\/.*alok.*\.vercel\.app/.test(origin) || origin.endsWith('.onrender.com')) {
      return callback(null, true);
    }
    return callback(null, true); // Permissive in dev/staging to prevent CORS blocks
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
}));

// Body parsing with safe size limit
app.use(express.json({ limit: '15kb' }));
app.use(express.urlencoded({ extended: true, limit: '15kb' }));

// Apply general rate limiter to API routes
app.use('/api', generalLimiter);

// Root informational endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Alok Kumar Vishwas Portfolio Backend API',
    endpoints: {
      health: '/api/health',
      projects: '/api/projects',
      projectById: '/api/projects/:id',
      contact: 'POST /api/contact',
    },
    documentation: 'See README.md for complete documentation',
  });
});

// API Routes
app.use('/api', healthRouter);
app.use('/api', projectsRouter);
app.use('/api', contactRouter);

// 404 & Global Error Middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Server Listen
const server = app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 Portfolio REST API is running on port: ${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Projects: http://localhost:${PORT}/api/projects`);
  console.log(`===============================================`);
});

// Graceful Shutdown
const handleShutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
};

process.on('SIGINT', () => handleShutdown('SIGINT'));
process.on('SIGTERM', () => handleShutdown('SIGTERM'));

export default app;
