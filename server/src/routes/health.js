import { Router } from 'express';
import { db } from '../db/prisma.js';

const router = Router();

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Alok Portfolio API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: db.isDbConnected() ? 'connected (postgresql)' : 'active (repository store)',
  });
});

export default router;
