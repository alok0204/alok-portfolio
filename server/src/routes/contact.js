import { Router } from 'express';
import { submitContactMessage } from '../controllers/contactController.js';
import { validateContactInput } from '../validators/contactValidator.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// POST /api/contact with rate limiting, input validation, and database storage
router.post('/contact', contactLimiter, validateContactInput, submitContactMessage);

export default router;
